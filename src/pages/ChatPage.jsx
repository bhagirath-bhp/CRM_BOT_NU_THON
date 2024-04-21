import React, { useEffect, useState } from "react";
import ChatInput from "../components/ChatInput";
import ChatItem from "../components/ChatItem";
import Loader from "../components/Loader";
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
// import 'regenerator-runtime'
import { ask } from "../api/chat";


const ChatPage = () => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [chats, setChats] = useState([
        {
            message: "Hello",
            products: [],
            type: "sent"
        },
        {
            message: "Hi there",
            products: [
                {
                    title: "Product 1",
                    description: "Description of Product 1",
                    imageURL: "https://example.com/product1.jpg"
                },
                {
                    title: "Product 2",
                    description: "Description of Product 2",
                    imageURL: "https://example.com/product2.jpg"
                }
            ],
            type: "recieved"
        }
    ]);

    // const { transcript, listening, resetTranscript } = useSpeechRecognition();

    // useEffect(() => {
    //     if (transcript !== '') {
    //         console.log(transcript);
    //         setMessage(transcript);
    //         resetTranscript(); // Reset transcript after processing
    //     }
    // }, [transcript, resetTranscript]);

    // const micControl = () => {
    //     if (listening) {
    //         SpeechRecognition.stopListening();
    //     } else {
    //         SpeechRecognition.startListening();
    //     }
    // };

    const onSubmit = async (event) => {
        event.preventDefault();
        setMessage("");
        let temp = {
            message: message,
            products: [],
            type: "sent"
        };
        setChats([...chats, temp]);
        setLoading(true);
        const response = await ask(message);
        setTimeout(() => {
            if (response.success) {
                console.log(response)
                setLoading(false);
                temp = {
                    message: response.data.response,
                    products: [],
                    type: "received"
                };
            } else {
                temp = {
                    message: "Error occurred",
                    products: [],
                    type: "received"
                };
            }
            setChats(prevChats => [...prevChats, temp]);
        }, 100);
    };

    return (
        <div>
            <div className="chat-area w-full">
                {chats.map((chat, index) => (
                    <ChatItem key={index} chat={chat} type={chat.type} products={chat.products} />
                ))}
            </div>
            <div className="chat-input py-[1rem] relative">
                {loading && <div className="absolute top-[-2rem] left-[1rem]"><Loader /></div>}
                <ChatInput message={message} setMessage={setMessage} onSubmit={onSubmit} loading={loading} />
            </div>
        </div>
    );
};

export default ChatPage;
