import { CustomSearch } from "../components/CustomSearch"
import { Header } from "../components/Header"
import "../assets/styles/pages/message.scss"
import ProfileImg from "../assets/images/userProfile1.png"

export const Message = () => {
    return (
        <div className="message container">
            <Header title="Message" />

            <CustomSearch />

            <div className="message-wrapper">
                <div className="message-block">
                    <div className="user-info">
                        <img className="user-profile" src={ProfileImg} alt="userProfile" />
                        <div>
                            <p className="user-name">Yrysbek Nessipkulov</p>
                            <p className="user-descr">Want to change the book!</p>
                        </div>
                    </div>
                    <div className="book-info">
                        <p className="time">18:39</p>
                        <span className="circle">1</span>
                    </div>
                </div>
                <div className="message-block">
                    <div className="user-info">
                        <img className="user-profile" src={ProfileImg} alt="userProfile" />
                        <div>
                            <p className="user-name">Yrysbek Nessipkulov</p>
                            <p className="user-descr" style={{ fontSize: 14 }}>
                                <span style={{ color: "#6E6E6E" }}>You:</span> Want to change the book!
                            </p>
                        </div>
                    </div>
                    <div className="book-info">
                        <p className="time">18:39</p>
                    </div>
                </div>
                <div className="message-block">
                    <div className="user-info">
                        <img className="user-profile" src={ProfileImg} alt="userProfile" />
                        <div>
                            <p className="user-name">Yrysbek Nessipkulov</p>
                            <p className="user-descr">Want to change the book!</p>
                        </div>
                    </div>
                    <div className="book-info">
                        <p className="time">18:39</p>
                        <span className="circle">1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
