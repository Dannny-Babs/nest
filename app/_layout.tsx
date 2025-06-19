import '../global.css';

import { DarkTheme, DefaultTheme, Theme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { Stack } from 'expo-router';
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useEffect } from "react";
import { Platform } from 'react-native';
import { NAV_THEME } from '../lib/constants';
import { useColorScheme } from '../lib/useColorScheme';

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary
} from 'expo-router';

export default function RootLayout() {
  const hasMounted = React.useRef(false);
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

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

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return;
    }

    if (Platform.OS === 'web') {
      // Adds the background color to the html element to prevent white background on overscroll.
      document.documentElement.classList.add('bg-background');
    }
    setIsColorSchemeLoaded(true);
    hasMounted.current = true;
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      // Hide splash screen after assets are loaded
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || !isColorSchemeLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: "fade", animationDuration: 1000, animationTypeForReplace: "pop" , title: "Home"}} />
      </Stack>
    </ThemeProvider>
  );
}

const useIsomorphicLayoutEffect =
  Platform.OS === 'web' && typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;