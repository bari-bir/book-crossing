import { Header } from "../components/Header"
import "../assets/styles/pages/message.scss"
import ProfileImg from "../assets/images/userProfile1.png"
import { useEffect, useState } from "react"
import { NotificationApi, notificationInfo } from "../api/notificationApi"
import { Empty } from "antd"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

export const Message = () => {
    const { fetchData } = NotificationApi("bookcorssing/my/list")
    const [showMore, setShowMore] = useState<{ [key: string]: boolean }>({})
    const [dataList, setDataList] = useState<notificationInfo[]>([])

    useEffect(() => {
        fetchData({}).then((res) => {
            if (res.result_code === 0) {
                setDataList(res.data)
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const groupData = () => {
        const groupedData: { [key: string]: notificationInfo[] } = {}

        dataList.forEach((item) => {
            const notificationDate = dayjs(item.createtime)
            const currentDate = dayjs()

            let groupKey: string

            if (notificationDate.isSame(currentDate, "day")) {
                groupKey = "Today"
            } else if (notificationDate.isSame(currentDate.subtract(1, "day"), "day")) {
                groupKey = "One Day Ago"
            } else if (notificationDate.isSame(currentDate, "week")) {
                groupKey = "This Week"
            } else if (notificationDate.isSame(currentDate.subtract(1, "week"), "week")) {
                groupKey = "One Week Ago"
            } else if (notificationDate.isSame(currentDate, "month")) {
                groupKey = "This Month"
            } else if (notificationDate.isSame(currentDate.subtract(1, "month"), "month")) {
                groupKey = "One Month Ago"
            } else if (notificationDate.isSame(currentDate, "year")) {
                groupKey = "This Year"
            } else if (notificationDate.isSame(currentDate.subtract(1, "year"), "year")) {
                groupKey = "One Year Ago"
            } else {
                groupKey = "Earlier"
            }

            if (!groupedData[groupKey]) {
                groupedData[groupKey] = []
            }
            groupedData[groupKey].push(item)
        })

        return groupedData
    }

    return (
        <div className="message container">
            <Header title="Accept messages" />

            <div className="message-wrapper">
                {Object.keys(groupData()).length ? (
                    Object.keys(groupData()).map((messageTime, i) => (
                        <div key={i}>
                            <h3 className="message-time">{messageTime}</h3>
                            {groupData()[messageTime].map((message) => (
                                <div
                                    key={message.id}
                                    className="message-block"
                                    onClick={() => setShowMore((showMore) => ({ [message.id]: !showMore[message.id] }))}>
                                    <div className="info">
                                        <span className="expand-icon" />

                                        <div className="user-info">
                                            <img className="user-img" src={ProfileImg} alt="profile" />

                                            <div>
                                                <p className="user-name">{message.fromUser.fullName}</p>
                                                {showMore[message.id] && <p className="user-and">{message.fromUser.phone}</p>}
                                                <p
                                                    className="user-ans"
                                                    style={{ overflow: showMore[message.id] ? "auto" : "hidden", display: showMore[message.id] ? "block" : "-webkit-box" }}>
                                                    {message.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="time">{dayjs(message.createtime).fromNow()}</div>
                                </div>
                            ))}
                        </div>
                    ))
                ) : (
                    <Empty />
                )}
            </div>
        </div>
    )
}
