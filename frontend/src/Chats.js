import React from 'react'
import './Chat.css'
import Chat from './Chat'
function Chats() {
    return (
        <div className="chats">
           <Chat 
                name="Manik"
                message="How are you!"
                timestamp="35 minutes ago"
                profilePic="https://i.pinimg.com/originals/2f/10/7e/2f107e3a798b94c33e358445603ea237.jpg"
           />
           <Chat 
                name="Nandini"
                message="whats up!"
                timestamp="05 minutes ago"
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGObh5ExcU4pljI_Kn7hJrujrFKc0dsqJaqFc7DkHG-6aCrIiMFg-wLiuyktlbkk_8fCY&usqp=CAU"
                />
           <Chat 
                name="Mukti"
                message="How are you!"
                timestamp="35 minutes ago"
                profilePic="https://fuzeimages.s3.ap-south-1.amazonaws.com/wp-content/uploads/2015/02/27024627/Kaisi-Yeh-Yaariyan-19.jpg"
           />
           <Chat 
                name="Dhruv"
                message="How are you!"
                timestamp="35 minutes ago"
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04DB5gyXhjXXYecCEQTxfU6Jm16YrdaVaKpbxgH7Z6sI6UUpTbFvTSYL5k4uchYIT_rU&usqp=CAU"
           />
           <Chat 
                name="Alia"
                message="How are you!"
                timestamp="35 minutes ago"
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMgm3NMUHwp2nMr4DhZoKgugtmdTvTwbazSiYTQxOzoDqxfepB-z-2REuIbW8xayp578&usqp=CAU"
           />
           <Chat 
                name="Kabir"
                message="How are you!"
                timestamp="35 minutes ago"
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TWM1RLG9EUWt8wwJhUmpxhTMdzNzr_NlXqXSG0eZAljmY-sB7Kb1198PYskBeH9B3nw&usqp=CAU"
           />
        </div>
    )
}

export default Chats
