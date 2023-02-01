# social-api
A social network api walkthrough video

<img src="https://octodex.github.com/images/daftpunktocat-thomas.gif" alt="github mascot with daft punk helmet on" width="200"/>

## 💡 Table of Contents

- [Description](#description-id)
- [New Tech Learned](#newtech-id)
- [Installation](#installation-id)
- [Usage](#usage-id)
- [Questions](#questions-id)

## <a id="description-id"></a>Description
This project was created to utilize MongoDB and Mongooes ODM to manage a social media database. Mongoose is MonogDB handles NoSQL type data inside of applications, meaning the data is unorganized and unrelated. NoSQL is the polar opposite of a relational database that uses SQL. Using a back-end geared toward handling a social media app's data, we can take in an infinite amount of random users (who have thoughts, friends, and reactions) that need to be tracked but in no structured way. Using Insomnia, the routing of such an app is demonstrated. Please refer to the video link below

> Full visual demonstration:

## <a id="newtech-id"></a>New Tech Learned

```js
- MongoDB
- Mongoose ODM
- Unrelational database structuring 
- Routing MongoDB with Insomnia
```

## <a id="installation-id"></a>Installation
To use this application, you must download node onto your local machine. Please visit https://nodejs.org/en/ to install 
</br></br>
<u>You will also need:</u>
- VSCode: (https://code.visualstudio.com/download) 
- Insomnia: (https://insomnia.rest)
- MongoDB: (https://www.mongodb.com)
- Mongoose ODM: (https://mongoosejs.com)
- The code: (https://github.com/ScottsC0de/e-commerce)

## <a id="usage-id"></a>Usage
With node installed, you can now run node commands on JavaScript files. To use this app, first, we must initialize the database by typing ```mongod``` in our terminal. Then, open VSCode or the CLI. To use proceed using the app, you must be in its file from the CLI or an app that allows you to run CLI commands. For this app we used VSCode’s Integrated Terminal. If you are using VSCode, right click on the server.js file and click ‘Open In Integrated Terminal’. Run a node server.js command to fire up our server. You should receive a console log message saying our server is listening. This means we can now access our Mongo database

Head over to Insomnia and follow the proper routing methods in this video to create, read, update, and delete the data used in our social network app

```js
Insomnia Routes and Methods

Create data using post()
Read data using get()
Update data using put()
Delete data using delete()
```

## <a id="questions-id"></a>Links
The author is a developer and tutorial creator with a GitHub repo: https://github.com/ScottsC0de & email: **Scott5902@gmail.com**