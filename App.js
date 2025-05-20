import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/components/SplashScreen";
import { Provider } from "react-redux";
import store from "./src/redux/store";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ header: () => null }}>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  )
};

export default App;