// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBcJzZt-FLFr6kuQM1B_0NBe6rL3M7S8YE",
    authDomain: "myapplication-4c621.firebaseapp.com",
    databaseURL: "https://myapplication-4c621.firebaseio.com",
    projectId: "myapplication-4c621",
    storageBucket: "myapplication-4c621.appspot.com",
    messagingSenderId: "1082405008314",
    appId: "1:1082405008314:web:25d40975fc9361bd9ba383"
  },
  userApi: 'http://localhost:5000/myapplication-4c621/us-central1/api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
