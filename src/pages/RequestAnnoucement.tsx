import { App, Button, Carousel, Drawer, Empty, Space, Tabs, TabsProps } from "antd"
import { Header } from "../components/Header"
import { useEffect, useState } from "react"
import UserProfile from "../assets/images/userProfile.png"
import "../assets/styles/pages/requestAnnoucement.scss"
import { AnnouncementAPI, announcementInfo } from "../api/announcementApi"
import { CloudImage } from "../components/CloudImage"
import { RequestAPI } from "../api/requestApi"
import http from "../utils/axios"
import { useNavigate } from "react-router-dom"

export const RequestAnnoucement = () => {
    const [headerTitle, setHeaderTitle] = useState<string>("Request")
    const [showDrawer, setShowDrawer] = useState<boolean>(false)
    const [requestInfo, setRequestInfo] = useState<announcementInfo>()
    const [isAnnouncementDelete, setIsAnnouncementDelete] = useState<boolean>(false)
    const [startX, setStartX] = useState<number>(0)
    const [activeKeyTab, setActiveTab] = useState<string>("1")
    const { message } = App.useApp()

    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Request",
            children: <TabChild isRequest openDrawerOrRemoveAnnoucement={openDrawerOrRemoveAnnoucement} />,
        },
        {
            key: "2",
            label: "My annoucement",
            children: <TabChild openDrawerOrRemoveAnnoucement={openDrawerOrRemoveAnnoucement} isAnnoucementDelete={isAnnouncementDelete} />,
        },
    ]

    async function openDrawerOrRemoveAnnoucement(announcementInfo: announcementInfo, isRequest: boolean) {
        if (isRequest) {
            setRequestInfo(announcementInfo)
            setShowDrawer(true)
        } else {
            http({
                url: `/bookcrossing/announcement/delete?id=${announcementInfo.id}`,
                method: "DELETE",
            })
                .then(() => {
                    setIsAnnouncementDelete((isAnnouncementDelete) => (isAnnouncementDelete = !isAnnouncementDelete))
                    message.success("Succesfully deleted announcement")
                })
                .catch((err) => {
                    message.error(err.message.slice(0, 20))
                })
        }
    }

    const onChagneTabs = (e: string) => {
        if (e === "1") {
            setHeaderTitle("Request")
        } else {
            setHeaderTitle("My annoucement")
        }

        setActiveTab(e)
    }

    const onTouchMove = (e: React.TouchEvent) => {
        console.log(startX);
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
            newTabIndex = currentTabIndex === 0 ? 2 : currentTabIndex - 1
        } else if (direction === "next") {
            newTabIndex = currentTabIndex === 2 ? 0 : currentTabIndex + 1
        }
        console.log(newTabIndex)
        setActiveTab((newTabIndex + 1).toString())
    }

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
                    <h1 className="user-name">{requestInfo?.title}</h1>
                    <div className="btns">
                        <Button>Share</Button>
                        <Button type="primary">Accept</Button>
                    </div>

                    <div className="drawer-content">
                        <div className="imgs">
                            <Carousel style={{ width: "100%" }}>
                                {requestInfo?.images.length ? (
                                    requestInfo.images.map((image, i) => <CloudImage key={i} src={image} width="100%" height={88} />)
                                ) : (
                                    <Empty />
                                )}
                            </Carousel>
                        </div>

                        <p className="descr">{requestInfo?.description}</p>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

interface IAnnouncementRequestFilter extends announcementInfo {
    requestId?: string
}

const TabChild = ({
    isRequest = false,
    openDrawerOrRemoveAnnoucement,
    isAnnoucementDelete = false,
}: {
    isRequest?: boolean
    isAnnoucementDelete?: boolean
    openDrawerOrRemoveAnnoucement: (annoucementInfo: announcementInfo, isRequest: boolean) => void
}) => {
    const navigate = useNavigate()
    const [myAnnoucementList, setMyAnnoucementList] = useState<announcementInfo[]>([])
    const [announcementFilterRequestList, setAnnouncementFilterRequestList] = useState<IAnnouncementRequestFilter[]>([])
    const { fetchData: fetchMyAnnoucementData } = AnnouncementAPI("my/list")
    const { fetchData: fetchAnnoucementData } = AnnouncementAPI("list")
    const { fetchData: fetchRequestData } = RequestAPI("me/list")
    const dataList = [isRequest ? announcementFilterRequestList : myAnnoucementList][0]

    const loadData = async () => {
        if (!isRequest) {
            fetchMyAnnoucementData({}).then((res) => {
                if (res.result_code === 0) {
                    setMyAnnoucementList(res.data)
                }
            })
        } else {
            let annoucementList: announcementInfo[] = []
            await fetchAnnoucementData({}).then((res) => {
                if (res.result_code === 0) {
                    annoucementList = res.data
                }
            })
            fetchRequestData({}).then((res) => {
                if (res.result_code === 0) {
                    const requestList: announcementInfo[] = []
                    annoucementList.forEach((item) => {
                        const request = res.data.find((request) => request.announcement === item.id)
                        if (request && request.id) {
                            requestList.push(item)
                        }
                    })
                    setAnnouncementFilterRequestList(requestList)
                }
            })
        }
    }

    const onLink = (announcementIndex: number) => {
        if (!isRequest) {
            navigate(`/create-announcement/${dataList[announcementIndex].id}`)
        }
    }

    useEffect(() => {
        loadData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAnnoucementDelete])

    return (
        <div className="book-wrapper">
            {myAnnoucementList.length || announcementFilterRequestList.length ? (
                dataList.map(({ id, images, title, description }, index) => (
                    <div key={id} className="book">
                        <CloudImage src={images[0]} width={85} height={85} />
                        <div className="book-info">
                            <h3 className="title">{title}</h3>
                            <p className="desc">{description}</p>

                            <div className="book-btn">
                                <Button onClick={() => openDrawerOrRemoveAnnoucement(dataList[index], isRequest)}>
                                    {isRequest ? "Review" : "Remove"}
                                </Button>
                                <Button type="primary" onClick={() => onLink(index)}>
                                    {isRequest ? "Accept" : "Edit"}
                                </Button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <Empty />
            )}
        </div>
    )
}
