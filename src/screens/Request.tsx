import { View, Text, StyleSheet, Image } from "react-native"
import React, { useState } from "react"
import { Page } from "../layouts/page"
import { Header } from "../components/Header"
import Tabs from "@ant-design/react-native/lib/tabs"
import Modal from "@ant-design/react-native/lib/modal"
import Provider from "@ant-design/react-native/lib/provider"
import { TabData } from "@ant-design/react-native/es/tabs/PropsType"
import { RequestBlock } from "../components/RequestBlock"
import { useSelector } from "react-redux"

export const Request = () => {
    const store = useSelector((state) => state.tabbar.isVisible)

    const [tabInfo, setTabInfo] = useState<TabData>({ title: "Request" })
    const [tabs] = useState<{ title: string }[]>([{ title: "Request" }, { title: "Announcement" }])
    const [visibleModal, setVisibleModal] = useState<boolean>(false)

    function onChangeTabs(tab: TabData) {
        setTabInfo(tab)
    }

    function onClickReview(value: boolean) {
        setVisibleModal(value)
    }

    return (
        <Provider>
            <Page>
                <Header title={String(tabInfo.title)} isBack={false} />
                <View style={{ flex: 1, height: "auto" }}>
                    <Tabs tabs={tabs} tabBarUnderlineStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} onTabClick={(e) => onChangeTabs(e)}>
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
                <Modal popup maskClosable visible={visibleModal} animationType={"slide-up"} onClose={() => setVisibleModal(false)}>
                    <Text>Hello first modal</Text>
                </Modal>
            </Page>
        </Provider>
    )
}

const styles = StyleSheet.create({})
