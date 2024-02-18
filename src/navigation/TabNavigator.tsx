import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NewsPage } from "../screens/NewsPage"
import { Image, StyleSheet, View } from "react-native"
import Icon from "@ant-design/react-native/lib/icon"
import { Favorite } from "../screens/Favorite"
import { Message } from "../screens/Message"
import { CreateAnnouncement } from "../screens/CreateAnnouncement"
import { Request } from "../screens/Request"
import { useAppSelector } from "../hooks/store"

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
    const isVisibleTabBar = useAppSelector((state) => state.tabbar.isVisible)
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    ...styles.tabBar,
                    display: isVisibleTabBar ? "flex" : "none",
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
                            <Icon name="read" style={styles.tabIcon} size="lg" color={focused ? "#fff" : "rgba(248, 248, 248, 0.5)"} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={Favorite}
                options={{
                    tabBarItemStyle: {
                        height: 0,
                    },
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Icon name="heart" style={styles.tabIcon} size="lg" color={focused ? "#fff" : "rgba(248, 248, 248, 0.5)"} />
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
                            <Icon name="plus-circle" style={styles.tabIcon} size="lg" color={focused ? "#fff" : "rgba(248, 248, 248, 0.5)"} />
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
                              <Icon name="message" style={styles.tabIcon} size="lg" color={focused ? "#fff" : "rgba(248, 248, 248, 0.5)"} />
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
                          <Icon name="book" style={styles.tabIcon} size="lg" color={focused ? "#fff" : "rgba(248, 248, 248, 0.5)"} />
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
        height: 74,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: "#666",
        gap: 40,
    },
    tabIcon: {
        width: 35,
        height: 35,
    },
})
