import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Request } from "./Request"
import { Anouncement } from "./Anouncement"
const Tab = createBottomTabNavigator()

export const RequestTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Request"} component={Request}></Tab.Screen>
            <Tab.Screen name={"Annoucement"} component={Anouncement}></Tab.Screen>
        </Tab.Navigator>
    )
}
