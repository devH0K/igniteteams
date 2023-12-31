import { ThemeProvider } from "styled-components/native";
import theme from '@theme/index'
import { Groups } from "@screens/Groups";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
//import { ActivityIndicator } from "react-native";
import { Loading } from "@components/Loading";
import { StatusBar } from "react-native";

import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";
export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Groups/> :  <Loading/> }
      {/* { fontsLoaded ? <Players/> :  <Loading/> } */}
    </ThemeProvider>
  );
}