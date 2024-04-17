# Project Title: SpeedLane Task (Frontend)
## Project Title: Employees Lookup Application

<img src="https://github.com/jad-jbara/speedlane-task-react-native/blob/master/src/Assets/Images/logo.png" width="100">


## Description: 
This is the frontend part of the Employees Lookup Application. This application is a simple application that allows users to view, add, update and delete employees and departments. The application is built using react-native as frontend. The application is built using the following technologies:
1. React Native
2. Mobx
3. Axios
4. React Navigation
5. React Native Vector Icons
6. React Native MMKV Storage
7. Shopify flash-list
8. React Native Reanimated

## Pre-requisite Instructions to set-up the project: (There are no extra steps to set-up the project other than the normal react-native set-up steps)
1. Make sure you have node installed on your machine
2. Make sure you have yarn installed on your machine
3. Make sure you have react-native installed on your machine (All steps are available on the [react-native documentation](https://reactnative.dev/docs/environment-setup))
4. Make sure you have Xcode installed on your machine (for ios)
5. Make sure you have Android Studio installed on your machine (for android)
6. Make sure you have cocoapods installed on your machine (for ios)

## Instructions to run the project:
1. Clone the repository
2. Run `yarn install` to install all the dependencies
3. Run `pod install` in the ios folder to install the pods
4. Run `yarn start` to start the metro bundler
5. Run `yarn ios` to run the application on ios simulator
6. Run `yarn android` to run the application on android emulator
    ### NOTE :
    - Make sure that the backend is running on the same machine or on a server and that the backend url inside of the `src/Constants/Keys.ts` file is pointing to the correct url of the backend (the default url set is `http://localhost:3000`)

## Progress on project and changes done
1. Created the project structure (folders, files, etc)
2. Added the necessary dependencies
3. Started with adding design system classes and components
4. Built the navigation stack and the services and stores
5. Once data was ready from the backend, started integrating the screens with the real live data from the backend
6. Added the necessary functionalities to the screens
7. Added the necessary validations
8. Added re-usable components
9. Added app icon and tested app on Android
10. Added some tests to some components as proof of concept (not all tests are added)

# Future changes to be done
## Future changes:

1. Add tests to reach 100% test coverage
2. Add more functionalities to the application
3. Add more validations
4. Refactor the code to make it more readable and maintainable
5. Add more re-usable components
6. Add more animations and transitions
7. Add more features to the application


## Screenshots:
<img src="https://github.com/jad-jbara/speedlane-task-react-native/blob/master/screenshots/1.png" width="200">
<img src="https://github.com/jad-jbara/speedlane-task-react-native/blob/master/screenshots/2.png" width="200">
<img src="https://github.com/jad-jbara/speedlane-task-react-native/blob/master/screenshots/3.png" width="200">
<img src="https://github.com/jad-jbara/speedlane-task-react-native/blob/master/screenshots/4.png" width="200">
<img src="https://github.com/jad-jbara/speedlane-task-react-native/blob/master/screenshots/5.png" width="200">
<img src="https://github.com/jad-jbara/speedlane-task-react-native/blob/master/screenshots/6.png" width="200">
<img src="https://github.com/jad-jbara/speedlane-task-react-native/blob/master/screenshots/7.png" width="200">

## Screen Recording:
### App open
![](https://github.com/jad-jbara/speedlane-task-react-native/blob/master/gifs/1.gif)
### Employees Filter with no results
![](https://github.com/jad-jbara/speedlane-task-react-native/blob/master/gifs/2.gif)
### Employees Filter with results
![](https://github.com/jad-jbara/speedlane-task-react-native/blob/master/gifs/3.gif)
### Employee Details with Edit
![](https://github.com/jad-jbara/speedlane-task-react-native/blob/master/gifs/4.gif)
### Create Employee
![](https://github.com/jad-jbara/speedlane-task-react-native/blob/master/gifs/5.gif)
### Search Employee
![](https://github.com/jad-jbara/speedlane-task-react-native/blob/master/gifs/6.gif)
