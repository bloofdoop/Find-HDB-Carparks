
// custom colour markers, code to add marker colour -> L.marker([1.35, 103.81], {icon: greenIcon}).addTo(mymap)
// source: https://github.com/pointhi/leaflet-color-markers/blob/master/README.md
var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var orangeIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const app = Vue.createApp({
    data() {
        return {
            search_radius: 500,
            APIKEY: "AIzaSyCN0Da8hXmIOORF9yZOInzJ5SzevC2Jsp8",
            urls: {
                geocode_url: "https://maps.googleapis.com/maps/api/geocode/json?address=",
                epsg_url: "https://developers.onemap.sg/commonapi/convert/4326to3414",
                carpark_url: "https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&limit=5000",
                clots_url: "https://api.data.gov.sg/v1/transport/carpark-availability"
            },
            address: "",
            search_success: false,
            coords: {
                lat: "",
                lng: ""
            },
            epsg_coords: {
                x: "",
                y: ""
            },
            cpList: [],
        }
    },
    methods: {

        // This method gets the lat and lng coordinates from a given address
        // or postal code string

        getLatLng() {
            // console.log("[START] of getLatLng");
            if (layerGroup) {
                layerGroup.clearLayers();
            }
            if (this.address.length == 0) {
                this.cpList = []
                var url = this.urls.epsg_url + "?latitude=" + this.coords.lat + "&longitude=" + this.coords.lng;
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.epsg_coords.x = data.X;
                        this.epsg_coords.y = data.Y;
                        var lat = this.coords.lat;
                        var lng = this.coords.lng;
                        mymap.panTo(new L.LatLng(lat, lng))
                        L.marker([lat, lng], { icon: blueIcon }).addTo(layerGroup)
                            .bindPopup("You are here");
                        this.findNearbyCarparks();
                    })
            }
            else {
                this.cpList = []
                let input_adr = this.address + " Singapore";
                let geocode_url = this.urls.geocode_url;
                var s = input_adr.split(" ");
                s = s.join("+");
                var url = geocode_url + s + "&key=" + this.APIKEY;
                // console.log(url)
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        var lat = data["results"][0]["geometry"]["location"]["lat"];
                        var lng = data["results"][0]["geometry"]["location"]["lng"];
                        this.coords.lat = lat;
                        this.coords.lng = lng;
                        this.convertEPSG();
                        mymap.panTo(new L.LatLng(lat, lng))
                        L.marker([lat, lng], { icon: blueIcon }).addTo(layerGroup)
                            .bindPopup("You are here");

                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        alert("Unknown Address")
                    });
            }
            // console.log('[END] of getLatLng');
        },


        // This method converts the coordinates of the lat and lng into EPSG-3414
        // which is needed to identify carparks in the database

        convertEPSG() {
            // console.log("[START] of the convertEPSG");
            var url = this.urls.epsg_url + "?latitude=" + this.coords.lat + "&longitude=" + this.coords.lng;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.epsg_coords.x = data.X;
                    this.epsg_coords.y = data.Y;
                    this.findNearbyCarparks();
                })
            // console.log("[END] of the convertEPSG");
        },

        add_markers(x, y, cpDict, cpModDict) {
            api_url = "https://developers.onemap.sg/commonapi/convert/3414to4326?X=" + x + "&Y=" + y
            fetch(api_url)
                .then(response => response.json())
                .then(data => {
                    let available = parseInt(cpDict.lots_available)
                    let markerColour = greenIcon
                    if (available <= 10) {
                        markerColour = redIcon
                    }
                    else if (available <= 50) {
                        markerColour = orangeIcon
                    }

                    L.marker([data.latitude, data.longitude], { icon: markerColour }).addTo(layerGroup)
                        .bindPopup(`
                        <b>Address</b>: ${cpDict.address} </br>
                        <b>Lots Avaliable</b>: ${cpDict.lots_available} </br>
                        <b>Free Parking</b>: ${cpDict.free_parking} </br>
                        <b>Payment System</b>: ${cpDict.type_of_parking_system} </br>
                        <b>Carpark Type</b>: ${cpDict.car_park_type} </br>
                        <b>Distance</b>: ${cpModDict.walking_distance} </br>
                        `)




                });

        },

        findNearbyCarparks() {
            // console.log("[START] of findNearbyCarparks");

            var url = this.urls.carpark_url;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    let cpList = this.cpList;
                    var data = data["result"]["records"];
                    for (var cpDict of data) {
                        if (this.withinRadius(cpDict)) {
                            cpList.push(cpDict);
                        }
                    }
                    this.search_success = true;
                    this.addAvailability();
                })
            // console.log("[END] of findNearbyCarparks");
        },

        withinRadius(cpDict) {
            let x = this.epsg_coords.x
            let y = this.epsg_coords.y
            let rad = this.search_radius
            if (Math.abs(cpDict["x_coord"] - x) <= rad && Math.abs(cpDict["y_coord"] - y) <= rad) {
                return true;
            }

        },

        addAvailability() {
            let cpList = this.cpList;
            let x = this.epsg_coords.x
            let y = this.epsg_coords.y
            var cpLotDict = {};
            var url = this.urls.clots_url;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // Retrieve the data of HDB carpark availability and convert into dictionary
                    data = data["items"][0]["carpark_data"];
                    for (var cpLot of data) {
                        var key = cpLot["carpark_number"];
                        var value = cpLot["carpark_info"][0]["lots_available"]
                        cpLotDict[key] = value;
                    }
                    // Add the lots available to the cpList
                    // And modify the dicitonary to contain only the necessary properties
                    var cpModList = [];
                    for (var cpDict of cpList) {
                        cpModDict = {};
                        var cpn_key = cpDict["car_park_no"];
                        cpDict["lots_available"] = cpLotDict[cpn_key];
                        cpModDict["address"] = cpDict["address"];
                        // if type is undefined, put a "-" instead
                        if (typeof cpDict["car_park_type"] === 'string') {
                            cpModDict["type"] = cpDict["car_park_type"];
                        }
                        else {
                            cpModDict["type"] = "-";
                        }

                        // if lots are undefined, put 0 instead

                        if (typeof cpDict["lots_available"] === 'string') {
                            cpModDict["lots_available"] = cpDict["lots_available"];
                        }
                        else {
                            cpModDict["lots_available"] = "-";
                        }

                        cpModDict["free_parking"] = cpDict["free_parking"];
                        // to estimate walking distance
                        var wd = Math.sqrt(Math.pow(Math.abs(cpDict["x_coord"] - x), 2) + Math.pow(Math.abs(cpDict["y_coord"] - y), 2)).toFixed(0)
                        cpModDict["walking_distance"] = wd
                        cpModList.push(cpModDict);
                        this.add_markers(cpDict.x_coord, cpDict.y_coord, cpDict, cpModDict)
                    }
                    this.cpList = cpModList;
                })
        },

        sortLots() {
            let cpList = this.cpList;
            cpUndefinedLots = [];
            cpDefinedLots = [];
            for (cpDict of cpList) {
                if (cpDict.lots_available === '-') {
                    cpUndefinedLots.push(cpDict)
                }
                else {
                    cpDefinedLots.push(cpDict)
                }
            }
            cpDefinedLots.sort(function (a, b) {
                return Number(b.lots_available - a.lots_available)
            })
            this.cpList = cpDefinedLots.concat(cpUndefinedLots);
        },


        sortDistance() {
            let cpList = this.cpList;
            cpList.sort(function (a, b) {
                return Number(a.walking_distance - b.walking_distance)
            })
        },

        getLocation() {
            // get the current location of the user
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        },

        showPosition(position) {
            var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&key=" + this.APIKEY
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // console.log(data.results[0].formatted_address)
                    this.address = data.results[0].formatted_address
                    this.getLatLng()
                })


        }
    },

    created() {
        let search_loc_url = window.location.href;
        if (search_loc_url.search("lat=") != -1) {
            var tmp = search_loc_url.split("lat=")
            tmp = tmp[1].split("?lng=")
            this.coords.lat = tmp[0]
            this.coords.lng = tmp[1]
        }
        else {
            var tmp = search_loc_url.split("?address=");
            tmp = tmp[1];
            tmp = tmp.replace(/%20/g, " ");
            this.address = tmp;
        }
        this.getLatLng();
    }

})

app.mount('#app')


// leaflet map, focuses map on user's locations if shared. Else defaults to center of singapore.
var mymap = L.map('mapid').setView([1.35, 103.81], 13);
mymap.locate({ setView: true, maxZoom: 16 });

//Leaflet Map layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2V2aW52eSIsImEiOiJja3ZidnhpaTcwMzhtMnBxNXZzdjRyeWJwIn0.8699TdIXrQes73dmoJK-DQ', {
    attribution: '',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

var layerGroup = L.layerGroup().addTo(mymap);
