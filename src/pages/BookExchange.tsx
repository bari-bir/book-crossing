import { ArrowLeftOutlined, CloseOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons"
import { App, Button, Carousel } from "antd"
import { CarouselRef } from "antd/es/carousel"
import { useEffect, useState } from "react"
import { AnnouncementAPI, announcementInfo } from "../api/announcementApi"
import { LikeAndDislike } from "../components/LikeAndDislike"
import { useNavigate, useParams } from "react-router-dom"
import TextArea from "antd/es/input/TextArea"
import "../assets/styles/pages/bookExchange.scss"
import { RequestAPI } from "../api/requestApi"
import { UserApi } from "../api/userApi"
import { CloudImage } from "../components/CloudImage"

export const BookExchange = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { fetchData: fetchUserInfo } = UserApi("info")
    const { fetchData: fetchGetAnnoucementData } = AnnouncementAPI(`get?id=${id}`, "GET")
    const { fetchData: fetchCreateRequestData } = RequestAPI("create")
    let carouselRef: CarouselRef | null = null
    const [info, setInfo] = useState<announcementInfo>({
        title: "",
        description: "",
        category: "",
        favorite: false,
        images: [],
        year: 0,
        location: "",
    })
    const [userAvatar, setUserAvatar] = useState<string>("")
    const { message: messageToast } = App.useApp()
    const [message, setMessage] = useState<string>("")

    useEffect(() => {
        loadData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadData = async () => {
        await fetchGetAnnoucementData(null).then((res) => {
            if (res.result_code === 0) {
                setInfo(JSON.parse(JSON.stringify(res.data)))
            }
        })

        fetchUserInfo({}).then((res) => {
            if (res.result_code === 0) {
                setUserAvatar(res.data.avatar)
            }
        })
    }

    const onClickFavorite = (isFavoriteValue: boolean) => {
        setInfo({ ...info, favorite: isFavoriteValue })
    }

    const onSend = () => {
        fetchCreateRequestData({
            announcement: info.id,
            message,
        }).then((res) => {
            if (res.result_code === 0) {
                messageToast.success("Successfully passed request")
                navigate("/request-annoucement")
            }
        })
    }

    return (
        <div className="book-exchange">
            <ArrowLeftOutlined className="icon-bg  back" onClick={() => navigate(-1)} />
            <CloseOutlined className="icon-bg  close" onClick={() => navigate(-2)} />

            <div className="book-carousel">
                {info.images.length !== 1 && (
                    <>
                        <RightOutlined className="carousel-arrow right icon-bg" onClick={() => carouselRef?.next()} />
                        <LeftOutlined className="carousel-arrow left icon-bg" onClick={() => carouselRef?.prev()} />
                    </>
                )}

                <Carousel ref={(ref) => (carouselRef = ref)}>
                    {info.images.map((image, i) => (
                        <img key={i} src={image} className="img" alt="img" />
                    ))}
                </Carousel>
            </div>

            <div className="book-info container">
                <h1 className="book-title">{info.title}</h1>
                <p className="book-category">{info.category}</p>

                <div className="book-subInfo">
                    <p className="book-descr">{info.description}</p>

                    <LikeAndDislike
                        isFavorite={info.favorite}
                        onClickFavorite={onClickFavorite}
                        announcementId={info.id}
                        favoriteId={info.favoriteId}
                    />
                </div>

                <div className="book-request">
                    <CloudImage src={userAvatar} className="user-img" isPreview={false} width={50} height={50} />

                    <div className="book-textArea">
                        <TextArea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type  a  message here ..."
                            className="input-textArea"></TextArea>
                        <div className="book-btns">
                            {/* <p onClick={() => setMessage("")} className="delete-text">
                                Delete draft
                            </p> */}

                            <div className="send-block">
                                {/* <p className="time-text">Draft saves at 7:00 PM</p> */}
                                <Button className="btn-send" type="primary" onClick={onSend}>
                                    Send
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
