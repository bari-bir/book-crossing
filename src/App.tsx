import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home.tsx"
import "./assets/styles/global.scss"
import { TabbarMenu } from "./components/TabbarMenu.tsx"
import { Favorite } from "./pages/Favorite.tsx"
import { CreateAnnouncement } from "./pages/CreateAnnouncement.tsx"
import { Message } from "./pages/Message.tsx"
import { RequestAnnoucement } from "./pages/RequestAnnoucement.tsx"
import { useLayoutEffect } from "react"

function App() {
    useLayoutEffect(() => {
        document.addEventListener("DOMContentLoaded", function () {
            window.addEventListener("message", (message) => {
                localStorage.setItem("token", JSON.stringify(message.data))
            })
        })
    }, [])

    return (
        <div style={{ width: "100%", marginTop: 30 }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorute" element={<Favorite />} />
                <Route path="/create-annoucement" element={<CreateAnnouncement />} />
                <Route path="/message" element={<Message />} />
                <Route path="/message" element={<Message />} />
                <Route path="/request-annoucement" element={<RequestAnnoucement />} />
            </Routes>
            <div style={{ height: 80 }} />
            <TabbarMenu />
        </div>
    )
}

export default App
