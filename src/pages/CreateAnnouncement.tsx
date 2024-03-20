import { AppstoreOutlined, CloseOutlined, CloudUploadOutlined, FormOutlined } from "@ant-design/icons"
import { Header } from "../components/Header"
import { Input, Upload, UploadProps, DatePicker, Select, Button, App, Carousel, GetProp } from "antd"
import "../assets/styles/pages/createAnnoucement.scss"
import { useEffect, useState } from "react"
import { AnnouncementAPI, announcementInfo } from "../api/announcementApi"
import { GenreAPI, genre } from "../api/genreApi"
import http from "../utils/axios"
import { RcFile } from "antd/es/upload"
import { CloudImage } from "../components/CloudImage"
import { useParams } from "react-router-dom"
import dayjs, { Dayjs } from "dayjs"

type FileType = Parameters<GetProp<UploadProps, "customRequest">>[0]

const { Dragger } = Upload
const { Option } = Select
const { TextArea } = Input

const _infoTemp = {
    title: "",
    category: null,
    year: 0,
    images: [],
    description: "",
    location: null,
}

export const CreateAnnouncement = () => {
    const { id } = useParams()
    const { fetchData: fetchGenreData } = GenreAPI()
    const { fetchData: fetchGetAnnouncementData } = AnnouncementAPI(`/get?id=${id}`, "GET")
    const { fetchData: fetchAnnoucementData } = AnnouncementAPI("create")
    const { message } = App.useApp()
    const [genreList, setGenreList] = useState<genre[]>([])
    const [info, setInfo] = useState<announcementInfo>(_infoTemp)
    const [time, setTime] = useState<Dayjs | null>(null)

    const draggerProps: UploadProps = {
        name: "file",
        accept: "image/*",
        multiple: false,
        maxCount: 1,
        showUploadList: false,
        customRequest: (e) => uploadFile(e),
        beforeUpload: (e) => beforeUpload(e),
    }

    const uploadFile = async (file: FileType) => {
        const currentFile = file.file as RcFile
        if (!currentFile) {
            console.log("file is empty")
            return
        }

        const isLt10M: boolean = currentFile.size / 1024 / 1024 < 1

        if (!isLt10M) {
            message.error("File size small than 1mb")
            return false
        }

        const param = new FormData()
        param.append("file", (currentFile || file) as Blob)
        const res = await http({
            url: "/bookcrossing/announcement/upload",
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            data: param,
        })

        if (res.data.result_code === 0) {
            /**
             * @TODO add progress file
             * file.onProgress = 100;
             *
             */
            const urlImage = `${import.meta.env.VITE_API_URL}/public/get_resource?name=${res.data.data.path}`
            setInfo({ ...info, images: [...info.images, urlImage] })

            return true
        } else {
            message.error(res.data.data.slice(0, 20))
            return false
        }
    }

    const beforeUpload = async (file: RcFile) => {
        const isImg = await checkImgType(file)
        if (!isImg) {
            message.error("Image format error")
            return false
        }

        return true
    }

    const checkImgType = async (file: RcFile) => {
        if (!/\.(jpg|jpeg|png|GIF|JPG|PNG)$/.test(file.name)) {
            return false
        } else {
            return true
        }
    }

    const onSubmit = () => {
        const data = {
            ...info,
            year: dayjs(time).get("year"),
        }
        fetchAnnoucementData(data).then((res) => {
            if (res.result_code === 0) {
                message.success("Successfuly created annoucement")
                setInfo(_infoTemp)
            }
        })
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

    return (
        <div className="create-announcement">
            <div className="container">
                <Header title="Create Announcement" />
            </div>

            <div className="dragger">
                <Carousel>
                    {info.images.map((item, i) => (
                        <div key={i} className="image-block">
                            <CloudImage src={item} height={258} width="100%" />
                            <CloseOutlined className="close-icon" onClick={(e) => onDeleteImage(e, item)} />
                        </div>
                    ))}
                    <div className="dragger-wrapper">
                        <Dragger {...draggerProps}>
                            <CloudUploadOutlined className="upload-icon" />
                            <p className="upload-text">Upload the photo</p>
                        </Dragger>
                    </div>
                </Carousel>
            </div>

            <div className="info container">
                <div className="info-wrapper">
                    <Input
                        style={{ flex: 4 }}
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={info.title}
                        onChange={(e) => setInfo({ ...info, title: e.target.value })}
                        suffix={<FormOutlined style={{ color: "#BFBFBF" }} />}
                    />
                    <DatePicker style={{ flex: 1 }} picker="year" placeholder="year" format="YYYY" value={time} onChange={(e) => setTime(e)} />
                </div>
                <div className="info-wrapper">
                    <Select
                        style={{ flex: 1 }}
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
                    <Select style={{ flex: 1 }} placeholder="City" value={info.location} onChange={(e) => setInfo({ ...info, location: e })}>
                        <Option value="Almaty">Almaty</Option>
                        <Option value="Astana">Astana</Option>
                        <Option value="Shymkent">Shymkent</Option>
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
