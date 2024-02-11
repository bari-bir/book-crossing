import { View, Text, StyleSheet, Image } from "react-native"
import React, { useState } from "react"
import { Page } from "../layouts/page"
import { Header } from "../components/Header"
import BookImage from "../../assets/images/book-test.png"
import Tabs from "@ant-design/react-native/lib/tabs"
import Button from "@ant-design/react-native/lib/button"
import { TabData } from "@ant-design/react-native/es/tabs/PropsType"

export const Request = () => {
    const [tabInfo, setTabInfo] = useState<TabData>({ title: "Request" })
    const [tabs] = useState<{ title: string }[]>([{ title: "Request" }, { title: "Announcement" }])

    function onChangeTabs(tab: TabData) {
        setTabInfo(tab)
    }

    return (
        <Page>
            <Header title={String(tabInfo.title)} isBack={false} />
            <View style={{ flex: 1, height: "auto" }}>
                <Tabs tabs={tabs} tabBarUnderlineStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} onTabClick={(e) => onChangeTabs(e)}>
                    {/*Request*/}
                    <View>
                        <View style={styles.requestBlock}>
                            <Image style={styles.requestBookImg} source={BookImage} />

                            <View style={styles.requestInfo}>
                                <Text style={styles.requestInfoTitle}>Akbota Zhumakhanbet</Text>
                                <Text style={styles.requestInfoDescr}>The standard Lorem Ipsum passage, used since "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...</Text>

                                {/* ADD BUTTONS */}
                                <View style={styles.requestBtn}>
                                    <Button style={styles.btnWrapper}>
                                        <Text style={{ fontSize: 9, fontWeight: "700", color: "#222" }}>Review</Text>
                                    </Button>
                                    <Button type="primary" style={styles.btnWrapper}>
                                        <Text style={{ fontSize: 9, fontWeight: "700", color: "#fff" }}>Accept</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        <View style={styles.requestBlock}>
                            <Image style={styles.requestBookImg} source={BookImage} />

                            <View style={styles.requestInfo}>
                                <Text style={styles.requestInfoTitle}>Akbota Zhumakhanbet</Text>
                                <Text style={styles.requestInfoDescr}>The standard Lorem Ipsum passage, used since "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...</Text>

                                {/* ADD BUTTONS */}
                                <View style={styles.requestBtn}>
                                    <Button style={styles.btnWrapper}>
                                        <Text style={{ fontSize: 9, fontWeight: "700", color: "#222" }}>Review</Text>
                                    </Button>
                                    <Button type="primary" style={styles.btnWrapper}>
                                        <Text style={{ fontSize: 9, fontWeight: "700", color: "#fff" }}>Accept</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        <View style={styles.requestBlock}>
                            <Image style={styles.requestBookImg} source={BookImage} />

                            <View style={styles.requestInfo}>
                                <Text style={styles.requestInfoTitle}>Akbota Zhumakhanbet</Text>
                                <Text style={styles.requestInfoDescr}>The standard Lorem Ipsum passage, used since "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...</Text>

                                {/* ADD BUTTONS */}
                                <View style={styles.requestBtn}>
                                    <Button style={styles.btnWrapper}>
                                        <Text style={{ fontSize: 9, fontWeight: "700", color: "#222" }}>Review</Text>
                                    </Button>
                                    <Button type="primary" style={styles.btnWrapper}>
                                        <Text style={{ fontSize: 9, fontWeight: "700", color: "#fff" }}>Accept</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/*Announcement*/}
                    <View>
                        <View style={styles.requestBlock}>
                            <Image style={styles.requestBookImg} source={BookImage} />

                            <View style={styles.requestInfo}>
                                <Text>Akbota Zhumakhanbet</Text>
                                <Text>The standard Lorem Ipsum passage, used since "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...</Text>

                                {/* ADD BUTTONS */}
                            </View>
                        </View>
                    </View>
                </Tabs>
            </View>
        </Page>
    )
}

const styles = StyleSheet.create({
    requestBlock: {
        marginTop: 13,
        paddingVertical: 8,
        paddingHorizontal: 6,
        borderRadius: 5,
        height: 100,
        backgroundColor: "#F6F5F5",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        gap: 10,
    },
    requestBookImg: {
        height: 85,
        width: 85,
        borderRadius: 10,
    },
    requestInfo: {
        flex: 1,
    },
    requestInfoTitle: {
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 7,
    },
    requestInfoDescr: {
        fontSize: 8,
        fontWeight: "300",
        marginBottom: 8,
    },
    requestBtn: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 6,
        justifyContent: "flex-end",
    },
    btnWrapper: {
        fontSize: 9,
        fontWeight: "700",
        height: 25,
        paddingVertical: 6,
        paddingHorizontal: 0,
    },
})
