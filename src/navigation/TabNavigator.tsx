import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NewsPage } from "../screens/NewsPage"
import { Image, StyleSheet, View } from "react-native"
import NewsIconActive from "../../assets/svg/newsIcon-active.png"
import NewsIconDisactive from "../../assets/svg/newsIcon-disactive.png"
import FavoriteIconActive from "../../assets/svg/favoriteIcon-active.png"
import FavoriteIconDisactive from "../../assets/svg/favoriteIcon-disactive.png"
import { Favorite } from "../screens/Favorite"

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBar }}>
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
        position: "absolute",
        bottom: 20,
        paddingVertical: 10,
        height: 53,
        borderRadius: 50,
        backgroundColor: "#666",
        gap: 40,
    },
    tabIcon: {
        width: 33,
        height: 33,
    },
})
