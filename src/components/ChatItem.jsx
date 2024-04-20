import React from "react";
import ProductCard from "./ProductCard";
import ChatMessage from "./ChatMessage";

const ChatItem = ({ chat, align }) => {
    return (
        <div className={`chat-item flex flex-col gap-[0.5rem] ${(align === "right") ? "items-end" : "items-start"}`}>
            <ChatMessage message={chat} align={align} />
            <div className="flex gap-[1rem] max-w-[50%] overflow-x-scroll noscrollbar">
                {chat.products.map((product, index) => (
                    <ProductCard key={index} size="sm" align={align} productData={product} />
                ))}
            </div>
        </div>
    );
}

export default ChatItem;
