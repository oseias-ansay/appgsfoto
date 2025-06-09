import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "@screens/Home";
import { Galeria } from "@screens/Galeria";
import { Casamento } from "@screens/Casamento";
import { Contato } from "@screens/Contato";
import { Debutante } from "@screens/Debutante"; // Certifique-se do nome e caminho corretos
import { RootStackParamList, ROUTES } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export function AppRoutes() {       
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.GALERIA} component={Galeria} />
      <Stack.Screen name={ROUTES.CONTATO} component={Contato} />
      <Stack.Screen name={ROUTES.CASAMENTO} component={Casamento} />
     <Stack.Screen name={ROUTES.DEBUTANTE} component={Debutante} />
    </Stack.Navigator>
  );
}