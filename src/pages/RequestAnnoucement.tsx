import { App, Button, Carousel, Drawer, Empty, Modal, Space, Tabs, TabsProps, Input } from "antd"
import { Header } from "../components/Header"
import { useEffect, useState } from "react"
import UserProfile from "../assets/images/userProfile.png"
import "../assets/styles/pages/requestAnnoucement.scss"
import { AnnouncementAPI, announcementInfo } from "../api/announcementApi"
import { CloudImage } from "../components/CloudImage"
import { RequestAPI, requestInfo } from "../api/requestApi"
import http from "../utils/axios"
import { useLocation, useNavigate } from "react-router-dom"
import { NotificationApi } from "../api/notificationApi"

interface IRequestData extends requestInfo {
    announcement: announcementInfo
    userInfo: {
        fullName: string
    }
}

const { TextArea } = Input

export const RequestAnnouncement = () => {
    const { fetchData: fetchCreateNotificationData } = NotificationApi("bookcorssing/create")
    const [headerTitle, setHeaderTitle] = useState<string>("Request")
    const [startX, setStartX] = useState<number>(0)
    const [activeKeyTab, setActiveTab] = useState<string>("1")
    const location = useLocation()
    const navigate = useNavigate()
    const [showDrawer, setShowDrawer] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [requestInfo, setRequestInfo] = useState<IRequestData>()
    const [messageNotification, setMessageNotification] = useState<string>("")

    useEffect(() => {
        const isAnnoucementUpdated = new URLSearchParams(location.search).get("isAnnoucement")

        if (isAnnoucementUpdated) {
            setActiveTab("2")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onAction = (requestInfo: IRequestData, isModal: boolean) => {
        setRequestInfo(requestInfo)

        if (isModal) {
            setShowModal(true)
        } else {
            setShowDrawer(true)
        }
    }

    const onSendNotification = () => {
        fetchCreateNotificationData({
            content: messageNotification,
            toUserId: requestInfo?.creator,
        }).then((res) => {
            if (res.result_code === 0) {
                setShowModal(false)
                setMessageNotification("")
                navigate("/message")
            }
        })
    }

    const onChagneTabs = (e: string) => {
        if (e === "1") {
            setHeaderTitle("Request")
        } else {
            setHeaderTitle("My announcement")
        }

        setActiveTab(e)
    }

    const onTouchMove = (e: React.TouchEvent) => {
        if (startX === 0) return
        const currentX = e.touches[0].clientX
        const diffX = currentX - startX
        const sensitivity = 50
        if (diffX > sensitivity) {
            switchTab("prev")
            setStartX(0)
        } else if (diffX < -sensitivity) {
            switchTab("next")
            setStartX(0)
        }
    }

    const switchTab = (direction: string) => {
        const currentTabIndex = parseInt(activeKeyTab) - 1
        let newTabIndex = 0
        if (direction === "prev") {
            newTabIndex = currentTabIndex === 0 ? 1 : currentTabIndex - 1
        } else if (direction === "next") {
            newTabIndex = currentTabIndex === 1 ? 0 : currentTabIndex + 1
        }

        onChagneTabs((newTabIndex + 1).toString())
    }

    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Request",
            children: <TabChild isRequest onAction={onAction} />,
        },
        {
            key: "2",
            label: "My announcement",
            children: <TabChild onAction={onAction} />,
        },
    ]

    return (
        <div className="request container">
            <Header title={headerTitle} />

            <Tabs
                className="tabs"
                centered
                defaultActiveKey="1"
                activeKey={activeKeyTab}
                items={items}
                onTouchStart={(e) => setStartX(e.touches[0].clientX)}
                onTouchMove={onTouchMove}
                onChange={onChagneTabs}
            />

            <Drawer
                className="drawer-wrapper"
                open={showDrawer}
                onClose={() => setShowDrawer(false)}
                placement="bottom"
                extra={
                    <Space>
                        <div className="header-user">
                            <img src={UserProfile} alt={"userProfile"} className="user-img" />
                        </div>
                    </Space>
                }>
                <div className="drawer-wrapper">
                    <h1 className="user-name">{requestInfo?.userInfo.fullName}</h1>

                    <div className="drawer-content">
                        <div className="imgs">
                            <Carousel style={{ width: "100%" }}>
                                {requestInfo?.announcement.images.length ? (
                                    requestInfo?.announcement.images.map((image, i) => <CloudImage key={i} src={image} width="100%" height={150} />)
                                ) : (
                                    <Empty />
                                )}
                            </Carousel>
                        </div>

                        <p className="descr">{requestInfo?.message}</p>
                    </div>
                </div>
            </Drawer>
            <Modal className="modal" open={showModal} footer={null} onCancel={() => setShowModal(false)}>
                <TextArea
                    className="text-area"
                    placeholder="Type  a  message here ..."
                    value={messageNotification}
                    onChange={(e) => setMessageNotification(e.target.value)}></TextArea>

                <Button type="primary" className="btn-send" onClick={onSendNotification}>
                    Send
                </Button>
            </Modal>
        </div>
    )
}

const TabChild = ({ isRequest = false, onAction }: { isRequest?: boolean; onAction: (requestInfo: IRequestData, isModal: boolean) => void }) => {
    const navigate = useNavigate()
    const { message } = App.useApp()
    const [myAnnoucementList, setMyAnnoucementList] = useState<announcementInfo[]>([])
    const [requestList, setRequestList] = useState<IRequestData[]>([])
    const { fetchData: fetchMyAnnoucementData } = AnnouncementAPI("my/list")
    const { fetchData: fetchRequestData } = RequestAPI("me/list")

    useEffect(() => {
        loadData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadData = async () => {
        if (!isRequest) {
            fetchMyAnnoucementData({}).then((res) => {
                if (res.result_code === 0) {
                    setMyAnnoucementList(res.data)
                }
            })
        } else {
            fetchRequestData({}).then((res) => {
                if (res.result_code === 0) {
                    setRequestList(JSON.parse(JSON.stringify(res.data)))
                }
            })
        }
    }

    const onLink = (announcementIndex: number) => {
        if (!isRequest) {
            navigate(`/create-announcement/${myAnnoucementList[announcementIndex].id}`)
        }
    }

    const removeAnnouncement = (e: number) => {
        const annoucementId = myAnnoucementList[e].id
        http({
            url: `/bookcrossing/announcement/delete?id=${annoucementId}`,
            method: "DELETE",
        })
            .then(() => {
                setMyAnnoucementList(myAnnoucementList.filter((item) => item.id !== annoucementId))
                message.success("Succesfully deleted announcement")
            })
            .catch((err) => {
                message.error(err.message.slice(0, 20))
            })
    }

    return (
        <div className="book-wrapper">
            {myAnnoucementList.length || requestList.length ? (
                !isRequest ? (
                    myAnnoucementList.map(({ id, images, title, description }, index) => (
                        <div key={id} className="book">
                            <CloudImage src={images[0]} width={85} height={85} />
                            <div className="book-info">
                                <h3 className="title">{title}</h3>
                                <p className="desc">{description}</p>

                                <div className="book-btn">
                                    <Button onClick={() => removeAnnouncement(index)}>Remove</Button>
                                    <Button type="primary" onClick={() => onLink(index)}>
                                        Edit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    requestList.map((request) => (
                        <div key={request.id} className="book">
                            <CloudImage src={request.announcement.images[0]} width={85} height={85} />
                            <div className="book-info">
                                <h3 className="title">{request.userInfo.fullName}</h3>
                                <p className="desc">{request.message}</p>

                                <div className="book-btn">
                                    <Button onClick={() => onAction(request, false)}>Review</Button>
                                    <Button type="primary" onClick={() => onAction(request, true)}>
                                        Accept
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))
                )
            ) : (
                <Empty />
            )}
        </div>
    )
}
