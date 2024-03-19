import {Button, Carousel } from "antd"
import { AnnouncementAPI, announcementInfo } from "../api/announcementApi"
import { CloseOutlined, HeartFilled, HeartOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons"
import "../assets/styles/pages/bookDetail.scss"
import { CarouselRef } from "antd/es/carousel"
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { FavoriteApi, favoriteInfo } from "../api/favoriteApi"

export const BookDetail = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const location = useLocation()
    const { fetchData: fetchCreateFavoriteData } = FavoriteApi("create")
    const { fetchData: fetchDeleteFavoriteData } = FavoriteApi("delete")
    const { fetchData: fetchFavoriteData } = FavoriteApi("list")
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
    const [favoriteInfo, setFavoriteInfo] = useState<favoriteInfo>({
        id: "",
        announcement: "",
        creator: "",
    });

    const onClickFavorite = (isFavoriteValue: boolean) => {
        if (!isFavoriteValue) {
            fetchDeleteFavoriteData({
                favoriteId: favoriteInfo.id,
            }).then((res) => {
                if (res.result_code === 0) {
                    setInfo({ ...info, isFavorite: isFavoriteValue })
                }
            })
        } else {
            fetchCreateFavoriteData({
                announcementId: id,
            }).then((res) => {
                if (res.result_code === 0) {
                    setInfo({ ...info, isFavorite: isFavoriteValue })
                }
            })
        }
    }

    const loadData = async () => {
        await fetchGetAnnoucementData(null).then((res) => {
            if (res.result_code === 0) {
                const isFavorite = new URLSearchParams(location.search).get("isFavorite")
                setInfo({ ...res.data, isFavorite: isFavorite === "true" } as unknown as announcementInfo)
            }
        })

        fetchFavoriteData({}).then((res) => {
            if (res.result_code === 0) {
                const favorite = res.data.find((item) => item.announcement === id)
                if (favorite && favorite.announcement.length) {
                    setFavoriteInfo(favorite)
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

                    <div className="favorite">{info.isFavorite ? <HeartFilled onClick={() => onClickFavorite(false)} className="icon active" /> : <HeartOutlined onClick={() => onClickFavorite(true)} className="icon" />}</div>
                </div>

                <Button type="primary" className="btn-exchange">
                    Exchange
                </Button>
            </div>
        </div>
    )
}
