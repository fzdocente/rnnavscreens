// Librerías para el manejo de la navegación entre pantallas
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeTabs from './screens/HomeTabs';

const Stack = createNativeStackNavigator(); // Definir las rutas de cada componente

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeTabs'
      >
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ title:'Sistema Demo'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}







