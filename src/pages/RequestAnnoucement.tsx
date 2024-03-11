import { Button, Drawer, Tabs, TabsProps } from "antd"
import { Header } from "../components/Header"
import { useState } from "react"
import "../assets/styles/pages/requestAnnoucement.scss"

export const RequestAnnoucement = () => {
    const [headerTitle, setHeaderTitle] = useState<string>("Request")
    const [showDrawer, setShowDrawer] = useState<boolean>(false)

    /**
     * @TODO add props for drawer
     */
    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Request",
            children: <TabChild isRequest />,
        },
        {
            key: "2",
            label: "Annoucement",
            children: <TabChild />,
        },
    ]

    return (
        <div className="request container">
            <Header title={headerTitle} />

            <Tabs className="tabs" centered defaultActiveKey="1" items={items} onChange={(e) => (e === "1" ? setHeaderTitle("Request") : setHeaderTitle("Annoucement"))} />

            <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
                Test
            </Drawer>
        </div>
    )
}

const TabChild = ({ isRequest = false }: { isRequest?: boolean }) => {
    return (
        <div className="book-wrapper">
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
