import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import "./assets/styles/global.scss";
import { TabbarMenu } from "./components/TabbarMenu.tsx";

function App() {
  return (
    <div style={{ height: "100%", width: "100%", marginTop: 9 }}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div style={{ height: 80 }} />
      <TabbarMenu />
    </div>
  );
}

export default App;
