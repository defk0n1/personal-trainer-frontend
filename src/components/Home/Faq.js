import { useEffect } from "react";
import "../../styles/faq.css"
import $ from "jquery"
import { useTranslation } from 'react-i18next'


function Faq(){
    const questions = {
        "Who can participate?":
            "Anyone can participate. Whether you're a competitor or a participant, Code in the Dark 2.0 is open to everyone to code, win and enjoy the experience.",
        "Why should I participate ?":
            "It’s a perfect occasion to not only relax after exams and work but also win valuable gifts and exchange knowledge with highly qualified people.",
        "How much does it cost ?": "No participation fees are required.",
        "Is the event online or offline ?": "It's an on site event.",
        "Is there any age limit ?": "No, anyone can participate.",
        "Do I need to master HTML and/or CSS?":
            "No, the competition is beginner friendly and only requires basic knowledge.",
    };

    const { t } = useTranslation();
    
    
useEffect(() => {
    let chatInput = $(".chat-input");
    let question = $(".question");
    let chat = $(".chat-messages");
    var messageBody = document.querySelector(".chat-messages");
    
    function getQuestion(elementFromClick) {
        elementFromClick = $(elementFromClick.target);
        elementFromClick = elementFromClick.text();
        return elementFromClick;
    }
    
    function getAnswer(questionText) {
        return questions[questionText];
    }
    
    function makeUserMessage(txt) {
        let ch =
            '<div class="user-message"><div class="chat-message"><p>' +
            txt +
            "</p></div></div>";
        return ch;
    }
    
    function makeBotMessage(txt) {
        let ch =
            '<div class="bot-message"><div class="chat-message"><p>' +
            txt +
            "</p></div></div>";
        return ch;
    }
    
    function updateScrollChat() {
        messageBody.scrollTo({
            top: messageBody.scrollHeight - messageBody.clientHeight,
            behavior: "smooth",
        });
    }
    
    var speed = 20;
    function typeWriter(element, txt) {
        var i = 0;
        const x = setInterval(() => {
            if (i < txt.length) {
                element.val(element.val() + txt.charAt(i));
                i++;
            } else {
                clearInterval(x);
            }
        }, speed);
    }
    
    let prevent = $(".prevent"); // a div that let me prevent user from double clicking
    
    question.unbind('click').bind('click', ((e) => {
        console.log(e);
        prevent.removeClass("remove");
        let q = getQuestion(e);
        let a = getAnswer(q);
        typeWriter(chatInput, q);
        setTimeout(() => {
            chat.append(makeUserMessage(q));
            chatInput.val("");
            updateScrollChat();
            setTimeout(() => {
                chat.append(makeBotMessage(a));
                updateScrollChat();
                prevent.addClass("remove");
            }, 500);
        }, q.length * speed + 200);
    }));
}, [])
    
    return(
        <><div className="features-title">
        <h1>{t("faq-title")}</h1>
        </div>
        <section id="faq">
        <div className="container chatbox-container" style={{backgroundColor: "none"}}>
            <div className="card chatbox-card">
                <div className="row chatbox-row">
                    <div className="col-12 col-md-6 chat-section d-flex flex-column justify-content-between">
                        <div className="chat-messages-title title-chat">
                            <h3 style= {{color: "white", fontFamily: 'Superset',
    fontWeight: 400, fontSize:'3rem'}}>CHAT</h3>
                        </div>
                        <div className="chat-messages scrollbar">
                            <div className="bot-message">
                                <div className="chat-message">
                                    <p>Feel free to ask any question from the list !</p>
                                </div>
                            </div>
                        </div>
                        <div className="chat-input">
                            <div className="form-group mx-3">
                                <input type="text" className="form-control chat-input" placeholder="Choose a Question"
                                    disabled style= {{opacity: 0.5}} />
                            </div>
                        </div>
                    </div>
                    <div className="prevent remove"></div>
                    <div className="col-12 col-md-6 questions d-flex flex-column justify-content-between">
                        <div className="questions-container scrollbar2">
                        {
                          Object.keys(questions).map((question) => {
                            return(
                                <div className="question"><button>{question}</button></div>
                            );
                          })
                        }
                        </div>
                        <div className="chat-messages-title title-question">
                            <h3 style={{color: "white", fontFamily: 'Superset',
    fontWeight: 400, fontSize:'3rem'}}>QUESTIONS</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    

    )
    







}





export default Faq;

