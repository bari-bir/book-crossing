import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home.tsx"
import "./assets/styles/global.scss"
import { TabbarMenu } from "./components/TabbarMenu.tsx"
import { Favorite } from "./pages/Favorite.tsx"
import { CreateAnnouncement } from "./pages/CreateAnnouncement.tsx"
import { Message } from "./pages/Message.tsx"
import { RequestAnnoucement } from "./pages/RequestAnnoucement.tsx"
import { App as AntApp } from "antd"
import { BookDetail } from "./pages/BookDetail.tsx"

function App() {
    return (
        <AntApp message={{ top: 30 }}>
            <div style={{ width: "100%" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorute" element={<Favorite />} />
                    <Route path="/create-annoucement" element={<CreateAnnouncement />} />
                    <Route path="/message" element={<Message />} />
                    <Route path="/request-annoucement" element={<RequestAnnoucement />} />
                    <Route path="/book/:id" element={<BookDetail />} />
                </Routes>
                <div style={{ height: 73 }} />
                <TabbarMenu />
            </div>
        </AntApp>
    )
}

export default App
