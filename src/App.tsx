import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/tabbar/Home.tsx"
import "./assets/styles/global.scss"
import { TabbarMenu } from "./components/TabbarMenu.tsx"
import { Favorite } from "./pages/tabbar/Favorite.tsx"
import { CreateAnnouncement } from "./pages/tabbar/CreateAnnouncement.tsx"
import { Message } from "./pages/tabbar/Message.tsx"
import { RequestAnnouncement } from "./pages/tabbar/RequestAnnoucement.tsx"
import { App as AntApp } from "antd"
import { BookDetail } from "./pages/BookDetail.tsx"
import { BookExchange } from "./pages/BookExchange.tsx"
import { Fuse } from "./components/Fuse.tsx"

function App() {
    return (
        <AntApp message={{ top: 30 }}>
            <div style={{ width: "100%"}}>
                <Fuse>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favorite" element={<Favorite />} />
                        <Route path="/create-announcement/:id" element={<CreateAnnouncement />} />
                        <Route path="/message" element={<Message />} />
                        <Route path="/request-annoucement/" element={<RequestAnnouncement />} />
                        <Route path="/book/:id" element={<BookDetail />} />
                        <Route path="/book-exchange/:id" element={<BookExchange />} />
                    </Routes>
                    <div style={{ height: 73 }} />
                    <TabbarMenu />
                </Fuse>
            </div>
        </AntApp>
    )
}

export default App
