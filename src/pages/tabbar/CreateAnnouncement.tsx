import { AppstoreOutlined, CloseOutlined, UploadOutlined, FormOutlined } from "@ant-design/icons"
import { Input, DatePicker, Select, Button, App, Carousel } from "antd"
import "../../assets/styles/pages/createAnnoucement.scss"
import { useCallback, useEffect, useState } from "react"
import { AnnouncementAPI, announcementInfo } from "../../api/announcementApi"
import { GenreAPI, genre } from "../../api/genreApi"
import { CloudImage } from "../../components/CloudImage"
import { useNavigate, useParams } from "react-router-dom"
import dayjs, { Dayjs } from "dayjs"
import { InputStyle } from "../../components/InputStyle"

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

    const handlePostMessageListener = useCallback((message: MessageEvent) => {
        const image = message.data.url
        setInfo((info) => ({ ...info, images: [...info.images, image] }))
    }, [])

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

    useEffect(() => {
        window.addEventListener("message", handlePostMessageListener)
        return () => {
            window.removeEventListener("message", handlePostMessageListener)
        }
    }, [handlePostMessageListener])

    const loadData = () => {
        fetchGetAnnouncementData(null).then((res) => {
            if (res.result_code === 0) {
                const annoucementInfo: announcementInfo = JSON.parse(JSON.stringify(res.data))
                setTime(dayjs(new Date(annoucementInfo.year, 0, 1)))
                setInfo(annoucementInfo)
            }
        })
    }

    const onUploadImg = () => {
        if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(JSON.stringify({ key: "uploadImg" }))
        }
    }

    const onDeleteImage = (e: KonvaMouseEvent, image: string) => {
        e.stopPropagation()

        setInfo({ ...info, images: info.images.filter((item) => item !== image) })
    }

    const onSubmit = () => {
        const data = {
            ...info,
            year: dayjs(time).get("year"),
        }

        if (id && id !== "add") {
            fetchUpdateAnnouncementData(data).then((res) => {
                if (res.result_code === 0) {
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

    return (
        <div className="create-announcement container">
            <div className="dragger">
                <Carousel>
                    {info.images.map((item, i) => (
                        <div key={i} className="image-block">
                            <CloudImage src={item} height={140} width="100%" />
                            <CloseOutlined className="close-icon" onClick={(e) => onDeleteImage(e, item)} />
                        </div>
                    ))}
                    <div className="dragger-wrapper" onClick={onUploadImg}>
                        <div className="upload-icon">
                            <UploadOutlined className="upload-icon" />
                            <p className="upload-text">File size must to be 5MB❗</p>
                        </div>
                    </div>
                </Carousel>
            </div>

            <div className="info">
                <div className="input-wrapper">
                    <InputStyle labelText="Title">
                        <Input
                            name="title"
                            className="input"
                            type="text"
                            placeholder="Title"
                            value={info.title}
                            onChange={(e) => setInfo({ ...info, title: e.target.value })}
                            suffix={<FormOutlined style={{ color: "#212121" }} />}
                        />
                    </InputStyle>

                    <InputStyle labelText="Year">
                        <DatePicker className="input" picker="year" placeholder="Year" format="YYYY" value={time} onChange={(e) => setTime(e)} />
                    </InputStyle>

                    <InputStyle labelText="Category">
                        <Select
                            className="input"
                            placeholder="Category"
                            value={info.category}
                            onChange={(e) => setInfo({ ...info, category: e })}
                            suffixIcon={<AppstoreOutlined style={{ color: "#212121" }} />}>
                            {genreList.map((genre) => (
                                <Option key={genre.id} value={genre.title}>
                                    {genre.title}
                                </Option>
                            ))}
                        </Select>
                    </InputStyle>
                    <InputStyle labelText="City">
                        <Select
                            className="input"
                            placeholder="City"
                            disabled
                            value={info.location}
                            onChange={(e) => setInfo({ ...info, location: e })}>
                            {/* <Option value="Almaty">Almaty</Option> */}
                            {/* <Option value="Astana">Astana</Option> */}
                            {/* <Option value="Shymkent">Shymkent</Option> */}
                        </Select>
                    </InputStyle>
                    <InputStyle labelText="Message">
                        <TextArea
                            className="input"
                            placeholder="Type  a  message here ..."
                            style={{ height: 136, }}
                            value={info.description}
                            onChange={(e) => setInfo({ ...info, description: e.target.value })}></TextArea>
                    </InputStyle>
                </div>
            </div>
            <Button className="btn-send" type="primary" onClick={onSubmit}>
                Send
            </Button>
        </div>
    )
}
