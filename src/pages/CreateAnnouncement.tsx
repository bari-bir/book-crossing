import { AppstoreOutlined, CloseOutlined, CloudUploadOutlined, FormOutlined } from "@ant-design/icons"
import { Header } from "../components/Header"
import { Input, DatePicker, Select, Button, App, Carousel } from "antd"
import "../assets/styles/pages/createAnnoucement.scss"
import { useCallback, useEffect, useState } from "react"
import { AnnouncementAPI, announcementInfo } from "../api/announcementApi"
import { GenreAPI, genre } from "../api/genreApi"
import { CloudImage } from "../components/CloudImage"
import { useNavigate, useParams } from "react-router-dom"
import dayjs, { Dayjs } from "dayjs"

const { Option } = Select
const { TextArea } = Input

const _infoTemp = {
    title: "",
    category: null,
    year: 0,
    images: [],
    description: "",
    location: "Almaty",
}

export const CreateAnnouncement = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { fetchData: fetchGenreData } = GenreAPI()
    const { fetchData: fetchGetAnnouncementData } = AnnouncementAPI(`/get?id=${id}`, "GET")
    const { fetchData: fetchAnnoucementData } = AnnouncementAPI("create")
    const { fetchData: fetchUpdateAnnouncementData } = AnnouncementAPI("update")
    const { message } = App.useApp()
    const [genreList, setGenreList] = useState<genre[]>([])
    const [info, setInfo] = useState<announcementInfo>(_infoTemp)
    const [time, setTime] = useState<Dayjs | null>(null)

    const onUploadImg = () => {
        if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(JSON.stringify({ key: "uploadImg" }))
        }
    }

    const onSubmit = () => {
        const data = {
            ...info,
            year: dayjs(time).get("year"),
        }

        if (id && id !== "add") {
            fetchUpdateAnnouncementData(data).then(res => {
                if(res.result_code === 0) {
                    message.success("Successfuly updated annoucement")
                    setInfo(_infoTemp)
                    navigate("/request-annoucement?isAnnoucement=true")
                }
            })
        } else {
            fetchAnnoucementData(data).then((res) => {
                if (res.result_code === 0) {
                    message.success("Successfuly created annoucement")
                    setInfo(_infoTemp)
                    navigate("/request-annoucement?isAnnoucement=true")
                }
            })
        }
    }

    const onDeleteImage = (e: KonvaMouseEvent, image: string) => {
        e.stopPropagation()

        setInfo({ ...info, images: info.images.filter((item) => item !== image) })
    }

    const loadData = () => {
        fetchGetAnnouncementData(null).then((res) => {
            if (res.result_code === 0) {
                const annoucementInfo: announcementInfo = JSON.parse(JSON.stringify(res.data))
                setTime(dayjs(new Date(annoucementInfo.year, 0, 1)))
                setInfo(annoucementInfo)
            }
        })
    }

    useEffect(() => {
        fetchGenreData({}).then((res) => {
            if (res.result_code === 0) {
                setGenreList(res.data)
            }
        })

        if (id && id !== "add") {
            loadData()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handlePostMessageListener = useCallback((message: MessageEvent) => {
        const image = message.data.url
        setInfo((info) => ({ ...info, images: [...info.images, image] }))
    }, [])

    useEffect(() => {
        window.addEventListener("message", handlePostMessageListener)
        return () => {
            window.removeEventListener("message", handlePostMessageListener)
        }
    }, [handlePostMessageListener])

    return (
        <div className="create-announcement container">
            <Header title="Create Announcement" />

            <div className="dragger">
                <Carousel>
                    {info.images.map((item, i) => (
                        <div key={i} className="image-block">
                            <CloudImage src={item} height={258} width="100%" />
                            <CloseOutlined className="close-icon" onClick={(e) => onDeleteImage(e, item)} />
                        </div>
                    ))}
                    <div className="dragger-wrapper" onClick={onUploadImg}>
                        <div className="upload-icon">
                            <CloudUploadOutlined className="upload-icon" />
                            <p className="upload-text">Click here to upload</p>
                        </div>
                    </div>
                </Carousel>
            </div>

            <div className="info">
                <div className="info-wrapper">
                    <Input
                        style={{ flex: 2 }}
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={info.title}
                        onChange={(e) => setInfo({ ...info, title: e.target.value })}
                        suffix={<FormOutlined style={{ color: "#BFBFBF" }} />}
                    />
                    <DatePicker style={{ flex: 1 }} picker="year" placeholder="year" format="YYYY" value={time} onChange={(e) => setTime(e)} />

                    <Select
                        style={{ flex: 2 }}
                        placeholder="Category"
                        value={info.category}
                        onChange={(e) => setInfo({ ...info, category: e })}
                        suffixIcon={<AppstoreOutlined style={{ color: "#BFBFBF" }} />}>
                        {genreList.map((genre) => (
                            <Option key={genre.id} value={genre.title}>
                                {genre.title}
                            </Option>
                        ))}
                    </Select>
                    <Select style={{ flex: 1 }} placeholder="City" disabled  value={info.location} onChange={(e) => setInfo({ ...info, location: e })}>
                        {/* <Option value="Almaty">Almaty</Option> */}
                        {/* <Option value="Astana">Astana</Option> */}
                        {/* <Option value="Shymkent">Shymkent</Option> */}
                    </Select>
                </div>

                <TextArea
                    placeholder="Type  a  message here ..."
                    style={{ height: 136 }}
                    value={info.description}
                    onChange={(e) => setInfo({ ...info, description: e.target.value })}></TextArea>
            </div>
            <Button className="btn-send" type="primary" onClick={onSubmit}>
                Send
            </Button>
        </div>
    )
}
