import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "../global.css";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'RethinkSans-Regular': require('../assets/fonts/RethinkSans-Regular.ttf'),
    'RethinkSans-Medium': require('../assets/fonts/RethinkSans-Medium.ttf'),
    'RethinkSans-SemiBold': require('../assets/fonts/RethinkSans-SemiBold.ttf'),
    'RethinkSans-Bold': require('../assets/fonts/RethinkSans-Bold.ttf'),
    'RethinkSans-ExtraBold': require('../assets/fonts/RethinkSans-ExtraBold.ttf'),
    'RethinkSans-Italic': require('../assets/fonts/RethinkSans-Italic.ttf'),
    'RethinkSans-MediumItalic': require('../assets/fonts/RethinkSans-MediumItalic.ttf'),
    'RethinkSans-SemiBoldItalic': require('../assets/fonts/RethinkSans-SemiBoldItalic.ttf'),
    'RethinkSans-BoldItalic': require('../assets/fonts/RethinkSans-BoldItalic.ttf'),
    'RethinkSans-ExtraBoldItalic': require('../assets/fonts/RethinkSans-ExtraBoldItalic.ttf'),
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      // Hide splash screen after assets are loaded
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: "fade", animationDuration: 1000, animationTypeForReplace: "pop" , title: "Home"}} />
    </Stack>
  );
}