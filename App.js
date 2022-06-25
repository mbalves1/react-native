import { StatusBar, SafeAreaView, View } from 'react-native';
import Index from './src/telas/Cestas/components/index';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import mock from './src/mocks/cetast'

export default function App() {
  let [fonteCarregada] = useFonts({
    "MonteserratRegular": Montserrat_400Regular,
    "MonteserratBold": Montserrat_700Bold
  })

  if (!fonteCarregada) {
    return <AppLoading/>
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Index {...mock}/>
    </SafeAreaView>
  );
}
