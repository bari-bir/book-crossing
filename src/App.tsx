import {useEffect} from "react";
import axios from "axios";

function App() {
    useEffect(() => {
        testRequest();
    }, []);

    const testRequest = async () => {
      const {token} = JSON.parse(localStorage.getItem('token') || "");
        await axios.post("http://192.168.1.108:8080/bookcrossing/request/list",{}, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            alert(JSON.stringify(res.data));
        }).catch(err =>  {
            alert(err);
        })
    }

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h1>Test</h1>
      <button
        onClick={() => {
          window.history.back();
        }}
      >
        Back
      </button>
    </div>
  );
}

export default App;
