import React from 'react'
import Card from './components/Card'

const Instructions = () => {
  return (
    <Card title={"Instructions"}
        para={`Please read the instructions carefully!!`}
        cardList={["You have 10 seconds to read the word.", "Imagine you are looking yourself in a mirror.", "Think then accept or reject a card", "As soon as you reject 15 cards, the game will be over", "If you do not choose, the card will automatically be accepted"]}
        abutton={"Lets Play!"}
        whereTo={"/play/go"}
    ></Card>
  )
}

export default Instructions
