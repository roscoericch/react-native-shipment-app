import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { AppProvider } from '@/context/AppContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from '@/components/ThemedText';
import CustomSplashScreen from "@/components/SplashScreen";
import { Platform, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SfPro: require('../assets/fonts/SFPro-Regular.ttf')
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  if (isLoading) {
    return <CustomSplashScreen onFinish={() => setIsLoading(false)} />;
  }

  return (
    <AppProvider>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{headerShown:false}} />
        <Stack.Screen name="login" options={{presentation:"modal", headerStyle:{backgroundColor:"#FFFF"}, headerTitle:"", headerLeft:()=>(
          <Pressable style={{display:"flex", flexDirection:"row", alignItems:"center"}} onPress={()=>router.back()}>
            {Platform.OS === "ios" && (
              <Ionicons sixe={40} color={"#2F50C1"} name='chevron-back' />
            )}
            <ThemedText type='link'>Cancel</ThemedText>
          </Pressable>
          ), headerBackVisible:true, headerTintColor:"#2F50C1"}} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
    </AppProvider>
  );
}
