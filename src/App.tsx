import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.tsx";

function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
        <Routes>
            <Route path="/"  element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
