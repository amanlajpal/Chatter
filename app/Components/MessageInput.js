import { socket } from "../socket";
export default function MessageInput({ setMessages }) {
    const handleSendMessage = (event) => {
        event.preventDefault()
        const inputMessageElement = document.querySelector("body > div > section > div.message-box > input")
        let inputMessage = inputMessageElement?.value
        if (inputMessage) {
            socket.emit('chat message', inputMessage);
            socket.on('insert message', (msg)=>{
                setMessages((prevMessage) => {
                    return [...prevMessage, msg]
                })
            })
            inputMessageElement.value = ""
        }
    }
    const handleChange = () => {
        let inputMessage = document.querySelector("body > div > section > div.message-box > input").value
        console.log({ inputMessage })
    }
    const handleKeyPress = (event) => {
        if (event?.key === "Enter") {
            handleSendMessage(event)
        }
    }
    return (
        <>
            <div className="message-box">
                <input type="text" placeholder="Message Here..." className="message-box-input" onChange={handleChange} onKeyDown={handleKeyPress} />
                <button className=".btn" onClick={handleSendMessage}>
                    Send Now
                </button>
            </div>
        </>
    )
}