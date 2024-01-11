import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { BookList } from "./BookList";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BookList"
          component={BookList}
          options={{ title: "Book list" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
