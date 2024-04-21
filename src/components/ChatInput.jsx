import { Input, Button, IconButton } from "@material-tailwind/react";



// const InputWithButton = ({chats, setChats, setMessage}) => {
const InputWithButton = ({ message, setMessage, onSubmit, loading, speechRecognition }) => {
// const InputWithButton = ({ message, setMessage, onSubmit, loading, micControl }) => {
  // const [message, setMessage] = useState("");
  const onChange = ({ target }) => setMessage(target.value);
  // const onSubmit = async () => {
  //   const temp = {
  //     message: message,
  //     products: []
  //   }
  //   setChats([...chats, temp])
  //   const response = await ask(message);
  //   console.log(response)
  // }
  return (
    <form onSubmit={onSubmit} className="relative flex w-full">
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
      <div className="!absolute right-1 top-1 flex gap-[0.3rem]">
        {/* <Button size="sm" className="rounded" onClick={micControl}> */}
        <Button size="sm" className="rounded" onClick={speechRecognition}>
          <img src="mic.png" alt="mic" className="h-3"/>
        </Button>
        <Button
          size="sm"
          color={message ? "gray" : "blue-gray"}
          disabled={!message}
          className="rounded"
          type="submit"
          loading={loading}
        >
          Send
        </Button>
      </div>
    </form>
  );
}
export default InputWithButton