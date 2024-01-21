import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { StyleSheet } from "react-native"
import { TabNavigator } from "./TabNavigator"

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    navigator: {
        backgroundColor: "#fff",
        marginTop: 9,
    },
})
