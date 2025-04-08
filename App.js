import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/components/SplashScreen";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ header: () => null }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;