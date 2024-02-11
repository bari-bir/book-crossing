import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { StyleSheet } from "react-native"
import { TabNavigator } from "./TabNavigator"
import { BookDetail } from "../screens/BookDetail"

const Stack = createNativeStackNavigator()

export const MainNavigation = () => {
    return (
        <NavigationContainer theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, background: "#fff" } }}>
            <Stack.Navigator
                initialRouteName="Root"
                screenOptions={{
                    headerShown: false,
                    contentStyle: styles.navigator,
                }}>
                <Stack.Screen name="Root" component={TabNavigator} />
                <Stack.Screen name={"BookDetail"} component={BookDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    navigator: {
        backgroundColor: "#fff",
    },
})
