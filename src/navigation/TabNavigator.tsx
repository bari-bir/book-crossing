import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NewsPage } from "../screens/NewsPage"
import { Image, StyleSheet, View } from "react-native"
import NewsIconActive from "../../assets/images/tabbar-icons/newsIcon-active.png"
import NewsIconDisactive from "../../assets/images/tabbar-icons/newsIcon-disactive.png"
import FavoriteIconActive from "../../assets/images/tabbar-icons/favoriteIcon-active.png"
import FavoriteIconDisactive from "../../assets/images/tabbar-icons/favoriteIcon-disactive.png"
import CreateIconDisactive from "../../assets/images/tabbar-icons/createIcon-disactive.png"
import CreateIconActive from "../../assets/images/tabbar-icons/createIcon-active.png"
import MessageIconAcitve from "../../assets/images/tabbar-icons/message-active.png"
import MessageIconDisacitve from "../../assets/images/tabbar-icons/message-disactive.png"
import RequestIconAction from "../../assets/images/tabbar-icons/requestIcon-active.png"
import RequestIconDisaction from "../../assets/images/tabbar-icons/requestIcon-disactive.png"
import { Favorite } from "../screens/Favorite"
import { Message } from "../screens/Message"
import { CreateAnnouncement } from "../screens/CreateAnnouncement"
import { Request } from "../screens/Request"

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    ...styles.tabBar,
                    display: "flex",
                },
                tabBarHideOnKeyboard: true,
            }}>
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
                name="Message"
                component={Message}
                options={{
                    tabBarItemStyle: {
                        height: 0,
                    },
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={focused ? MessageIconAcitve : MessageIconDisacitve} resizeMode="contain" style={styles.tabIcon} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Request"
                component={Request}
                options={{
                    tabBarItemStyle: {
                        height: 0,
                    },
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={focused ? RequestIconAction : RequestIconDisaction} resizeMode="contain" style={styles.tabIcon} />
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
