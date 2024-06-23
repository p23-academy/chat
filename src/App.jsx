import './App.css'
import {useState} from "react";

function App() {
  const [messages, setMessages] = useState([])
  const [typing, setTyping] = useState("")
  const [user, setUser] = useState(true)

  const sendMessage = () => {
    setMessages(messages => [...messages, {
      user: user,
      text: typing,
      timestamp: Date.now(),
    }])
    setTyping("")
  }

  const changeUser = () => {
    setUser(user => !user)
  }

  return (
    <div className={"chat"}>
      <div className={"messages"}>
        {messages.map(((message, index) => (
          <div key={index} className={`message ${message.user ? "user" : "guest"}`}>
            {message.text}
          </div>
        )))}
      </div>
      <div className={"type"}>
        <textarea value={typing} onChange={(e) => setTyping(e.target.value)}/>
        <button className={user ? "user" : "guest"} onClick={() => changeUser()}>Promini</button>
        <button onClick={() => sendMessage()}>Pošalji</button>
      </div>
    </div>
  )
}

export default App
