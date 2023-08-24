'use client'
import Image from 'next/image'
import MessageInput from './Components/MessageInput'
import Container from './Components/Container'
import Message from './Components/Message'
import React from 'react'

export default function Home() {
  const [messages, setMessages] = React.useState([])
  const messagesContainers = messages.map((message, messageIndex) => {
    return <Message key={messageIndex} message={message}></Message>
  })
  return (
    <>
      <Container>
        <section className='main-section'>
          {messagesContainers}
          <MessageInput setMessages={setMessages}></MessageInput>
        </section>
      </Container>
    </>
  )
}
