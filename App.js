import { StatusBar } from 'expo-status-bar';

//Fonts
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import {
  Rajdhani_400Regular,
  Rajdhani_500Medium,
  Rajdhani_600SemiBold,
  Rajdhani_700Bold,
  useFonts,
} from '@expo-google-fonts/rajdhani';

//Impports Gerais
import { StyleSheet, Text, View } from 'react-native';

//Componentes
import LoginScreen from './app/screens/Login/loginScreen';
import Home from './app/screens/Home/Home';
import ServerDetails from './app/screens/ServerDetails/ServerDetails';
import ScheduleMatch from './app/screens/ScheduleMatch/ScheduleMatch';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Rajdhani_400Regular,
    Rajdhani_500Medium,
    Rajdhani_600SemiBold,
    Rajdhani_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <LoginScreen></LoginScreen> */}
      {/* <Home></Home> */}
      {/* <ServerDetails></ServerDetails> */}
      <ScheduleMatch></ScheduleMatch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Rajdhani_700Bold',
    fontSize: 28,
  },
  body: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },
});
