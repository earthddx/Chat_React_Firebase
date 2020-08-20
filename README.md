deployed at: https://chatapp-c7c37.web.app/

The project is build using <code>firebase</code>. If you want to run it on your local machine, you have to initialize firebase database first.

## How to set up firebase
Firestore is used over the real-time firebase database because firestore provides indexing and faster in general.

In order to set up your own firebase db, go to firebase website, create a new project and <b>Add Firebase</b> to your app and follow the steps. Then go to <b>Database</b> side option, choose <b>Start in test mode</b>. Go to <b>project settings</b>, select <b>Config</b> and copy <b>firebaseConfig</b> to <code>firebase.js</code> file. You may later set up <code>.env</code> file with all the sensitive info (keys) being stored in there like <code>apiKey</code>, <code>authDomain</code> and so on.

After that step, run <code>npm install firebase</code> in your project root folder and declare a variable <code>const firebaseApp = firebase.initializeApp(firebaseConfig)</code> that will connect the database to the project and don't forget to import necessary modules. Access to the database is stored in <code>db</code> variable that is passed around the front-end react app and <code>provider</code> variable gives access to Google services. 
