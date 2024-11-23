import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faUser,
    faPen,
    faCommentDots,
    faGear,
    faMagnifyingGlass,
    faEllipsisVertical,
    faFaceSmile,
    faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

function App() {
    return (
        <div className='container'>
            <div className='row'>
                <nav className='menu'>
                    <ul className='items'>
                        <li className='item'>
                            <FontAwesomeIcon icon={faHouse} />
                        </li>
                        <li className='item'>
                            <FontAwesomeIcon icon={faUser} />
                        </li>
                        <li className='item'>
                            <FontAwesomeIcon icon={faPen} />
                        </li>
                        <li className='item'>
                            <FontAwesomeIcon icon={faCommentDots} />
                        </li>
                        <li className='item'>
                            <FontAwesomeIcon icon={faGear} />
                        </li>
                    </ul>
                </nav>

                <section className='discussions'>
                    <div className='discussion search'>
                        <div className='searchbar'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <input type='text' placeholder='Search...' />
                        </div>
                    </div>

                    <div className='discussion message-active'>
                        <div
                            className='photo'
                            style={{
                                backgroundImage: `url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)`,
                            }}
                        >
                            <div className='online'></div>
                        </div>

                        <div className='desc-contact'>
                            <p className='name'>Megan Leib</p>
                            <p className='message'>
                                9 pm at the bar if possible 😳
                            </p>
                        </div>
                        <div className='timer'>12 sec</div>
                    </div>

                    <div className='discussion'>
                        <div
                            className='photo'
                            style={{
                                backgroundImage: `url(https://i.pinimg.com/originals/a9/26/52/a926525d966c9479c18d3b4f8e64b434.jpg)`,
                            }}
                        >
                            <div className='online'></div>
                        </div>

                        <div className='desc-contact'>
                            <p className='name'>Dave Corlew</p>
                            <p className='message'>
                                Let&apos;s meet for a coffee or something today
                                ?
                            </p>
                        </div>
                        <div className='timer'>3 min</div>
                    </div>

                    <div className='discussion'>
                        <div
                            className='photo'
                            style={{
                                backgroundImage: `url(https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80)`,
                            }}
                        ></div>
                        <div className='desc-contact'>
                            <p className='name'>Jerome Seiber</p>
                            <p className='message'>
                                I&apos;ve sent you the annual report
                            </p>
                        </div>
                        <div className='timer'>42 min</div>
                    </div>

                    <div className='discussion'>
                        <div
                            className='photo'
                            style={{
                                backgroundImage: `url(https://card.thomasdaubenton.com/img/photo.jpg)`,
                            }}
                        >
                            <div className='online'></div>
                        </div>
                        <div className='desc-contact'>
                            <p className='name'>Thomas Dbtn</p>
                            <p className='message'>See you tomorrow ! 🙂</p>
                        </div>
                        <div className='timer'>2 hour</div>
                    </div>

                    <div className='discussion'>
                        <div
                            className='photo'
                            style={{
                                backgroundImage: `url(https://images.unsplash.com/photo-1553514029-1318c9127859?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80)`,
                            }}
                        ></div>
                        <div className='desc-contact'>
                            <p className='name'>Elsie Amador</p>
                            <p className='message'>
                                What the f**k is going on ?
                            </p>
                        </div>
                        <div className='timer'>1 day</div>
                    </div>

                    <div className='discussion'>
                        <div
                            className='photo'
                            style={{
                                backgroundImage: `url(https://images.unsplash.com/photo-1541747157478-3222166cf342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80)`,
                            }}
                        ></div>
                        <div className='desc-contact'>
                            <p className='name'>Billy Southard</p>
                            <p className='message'>Ahahah 😂</p>
                        </div>
                        <div className='timer'>4 days</div>
                    </div>

                    <div className='discussion'>
                        <div
                            className='photo'
                            style={{
                                backgroundImage: `url(https://images.unsplash.com/photo-1435348773030-a1d74f568bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)`,
                            }}
                        >
                            <div className='online'></div>
                        </div>
                        <div className='desc-contact'>
                            <p className='name'>Paul Walker</p>
                            <p className='message'>You can&apos;t see me</p>
                        </div>
                        <div className='timer'>1 week</div>
                    </div>
                </section>

                <section className='chat'>
                    <div className='header-chat'>
                        <FontAwesomeIcon icon={faUser} className='icon' />
                        <p className='name'>Megan Leib</p>
                        <FontAwesomeIcon
                            icon={faEllipsisVertical}
                            className='icon right clickable'
                        />
                    </div>

                    <div className='messages-chat'>
                        <div className='message'>
                            <div
                                className='photo'
                                style={{
                                    backgroundImage: `url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)`,
                                }}
                            >
                                <div className='online'></div>
                            </div>
                            <p className='text'> Hi, how are you ? </p>
                        </div>

                        <div className='message text-only'>
                            <p className='text'>
                                {" "}
                                What are you doing tonight ? Want to go take a
                                drink ?
                            </p>
                        </div>
                        <p className='time'> 14h58</p>

                        <div className='message text-only'>
                            <div className='response'>
                                <p className='text'>
                                    {" "}
                                    Hey Megan ! It&apos;s been a while 😃
                                </p>
                            </div>
                        </div>

                        <div className='message text-only'>
                            <div className='response'>
                                <p className='text'> When can we meet?</p>
                            </div>
                        </div>
                        <p className='response-time time'> 15h04</p>

                        <div className='message'>
                            <div
                                className='photo'
                                style={{
                                    backgroundImage: `url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)`,
                                }}
                            >
                                <div className='online'></div>
                            </div>
                            <p className='text'>
                                {" "}
                                9 pm at the bar if possible 😳{" "}
                            </p>
                        </div>
                        <p className='time'> 15h09</p>
                    </div>

                    <div className='footer-chat'>
                        <FontAwesomeIcon
                            icon={faFaceSmile}
                            className='clickable icon'
                        />
                        <input
                            type='text'
                            className='write-message'
                            placeholder='Type your message here'
                        ></input>
                        <FontAwesomeIcon
                            icon={faPaperPlane}
                            className='clickable icon'
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
