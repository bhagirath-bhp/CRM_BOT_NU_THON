import React, { useState } from "react";
import ChatInput from "../components/ChatInput";
import ChatItem from "../components/ChatItem";

const ChatPage = () => {
    const [chats, setChats] = useState([
        {
            message: "Hello",
            products: []
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
            ]
        }
    ]);

    return (
        <div>
            <div className="chat-area w-full">
                {chats.map((chat, index) => (
                    <ChatItem key={index} chat={chat} align={index % 2 === 0 ? "right" : "left"} products={chat.products} />
                ))}
            </div>
            <div className="chat-input py-[1rem]">
                <ChatInput chats={chats} setChats={setChats} />
            </div>
        </div>
    );
};

export default ChatPage;
