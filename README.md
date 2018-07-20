<div align="center">
  <img width='200' src="https://cdn-images-1.medium.com/max/600/1*i1yreXvK0kGrS9_uy5qKHQ.jpeg"/>
</div>

<h1>React-native react-redux skeleton</h1>

  This skeleton is forged with the greatest libraries available to provide a pretty awesome kickstart for your new react-native app.

## Features and libs
 - Single source of truth with react-redux
 - apisauce
 - Components of react-native-elements
 - Icons of react-native-ionicons
 - Middleware redux-thunk
 - Navigation with react-navigation
 - Test with jest
 - Facebook expo

Obs: This project was bootstrapped with Create React Native App.

## Installation
  Get the project with git clone
  Install npm dependencies with npm install

## To run
```
  yarn android run
  yarn ios run
```

## Environment Variables
  You can configure some of Create React Native App's behavior using environment variables.
  - Duplicate the file ./app/config/index.example.js and rename to index.js
  - Configuring Packager IP Address on ./app/config
  When starting your project, you'll see something like this for your project URL:

exp://YOUR_IP:19000

Now, you can run on your device with the app Facebook expo (avaliable in play store or apple store),
or on your browser.

##Troubleshooting
  Networking
  - If you're unable to load your app on your phone due to a network timeout or a refused connection, a good first step is to verify that your phone and computer are on the same network and that they can reach each other. Create React Native App needs access to ports 19000 and 19001 so ensure that your network and firewall settings allow access from your device to your computer on both of these ports.

  Try opening a web browser on your phone and opening the URL that the packager script prints, replacing exp:// with http://. So, for example, if underneath the QR code in your terminal you see:

  ```
  exp://192.168.0.1:19000
  ```

  Try opening Safari or Chrome on your phone and loading

  ```
  http://192.168.0.1:19000
  ```
  and

  ```
  http://192.168.0.1:19001
  ```

  If this works, but you're still unable to load your app by scanning the QR code, please open an issue on the Create React Native App repository with details about these steps and any other error messages you may have received.

  If you're not able to load the http URL in your phone's web browser, try using the tethering/mobile hotspot feature on your phone (beware of data usage, though), connecting your computer to that WiFi network, and restarting the packager.

## Tips
- To clear cache, use npm start -- --reset-cache or yarn start -- --reset-cache
- Commands:
  *npm test*
  - Runs the jest test runner on your tests.

  *npm run ios*
  - Like npm start, but also attempts to open your app in the iOS Simulator if you're on a Mac and    have it installed.

  *npm run android*
   - Like npm start, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see React Native docs for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of adb available to Create React Native App
