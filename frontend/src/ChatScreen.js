import React,{useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import './ChatScreen.css'

function ChatScreen() {
    const[input,setInput] = useState('')
    const [messages,setMessages] = useState([
        {
            name:'Manik',
            image:'https://i.pinimg.com/originals/2f/10/7e/2f107e3a798b94c33e358445603ea237.jpg',
            message:'whats up!!'
        },
        {
            name:'Manik',
            image:'https://i.pinimg.com/originals/2f/10/7e/2f107e3a798b94c33e358445603ea237.jpg',
            message:'how are you??'
        },
        {
            message:'i am good...'
        }
    ])

    const handleSend= (e)=>{
            e.preventDefault()
            setMessages([...messages,{message:input}])
            setInput('')
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen_timestamp">YOU MATCHED WITH PERSON ON 06/04/99</p>
            {messages.map(message=>(
            
                    message.name ?(
                        <div className="chatScreen_message">
                        <Avatar 
                        className="chatScreen_image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen_text">{message.message}</p>
                    </div>  
                    ) :(
                        <div className="chatScreen_message">
                            <p className="chatScreen_textUser">{message.message}</p>
                    </div>
                    )
                   
             ))}
             
                 <form className="chatScreen_input">
                     <input className="chatScreen_inputField"  type="text" value={input} onChange={e=> setInput(e.target.value)} placeholder="Type a message..." />
                     <button className="chatScreen_inputButton" type="submit" onClick={handleSend}>SEND</button>
                 </form>
             
        </div>
    )
}

export default ChatScreen
