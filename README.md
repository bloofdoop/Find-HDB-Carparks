[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=454878&assignment_repo_type=GroupAssignmentRepo)

# :city_sunset: 5 Squared
![1636820606(1)](https://user-images.githubusercontent.com/89132821/141651214-89b7ebe1-7161-4ae8-a3d6-00688b3f1be9.png) ![1636821113](https://user-images.githubusercontent.com/89132821/141651454-635fd850-5c77-4e93-a90c-36d40a8329c4.png)


## :running: Contributors
| Names | Email |
| ----------- | ----------- |
| Wong Ju Da | juda.wong.2020@scis.smu.edu.sg |
| Cindy Clara| cindyclara.2020@scis.smu.edu.sg |
| Richard Goh Jiangwei| richardgoh.2019@business.smu.edu.sg |
| Zhang Siyang| syzhang.2019@scis.smu.edu.sg |
| Kevin Vincent Yoong Chun Han| kevinyoong.2020@scis.smu.edu.sg |

## :milky_way: Project Overview ##

<!-- * Describe your project. What is it called? What does it do? Why did you make this web application? Who will benefit from using your web application? Describe your users - who are they? (anyone? or specific target age group or gender? region? country?)
* Feel free to use diagrams and images to describe. For example, if you have a system architecture diagram, please place it here and describe it. If you have a business process diagram, you can also place it here and describe it. -->

* In this project, we aim to build a web-based application for drivers to use to aid them in finding available car parks. This will help drivers plan their route more efficiently and help them save time by not needing to find other available car parks when their chosen car park is full. Most Singaporean drivers love free parking, and this application will allow users to view car parks that have free parking within a 500m radius from their desired location. With the use of real-time APIs like Carpark Availability by Govtech, drivers are ensured that they will receive accurate information with regards to car park availability, helping them tackle the problem of searching for car parks or paying expensive parking when there are free options nearby.

* Our project is aimed towards Singaporean drivers, who wishes to find the cheapest, most walkable carpark from their destination

## :mag: How to Install and Run Our Web Application (for Developers) ##

<!-- * If a new developer were to have access to your IS216 project GitHub repo (and subsequently your source code files) and replicate your development environment on his development laptop computer, what are the steps he should take?
* What does he needs to install on his development laptop computer? How can he download your project files and run it on his own computer?
* Provide a step-by-step description of how to get the development environment running. You can choose to do so for at least 1 Operating System (Windows 10 or Mac OS).
* Feel free to use diagrams and images to describe. -->
### For Windows developer:

In order to install and run the web application for developer at his own computer, a proper development environment should be set up and the projects files should be downloaded to the right directory. Following are the step-by-step instructions:

### Development environment

Visual Studio Code (Recommended code editor): Download ( https://code.visualstudio.com/download )

Google Chrome (Web browser): Download the latest version( https://www.google.com/intl/en_sg/chrome/) 

WAMP (Localhost): Download WAMP using this link (https://sourceforge.net/projects/wampserver/files/latest/download)

> #### Important things to note for WAMP installation: 
>
> - By default, anything you download will be in C:\Users\username\Downloads. If you have change your download directory, please find the file named wampserver3.2.3_x64.
> - Please CHOOSE MYSQL 8.0.21 option
> - Setup will ask for your default browser. We will use Chrome as our default Browser
> - Remember phpMyAdmin user name is root and there is no password
>  

> #### Running your WAMP server:
>
> - Double click on the WAMPSERVER64 ICON on your desktop.
> - If you see User account control screen. [Do you want to allow this app from an unknown publisher to make changes to your device?] Click [Yes].
> - When WAMP is started, you will see an [W] icon in the task bar. Click on the [up arrow] (as highlighted in Blue Square in the figure below) in the taskbar to show hidden icons. The [W] icon is indicated by the red arrow.
> - The WAMP icon should be GREEN and when you mouse over the icon, it will say “local server: All services are running”.
> - Left click on the icon and go to PHP->Version->7.4.9. We are using this version of PHP.
> - Make sure MYSQL version is 8.0.21.
> - Disable MariaDB. Right click on WAMP Icon in the tray. Wamp Settings -> Uncheck Allow MariaDB.
> - Make sure the DEFAULT PORT of MYSQL is 3306. You can change the port number by Right Click WAMP Icon -> Tools-> under port use by MySQL-> use a port Other than XXXX. WAMP will be restarted.
> - Your Root directory will be in C:/wamp64/www
> - All your HTML , PHP, JS , CSS should all reside in folders within the www folder.
> - References: http://www.wampserver.com/en/
> 

### Download the project files to the web root directory and render the webpage in browser

1. In the Github branch “main”, click on Code -> Download ZIP -> is216-project-group25-main.zip

![1636859676(1)](https://user-images.githubusercontent.com/89132821/141666058-4f582eda-0bc0-48a7-a419-fcfd1a4cbad2.png)

2. Unzip the zipped files in your web root directory (Or any meaningful sub-directory):

>> For example (WAMP):    C:\wamp64\www\\...\is216-project-group25-main

3. Next, visit web pages (.html) via HTTP protocol: open google Chrome and key in the correct path (example: http://localhost/.../is216-project-group25-main/Project) in the address bar and the browser will show the index of the files. By then developers can click on Home.html, and the home page of the application will be shown accordingly. Developers can freely edit the code and see how the webpage view be rendered in browser.

### How to get Google Map API ( https://cloud.google.com/gcp )

1. After signing up for an account, go to “Google Maps Platform", select “Maps Static API", and enable “Maps Static API"

2. Enabling the following APIs 
 
![image](https://user-images.githubusercontent.com/89132821/141653348-3bb1a4e7-bec3-4ff5-86c3-dfdffa8129ca.png)


3. Getting API Kay: Credentials -> Credentials in APIs & Services -> +CREAT CREDENTIALS -> API Key and you will get an API key
![image](https://user-images.githubusercontent.com/89132821/141653336-09105f39-1967-4390-bf0d-46893adbaf14.png)


4. Go Metrics to track your API usage. Be careful about it.

5. Input your API Key in ...\is216-project-group25-main\Vue\integ.js line 44
![image](https://user-images.githubusercontent.com/89132821/141653624-94b98293-17c4-474d-9aa4-5917925ddc56.png)

## :bulb:  How to Deploy Our Web Application (for Developers) ##

* Our web application can be accessed at https://d19j4mj1nkkikx.cloudfront.net


### Steps to deploy our website

1. Create an account at https://aws.amazon.com/

2. Search for "S3" in the search bar on the home page. 

![alt text](https://i.imgur.com/7s0Bkzn.png "Logo Title Text 1")

3. Once on Amazon S3 page, click "Create Bucket" on the right. &nbsp; &nbsp; 

![alt text](https://i.imgur.com/QfTvatT.png "Create Bucket")

4. Enter your desired bucket name, leaving the other options untouched.

5. Enter the newly created bucket and click upload to upload your files.

6. After uploading, click on property and scroll all the way to the bottom to find "Static website hosting".

7. Click on edit on the right and enable static website hosting. Under index document, enter "home.html" and save changes. 

![alt text](https://i.imgur.com/vIF11ZY.png "Static host settings")

8. Next, click on permissions and under "Block public access (bucket settings)", click edit and uncheck "block all public access" and save. 

9. Under permissions, scroll down and click edit next to "Bucket policy". Enter the following code:

``` 
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::5squared/*"
        }
    ]
}
```
10. Go back to "Properties" and scroll down to retrieve the url for your deployed website*. 

![alt text](https://i.imgur.com/2xAd1RO.png "Static host settings")

**\*Note: S3 website will be unable to get current location as it is unsecure.**

### Steps to secure deployed website

1. From AWS, navigate to [CloudFront](https://console.aws.amazon.com/cloudfront/v3/home#/distributions)

2. Create a new distribution. &nbsp; &nbsp; ![alt text](https://i.imgur.com/1teQkPD.png "Create distribution")

3. Under Origin domain, enter your created S3 static website URL. 

![alt text](https://i.imgur.com/hpj0fLr.png "Orgin Domain")

4. Enable Origin Shield, select any region. 

![alt text](https://i.imgur.com/cwT5qYQ.png "Origin Shield")

5. Leave the other settings unchanged and create distribution. 

6. Locate your new website URL on the [CloudFront](https://console.aws.amazon.com/cloudfront/v3/home#/distributions) homepage under "Domain name". 
    
![alt text](https://i.imgur.com/UMN195f.png "Origin Shield")

7. You have now successfully deployed your web application.

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

***Mini Feature: Send feedback to the application designer***

At the navigation bar on top, there’s an **About** tab that tells you about our project. And if there’s any feedback you have regarding the application, whether it’s a bug or to suggest some room for improvement, we provided our contact details for 5squared. You can fill it in with some information, press **Send** and we’ll automatically receive the email where we’ll look through the problem for you.

## :gift: Other Things ##

* [FIGMA] URL/Link: https://www.figma.com/file/0cZldGRAIdkLUblzTFLqkC/IS216-project?node-id=110%3A6
* [User Flow]  URL/Link: https://lucid.app/lucidchart/d3eb1e9e-2612-459a-be96-f238b3602a0f/edit?viewport_loc=-315%2C115%2C1824%2C1077%2C0_0&invitationId=inv_d9d01c8c-e1a3-4c14-ab1d-b6456a22c753
![IS216 User flow_process diagram](https://user-images.githubusercontent.com/89092999/141613883-f394cc16-f94c-469c-8e6d-5cacff52369b.png)

* [Architecture]  URL/Link:


<!-- ## 🤓 Useful Resources ##

* [**Markdown** Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
* [**GOOD** README Example 1](https://github.com/testing-library/cypress-testing-library)
* [**GOOD** README Example 2](https://github.com/typeorm/typeorm)
* [**GOOD** README Example 3](https://github.com/amark/gun)
* [**GOOD** README Example 4](https://github.com/google/leveldb) -->
