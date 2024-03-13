import { CloudUploadOutlined, FormOutlined } from "@ant-design/icons"
import { Header } from "../components/Header"
import { Input, Upload, UploadProps, DatePicker, Select } from "antd"
import "../assets/styles/pages/createAnnoucement.scss"
import { useState } from "react"

const { Dragger } = Upload
const { Option } = Select
const { TextArea } = Input

export const CreateAnnouncement = () => {
    const [category, setCategory] = useState<string>("")
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
                    <Input type="text" placeholder="Title" suffix={<FormOutlined />} />
                    <DatePicker type="year" onChange={(value) => console.log(value)} />
                </div>
                <div className="info-wrapper">
                    <Select value={category} onChange={setCategory}>
                        <Option value="classic">Classic</Option>
                    </Select>
                </div>

                <TextArea showCount placeholder="Type  a  message here ..."></TextArea>
            </div>
        </div>
    )
}
