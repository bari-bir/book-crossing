import { AppstoreOutlined, CloudUploadOutlined, FormOutlined } from "@ant-design/icons"
import { Header } from "../components/Header"
import { Input, Upload, UploadProps, DatePicker, Select, message } from "antd"
import "../assets/styles/pages/createAnnoucement.scss"
import { useEffect, useState } from "react"
import { announcementInfo } from "../api/announcementApi"
import { GenreAPI, genre } from "../api/genreApi"
import { UploadRequestOption } from "rc-upload/lib/interface"
import http from "../utils/axios"
import { RcFile } from "antd/es/upload"

const { Dragger } = Upload
const { Option } = Select
const { TextArea } = Input

export const CreateAnnouncement = () => {
    const { fetchData } = GenreAPI()
    const [messageApi] = message.useMessage()
    const [genreList, setGenreList] = useState<genre[]>([])
    const [info, setInfo] = useState<announcementInfo>({
        title: "",
        category: null,
        year: 0,
        images: [],
        description: "",
    })
    const [uploadImages, setUploadImages] = useState<string[]>([])

    const draggerProps: UploadProps = {
        name: "file",
        accept: "image/*",
        multiple: true,
        showUploadList: false,
        fileList: uploadImages ? uploadImages.map((item, i) => ({ uid: i.toString(), url: item, name: getFileName(item) })) : [],
        customRequest: (e) => uploadFile(e),
        beforeUpload: (e) => beforeUpload(e),
        onChange(info) {
            // const {status} = info.file;
            alert(JSON.stringify(info))
            console.log(info)
        },
        onDrop(e) {
            console.log("Dropped file", e)
        },
    }

    const getFileName = (url: string) => {
        if (url) {
            if (url.indexOf("/") == -1) {
                return url
            }
            const urlArray = url.split("/")
            return urlArray[urlArray.length - 1]
        } else {
            return ""
        }
    }

    const uploadFile = async (file: UploadRequestOption<string | Blob>) => {
        const currentFile = file.file

        if (!currentFile) {
            console.log("file is empty")
            return
        }

        const param = new FormData()
        param.append("file", (currentFile || file) as Blob, file.filename)

        const res = await http({
            url: "/bookcrossing/announcement/upload",
            method: "POST",
            data: param,
        })

        if (res.data.result_code === 0) {
            /**
             * @TODO add progress file
             * file.onProgress = 100;
             *
             */
            const urlImage = `${import.meta.env.VITE_API_URL}/public/get_resource?name=${res.data.path}`
            setUploadImages((images) => [...images, urlImage])

            return true
        } else {
            return false
        }
    }

    const beforeUpload = async (file: RcFile) => {
        const isImg = await checkImgType(file)
        if (!isImg) {
            messageApi.error("Image format error")
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


    useEffect(() => {
        fetchData({}).then((res) => {
            if (res.result_code === 0) {
                setGenreList(res.data)
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="create-announcement">
            <div className="container">
                <Header title="Create Announcement" />
            </div>

            <div className="dragger">
                <Dragger {...draggerProps} style={{ backgroundColor: "#D9D9D9" }}>
                    <CloudUploadOutlined className="upload-icon" />
                    <p className="upload-text">Upload the photo</p>
                </Dragger>
            </div>

            <div className="info container">
                <div className="info-wrapper">
                    <Input style={{ flex: 5 }} name="title" type="text" placeholder="Title" value={info.title} onChange={(e) => setInfo({ ...info, title: e.target.value })} suffix={<FormOutlined style={{ color: "#BFBFBF" }} />} />
                    <DatePicker style={{ flex: 1 }} type="year" placeholder="year" value={info.year} onChange={(e) => setInfo({ ...info, year: e })} />
                </div>
                <div className="info-wrapper">
                    <Select style={{ flex: 1 }} placeholder="Category" value={info.category} onChange={(e) => setInfo({ ...info, category: e })} suffixIcon={<AppstoreOutlined style={{ color: "#BFBFBF" }} />}>
                        {genreList.map((genre) => (
                            <Option key={genre.id} value={genre.title}>
                                {genre.title}
                            </Option>
                        ))}
                    </Select>
                    <Select style={{ flex: 1 }} placeholder="City">
                        <Option value="classic">Almaty</Option>
                        <Option value="classic">Astana</Option>
                        <Option value="classic">Shymkent</Option>
                    </Select>
                </div>

                <TextArea placeholder="Type  a  message here ..." style={{ height: 136 }}></TextArea>
            </div>
        </div>
    )
}
