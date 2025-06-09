import { Casamento } from '@screens/Casamento';
import { Home } from '@screens/Home';
import {useFonts,Roboto_400Regular,Roboto_700Bold} from "@expo-google-fonts/roboto"
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { LoadIndicator } from './src/components/Loading/styles';

export default function App() {
  const [FontsLoaded] = useFonts ({Roboto_400Regular,Roboto_700Bold})


  return (
  <ThemeProvider theme={theme}> 
  {FontsLoaded ? <Routes/> : <LoadIndicator/>}    
  </ThemeProvider>
  );
}


