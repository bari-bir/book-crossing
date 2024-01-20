import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { BookList } from "../screens/BookList"
import { StyleSheet } from "react-native"

const Stack = createNativeStackNavigator()

export const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    contentStyle: styles.mavigator,
                }}>
                <Stack.Screen name="BookList" component={BookList} options={{ title: "Book list" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    mavigator: {
        paddingHorizontal: 32,
        backgroundColor: "#fff",
        marginTop: 9,
    },
})
