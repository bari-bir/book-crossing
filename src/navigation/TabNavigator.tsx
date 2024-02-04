import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NewsPage } from "../screens/NewsPage"
import { Image, StyleSheet, View } from "react-native"
import NewsIconActive from "../../assets/images/tabbar-icons/newsIcon-active.png"
import NewsIconDisactive from "../../assets/images/tabbar-icons/newsIcon-disactive.png"
import FavoriteIconActive from "../../assets/images/tabbar-icons/favoriteIcon-active.png"
import FavoriteIconDisactive from "../../assets/images/tabbar-icons/favoriteIcon-disactive.png"
import CreateIconDisactive from "../../assets/images/tabbar-icons/createIcon-disactive.png"
import CreateIconActive from "../../assets/images/tabbar-icons/createIcon-active.png"
import { Favorite } from "../screens/Favorite"
import { CreateAnnouncement } from "../screens/CreateAnnouncement"

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBar, tabBarHideOnKeyboard: true }}>
            <Tab.Screen
                name="News"
                component={NewsPage}
                options={{
                    tabBarItemStyle: {
                        height: 0,
                    },
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={focused ? NewsIconActive : NewsIconDisactive} resizeMode="contain" style={styles.tabIcon} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="CreateAnnouncement"
                component={CreateAnnouncement}
                options={{
                    tabBarItemStyle: {
                        height: 0,
                    },
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={focused ? CreateIconActive : CreateIconDisactive} resizeMode="contain" style={styles.tabIcon} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="BookDetail"
                component={Favorite}
                options={{
                    tabBarItemStyle: {
                        height: 0,
                    },
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={focused ? FavoriteIconActive : FavoriteIconDisactive} resizeMode="contain" style={styles.tabIcon} />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        paddingVertical: 20,
        height: 73,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: "#666",
        gap: 40,
    },
    tabIcon: {
        width: 33,
        height: 33,
    },
})
