# :city_sunset: 5 Squared
![1636820606(1)](https://user-images.githubusercontent.com/89132821/141651214-89b7ebe1-7161-4ae8-a3d6-00688b3f1be9.png) ![1636821113](https://user-images.githubusercontent.com/89132821/141651454-635fd850-5c77-4e93-a90c-36d40a8329c4.png)

* This was a group project done up as part of my Web Application Development module in school. We were tasked to build a simple application that integrated external APIs and used a responsive framework. My role was to build the backend where I used mainly Vue.js. You can access our website from https://d19j4mj1nkkikx.cloudfront.net/home.html.

* In this project, we aim to build a web-based application for drivers to use to aid them in finding available car parks. This will help drivers plan their route more efficiently and help them save time by not needing to find other available car parks when their chosen car park is full. Most Singaporean drivers love free parking, and this application will allow users to view car parks that have free parking within a 500m radius from their desired location. With the use of real-time APIs like Carpark Availability by Govtech, drivers are ensured that they will receive accurate information with regards to car park availability, helping them tackle the problem of searching for car parks or paying expensive parking when there are free options nearby.

* Our project is aimed towards Singaporean drivers, who wishes to find the cheapest, most walkable carpark from their destination

## :computer: How to Use Our Web Application (for Visitors to our Website) ##

<!-- * Yay! Your website is READY for visitors!
* Provide a step-by-step description of what the user/visitor can/should do upon visiting your website for the first time.
* It would be wonderful if you could include **screenshot images** of web pages to demonsrate what the user/visitor can/should do. -->

***Scenario 1: Manually input destination (location name or postcode) to get parking information around destination***

In the **main page** open the website link, and you’re immediately greeted with a minimalistic layout. There’s an input box where you can key in your destination, let’s use *Singapore Management University*. You could even use the postal code too. Type that in, press **‘Find Parking’** and you’ll get redirected to the results page.

![image](https://user-images.githubusercontent.com/89132821/141654451-a61514b7-e5c8-4b14-a183-ec173619e136.png)



Now, what you’re going to see is a map of Singapore with these little colored markers. Right below, there’s a legend that explains the different colours and what they signify. Blue means your target location that you inputted into the search box. Each of the markers surrounding it represents a car park, color-coded based on the number of available lots. If you click on each of the markers, there’s a pop-up giving you some details about the carpark.

![image](https://user-images.githubusercontent.com/89132821/141654452-7a084453-72ad-4ae0-8c39-d6ae84861c19.png)


If you scroll further below, you’ll see all these carparks displayed in a list format. Here, you see the name of the car parks that were returned with the **Lots Available** highlighted. We included two sort features: based on **Lots Available** and **Walking Distance**. Let’s press them and see what happens. Notice how the results immediately shift to reflect the new sorting - and it’s all done without the page reloading, so that it saves the user time and is responsive.

![image](https://user-images.githubusercontent.com/89132821/141654454-70d8c212-4fe1-4e32-9465-bba955c06f53.png)
![image](https://user-images.githubusercontent.com/89132821/141654464-b6bf0351-c245-494f-8594-51fb459e90d6.png)

***Scenario 2: Get parking information around user's current location***

Get Current Location: By clicking on **"Or Use Current Locaiton Instead"**, application will show the parking information around user's current location
