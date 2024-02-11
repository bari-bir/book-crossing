import { MainNavigation } from "./src/navigation/MainNavigation"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { BookDetail } from "./src/screens/BookDetail"

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <>
            <Stack.Navigator initialRouteName={"Home"}>
                <Stack.Screen name={"BookDetail"} component={BookDetail} />
            </Stack.Navigator>
            <MainNavigation />
        </>
    )
}
