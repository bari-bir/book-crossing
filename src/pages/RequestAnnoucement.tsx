import { Button, Drawer, Space, Tabs, TabsProps } from "antd"
import { Header } from "../components/Header"
import { useState } from "react"
import UserProfile from "../assets/images/userProfile.png"
import "../assets/styles/pages/requestAnnoucement.scss"

export const RequestAnnoucement = () => {
    const [headerTitle, setHeaderTitle] = useState<string>("Request")
    const [showDrawer, setShowDrawer] = useState<boolean>(false)

    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Request",
            children: <TabChild isRequest openDrawer={openDrawer} />,
        },
        {
            key: "2",
            label: "Annoucement",
            children: <TabChild openDrawer={openDrawer} />,
        },
    ]

    function openDrawer() {
        setShowDrawer(true)
    }

    return (
        <div className="request container">
            <Header title={headerTitle} />

            <Tabs className="tabs" centered defaultActiveKey="1" items={items} onChange={(e) => (e === "1" ? setHeaderTitle("Request") : setHeaderTitle("Annoucement"))} />

            <Drawer
                open={showDrawer}
                onClose={() => setShowDrawer(false)}
                placement="bottom"
                extra={
                    <Space>
                        <div className="header-user">
                            <img src={UserProfile} alt={"userProfile"} className="user-img" />
                        </div>
                    </Space>
                }>
                <div className="drawer-wrapper">
                    <h1 className="user-name">Akbota Zhumakhanbet</h1>
                    <div className="btns">
                        <Button>Review</Button>
                        <Button type="primary">Accept</Button>
                    </div>

                    <div className="drawer-content">
                        <div className="imgs">
                            <img className="book-img" src="https://ir.ozone.ru/s3/multimedia-6/c350/6741077010.jpg" alt="book img" />
                            <img className="book-img" src="https://ir.ozone.ru/s3/multimedia-6/c350/6741077010.jpg" alt="book img" />
                            <img className="book-img" src="https://ir.ozone.ru/s3/multimedia-6/c350/6741077010.jpg" alt="book img" />
                        </div>

                        <p className="descr">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim
                        </p>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

const TabChild = ({ isRequest = false, openDrawer }: { isRequest?: boolean; openDrawer: () => void }) => {
    return (
        <div className="book-wrapper">
            <div className="book">
                <img className="book-img" src="https://ir.ozone.ru/s3/multimedia-6/c350/6741077010.jpg" alt="book" />
                <div className="book-info">
                    <h3 className="title">Akbota Zhumakhanbet</h3>
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem commodi, enim sequi eligendi exercitationem quos? A ab sed quam magni molestiae earum quasi, ad fugiat voluptatem repudiandae accusamus enim.</p>

                    <div className="book-btn">
                        <Button onClick={openDrawer}>{isRequest ? "Review" : "Remove"}</Button>
                        <Button type="primary">{isRequest ? "Accept" : "Delete"}</Button>
                    </div>
                </div>
            </div>
            <div className="book">
                <img className="book-img" src="https://ir.ozone.ru/s3/multimedia-6/c350/6741077010.jpg" alt="book" />
                <div className="book-info">
                    <h3 className="title">Akbota Zhumakhanbet</h3>
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem commodi, enim sequi eligendi exercitationem quos? A ab sed quam magni molestiae earum quasi, ad fugiat voluptatem repudiandae accusamus enim.</p>

                    <div className="book-btn">
                        <Button>{isRequest ? "Review" : "Remove"}</Button>
                        <Button type="primary">{isRequest ? "Accept" : "Delete"}</Button>
                    </div>
                </div>
            </div>

            <div className="book">
                <img className="book-img" src="https://ir.ozone.ru/s3/multimedia-6/c350/6741077010.jpg" alt="book" />
                <div className="book-info">
                    <h3 className="title">Akbota Zhumakhanbet</h3>
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem commodi, enim sequi eligendi exercitationem quos? A ab sed quam magni molestiae earum quasi, ad fugiat voluptatem repudiandae accusamus enim.</p>

                    <div className="book-btn">
                        <Button>{isRequest ? "Review" : "Remove"}</Button>
                        <Button type="primary">{isRequest ? "Accept" : "Delete"}</Button>
                    </div>
                </div>
            </div>
            <div className="book">
                <img className="book-img" src="https://ir.ozone.ru/s3/multimedia-6/c350/6741077010.jpg" alt="book" />
                <div className="book-info">
                    <h3 className="title">Akbota Zhumakhanbet</h3>
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem commodi, enim sequi eligendi exercitationem quos? A ab sed quam magni molestiae earum quasi, ad fugiat voluptatem repudiandae accusamus enim.</p>

                    <div className="book-btn">
                        <Button>{isRequest ? "Review" : "Remove"}</Button>
                        <Button type="primary">{isRequest ? "Accept" : "Delete"}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
