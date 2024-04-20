import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";

 
const InputWithButton = ({chats, setChats}) => {
  const [message, setMessage] = useState("");
  const onChange = ({ target }) => setMessage(target.value);
  const onSubmit= () => {
    const temp = {
      message: message,
      products: []
    }
    setChats([...chats, temp])
  }
  return (
    <div className="relative flex w-full">
      <Input
        type="text"
        label="message"
        value={message}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={message ? "gray" : "blue-gray"}
        disabled={!message}
        className="!absolute right-1 top-1 rounded"
        onClick={onSubmit}
      >
        Send
      </Button>
    </div>
  );
}
export default InputWithButton