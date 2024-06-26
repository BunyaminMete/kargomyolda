//updating soon.
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/welcomeScreen";
import UserLoginScreen from "../screens/loginScreens/login";
import RegisterMusteri from "../screens/registerScreens/customerRegisterScreen";
import RegisterKurye from "../screens/registerScreens/courierRegisterScreen";
import kuryeLoginScreen from "../screens/loginScreens/loginkurye";
import KuryeBelgeScreen from "../screens/kuryeBelge";
import CustomerMainPageScreen from "../screens/customerPages/customerMainScreen";
import KargoIlanYayinla from "../screens/customerPages/ilanOlustur";
import MusteriProfilAyarlari from "../screens/customerPages/customerProfile";
import CustomerCardDetails from "../screens/customerPages/customerCardDetails";
import MusteriGecmisKargolar from "../screens/customerPages/cargoHistory";
import FeedbackScreen from "../screens/customerPages/feedbackScreen";
import CourierMainPageScreen from "../screens/courierPages/courierMainPage";
import packageMoreDetails from "../components/courierMoreDetails";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Stack = createNativeStackNavigator();

const RouteManagement = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAULHOWF7klBKJBq_fGGXtCdEaNM-solmo",
    authDomain: "kargomyolda.firebaseapp.com",
    databaseURL:
      "https://kargomyolda-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kargomyolda",
    storageBucket: "kargomyolda.appspot.com",
    messagingSenderId: "76046646433",
    appId: "1:76046646433:web:73df110ef1e1f53ad944e0",
    measurementId: "G-DQV9MXGN9R",
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={UserLoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterMusteri}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterKurye"
            component={RegisterKurye}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginKurye"
            component={kuryeLoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BelgeYukle"
            component={KuryeBelgeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CustomerMain"
            component={CustomerMainPageScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="IlanVer"
            component={KargoIlanYayinla}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MusteriProfil"
            component={MusteriProfilAyarlari}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MusteriOdeme"
            component={CustomerCardDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MusteriKargo"
            component={MusteriGecmisKargolar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MusteriGeriBildirim"
            component={FeedbackScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="KuryeMain"
            component={CourierMainPageScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="PackageDetails"
            component={packageMoreDetails}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RouteManagement;
