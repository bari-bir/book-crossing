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
import { BookExchange } from "./pages/BookExchange.tsx"

function App() {
    return (
        <AntApp message={{ top: 30 }}>
            <div style={{ width: "100%", marginTop: 10 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorute" element={<Favorite />} />
                    <Route path="/create-announcement/:id" element={<CreateAnnouncement />} />
                    <Route path="/message" element={<Message />} />
                    <Route path="/request-annoucement/" element={<RequestAnnoucement />} />
                    <Route path="/book/:id" element={<BookDetail />} />
                    <Route path="/book-exchange/:id" element={<BookExchange />} />
                </Routes>
                <div style={{ height: 73 }} />
                <TabbarMenu />
            </div>
        </AntApp>
    )
}

export default App
