import { AppstoreOutlined, CloudUploadOutlined, FormOutlined } from "@ant-design/icons"
import { Header } from "../components/Header"
import { Input, Upload, UploadProps, DatePicker, Select } from "antd"
import "../assets/styles/pages/createAnnoucement.scss"
import { useState } from "react"

const { Dragger } = Upload
const { Option } = Select
const { TextArea } = Input

export const CreateAnnouncement = () => {
    const [category, setCategory] = useState<string | null>()
    const draggerProps: UploadProps = {
        name: "pngurls",
        accept: "images/*",
        multiple: true,
        action: "test",
        onChange(info) {
            // const {status} = info.file;
            console.log(info)
        },
        onDrop(e) {
            console.log("Dropped file", e)
        },
    }

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
                    <Input style={{ flex: 5 }} type="text" placeholder="Title" suffix={<FormOutlined style={{ color: "#BFBFBF" }} />} />
                    <DatePicker style={{ flex: 1 }} type="year" placeholder="year" onChange={(value) => console.log(value)} />
                </div>
                <div className="info-wrapper">
                    <Select style={{ flex: 1 }} placeholder="Category" value={category} onChange={setCategory} suffixIcon={<AppstoreOutlined style={{ color: "#BFBFBF" }} />}>
                        <Option value="classic">Classic</Option>
                    </Select>
                    <Select style={{ flex: 1 }} placeholder="City" value={category} onChange={setCategory}>
                        <Option value="classic">Classic</Option>
                    </Select>
                </div>

                <TextArea placeholder="Type  a  message here ..." style={{ height: 136 }}></TextArea>
            </div>
        </div>
    )
}
