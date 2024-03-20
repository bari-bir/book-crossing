import { Button, Carousel } from "antd"
import { AnnouncementAPI, announcementInfo } from "../api/announcementApi"
import { CloseOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons"
import "../assets/styles/pages/bookDetail.scss"
import { CarouselRef } from "antd/es/carousel"
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { LikeAndDislike } from "../components/LikeAndDislike"

export const BookDetail = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const location = useLocation()
    const { fetchData: fetchGetAnnoucementData } = AnnouncementAPI(`get?id=${id}`, "GET")
    let carouselRef: CarouselRef | null = null
    const [info, setInfo] = useState<announcementInfo>({
        title: "",
        description: "",
        category: "",
        isFavorite: false,
        images: [],
        year: 0,
        location: "",
    })

    const onClickFavorite = (isFavoriteValue: boolean) => {
        setInfo({ ...info, isFavorite: isFavoriteValue })
    }

    const loadData = async () => {
        await fetchGetAnnoucementData(null).then((res) => {
            if (res.result_code === 0) {
                console.log(location);
                const isFavorite = new URLSearchParams(location.search).get("isFavorite")
                const favoriteId = new URLSearchParams(location.search).get("favoriteId")
                const annoucementData: announcementInfo = JSON.parse(JSON.stringify(res.data));

                if (isFavorite === "true" && typeof favoriteId === "string") {
                    setInfo({ ...annoucementData, isFavorite: isFavorite === "true", favoriteId: favoriteId })
                } else {
                    setInfo({ ...annoucementData, isFavorite: false })
                }
            }
        })
    }

    useEffect(() => {
        loadData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="book-detail">
            <div className="book-carousel">
                <CloseOutlined className="back-icon icon-bg" onClick={() => navigate(-1)} />
                <RightOutlined className="arrow right icon-bg" onClick={() => carouselRef?.next()} />
                <LeftOutlined className="arrow left icon-bg" onClick={() => carouselRef?.prev()} />
                <Carousel ref={(ref) => (carouselRef = ref)}>
                    {info.images.map((image, i) => (
                        <img key={i} src={image} className="img" alt="img" />
                    ))}
                </Carousel>
            </div>

            <div className="book-info">
                <div className="book-headInfo">
                    <h1 className="book-title">{info.title}</h1>
                    <p className="book-year">{info.year}</p>
                    <p className="book-category">{info.category}</p>
                </div>
                <div className="book-subInfo">
                    <p className="book-descr">{info.description}</p>

                    <LikeAndDislike
                        isFavorite={info.isFavorite}
                        onClickFavorite={onClickFavorite}
                        announcementId={info.id}
                        favoriteId={info.favoriteId}
                    />
                </div>

                <Button type="primary" className="btn-exchange">
                    Exchange
                </Button>
            </div>
        </div>
    )
}
