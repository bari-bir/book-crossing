import { View, Text, StyleSheet, Image } from "react-native"
import React, { useState } from "react"
import { Page } from "../layouts/page"
import { Header } from "../components/Header"
import Tabs from "@ant-design/react-native/lib/tabs"
import Modal from "@ant-design/react-native/lib/modal"
import Provider from "@ant-design/react-native/lib/provider"
import { TabData } from "@ant-design/react-native/es/tabs/PropsType"
import Button from "@ant-design/react-native/lib/button"
import { RequestBlock } from "../components/RequestBlock"
import { useAppDispatch } from "../hooks/store"
import { hideTabbar, showTabbar } from "../redux/features/tabbarSlice"
import UserProfileImage from "../../assets/images/user_profile.png"
import BookImage from "../../assets/images/book-test.png"

export const Request = () => {
    const dispatch = useAppDispatch()
    const [tabInfo, setTabInfo] = useState<TabData>({ title: "Request" })
    const [tabs] = useState<{ title: string }[]>([{ title: "Request" }, { title: "Announcement" }])
    const [visibleModal, setVisibleModal] = useState<boolean>(false)

    function onChangeTabs(tab: TabData) {
        setTabInfo(tab)
    }

    function onClickReview(value: boolean) {
        dispatch(hideTabbar())
        setVisibleModal(value)
    }

    function onHideModal() {
        dispatch(showTabbar())
        setVisibleModal(false)
    }

    return (
        <Provider>
            <Page>
                <Header title={String(tabInfo.title)} isBack={false} />
                <View style={{ flex: 1, height: "auto" }}>
                    <Tabs tabs={tabs} tabBarUnderlineStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} onTabClick={(e) => onChangeTabs(e)} onChange={(e) => onChangeTabs(e)}>
                        {/*Request*/}
                        <View>
                            <View style={{ marginTop: 13 }}>
                                <RequestBlock onClickReview={onClickReview} isRequest />
                                <RequestBlock onClickReview={onClickReview} isRequest />
                                <RequestBlock onClickReview={onClickReview} isRequest />
                            </View>
                        </View>
                        {/*Announcement*/}
                        <View>
                            <View style={{ marginTop: 13 }}>
                                <RequestBlock onClickReview={onClickReview} isRequest={false} />
                            </View>
                        </View>
                    </Tabs>
                </View>
                <Modal popup maskClosable visible={visibleModal} animationType={"slide-up"} onClose={() => onHideModal()}>
                    <View style={styles.modalWindowBlock}>
                        <View style={styles.modalHeadUserImagePos}>
                            <Image source={UserProfileImage} style={styles.modalUserImage} />
                        </View>
                        {/* TODO add close icon
                         <View>
                            <Icon name="close" size={12} color="#000" />
                        </View> */}
                        <View style={styles.userInfoBlock}>
                            <Text style={styles.userNameText}>Akbota Zhumakhanbet</Text>

                            <View style={styles.requestBtn}>
                                <Button style={styles.btnWrapper} onPress={() => onClickReview(true)}>
                                    <Text style={{ fontSize: 9, fontWeight: "700", color: "#222" }}>Review</Text>
                                </Button>
                                <Button type="primary" style={{ ...styles.btnWrapper, backgroundColor: "#525DDD" }}>
                                    <Text style={{ fontSize: 9, fontWeight: "700", color: "#fff" }}>Accept</Text>
                                </Button>
                            </View>
                        </View>

                        <View style={styles.modalContent}>
                            <View style={styles.modalContentImg}>
                                <Image source={BookImage} style={{ height: 88, width: 88, borderRadius: 5 }} />
                                <Image source={BookImage} style={{ height: 88, width: 88, borderRadius: 5 }} />
                                <Image source={BookImage} style={{ height: 88, width: 88, borderRadius: 5 }} />
                            </View>
                            <Text style={styles.modalContentDescr}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam accusantium quibusdam deleniti earum ipsa minus numquam id tempore quam dolorem. Modi totam provident quod dolorem placeat nobis suscipit dignissimos odit.</Text>
                        </View>
                    </View>
                </Modal>
            </Page>
        </Provider>
    )
}

const styles = StyleSheet.create({
    modalWindowBlock: {
        minHeight: 357,
        position: "relative",
    },
    modalHeadUserImagePos: {
        position: "absolute",
        top: -50,
        left: "50%",
        transform: [{ translateX: -50 }],
    },
    modalUserImage: {
        height: 96,
        width: 96,
        borderWidth: 8,
        borderColor: "#EBEAEA",
        borderRadius: 50,
    },
    userNameText: {
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
    },
    requestBtn: {
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 6,
        justifyContent: "center",
    },
    btnWrapper: {
        fontSize: 9,
        fontWeight: "700",
        height: 25,
        paddingVertical: 6,
        paddingHorizontal: 0,
    },
    userInfoBlock: {
        marginTop: 53,
    },
    modalContent: {
        marginTop: 31,
        marginHorizontal: 16,
        display: "flex",
        flexDirection: "column",
        gap: 20,
    },
    modalContentImg: {
        display: "flex",
        gap: 21,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    modalContentDescr: {
        fontSize: 10,
        fontWeight: "300",
    },
})
