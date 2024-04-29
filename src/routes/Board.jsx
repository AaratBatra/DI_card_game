import React, { useEffect, useState } from "react";
import Playcard from "./components/Playcard";
import cards from "../cards";
import arrayShuffle from "array-shuffle";
import { useNavigate } from "react-router-dom";
/*
  { category: 1, class: "a", title: "organized"y },
  { category: 1, class: "b", title: "controlled" },
  { category: 1, class: "c", title: "perfactionist"y },
  { category: 1, class: "d", title: "planner"y },
  { category: 1, class: "e", title: "neat and orderly"y },
  { category: 1, class: "f", title: "careful"y },
  { category: 1, class: "g", title: "structured"y },
  { category: 1, class: "h", title: "detail oriented"y },
  { category: 1, class: "i", title: "implementer"y },
  { category: 1, class: "j", title: "self disciplined"y },
*/
const Board = () => {
  const [mycards, setCards] = useState(cards);
  const [accepted, setAccepted] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [playing, setIsPlaying] = useState(true);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setCards(arrayShuffle(cards));
  }, []);
  let currCard = mycards[currentCardIndex];

  useEffect(()=>{
    currCard = mycards[currentCardIndex];
  },[currentCardIndex]);

  useEffect(()=>{
    localStorage.setItem("resData", JSON.stringify(accepted))
  },[accepted])

  const handleAccept = () => {
    setAccepted([...accepted, mycards[currentCardIndex]]);
    if (accepted.length >= 24) {
       let remainingCards = mycards.slice(currentCardIndex);
       let x = new Promise((res)=>{
        setRejected(new Array(...rejected.concat(remainingCards)));
        res(1);
       });
       setIsPlaying((prev)=>!prev);
       gameOver();
    } else {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handleReject = async () => {
    setRejected([...rejected, mycards[currentCardIndex]]);
    if (rejected.length >= 15) {
      // Game over condition (15 rejections)
      let remainingCards = mycards.slice(currentCardIndex);
      let x = await new Promise((res)=>{
        setAccepted(new Array(...accepted.concat(remainingCards)));
        res(1);
      })
      setIsPlaying((prev)=>!prev);
      gameOver();
    } else {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const gameOver = () => {
    setTimeout(()=>{ console.log("here"); return navigate("/play/result") },5000)
  }
  
  return (
    <div id="myroot">
      <div className="absolute top-0 flex flex-col justify-center items-center backdrop-blur-sm rounded-md mt-2 ring-1 ring-slate-50 p-2">
        {
          playing ? (<><p className="text-3xl text-red-600 font-extrabold">{mycards.length - currentCardIndex} Cards Left</p>
          <h1 className="text-6xl font-extrabold text-white mx-auto">Are You?</h1></>) : (<h1 className="text-6xl font-extrabold text-sky-400 mx-auto">Game Over!</h1>)
        }
        
      </div>
      
      <br />
      
      {playing && (<Playcard card={currCard}></Playcard>)}
      <button
        type="button"
        style={{display: playing?"block":"none"}}
        onClick={()=>handleAccept()}
        className="w-32 h-32 absolute right-0 bottom-0 text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-8xl p-2.5 text-center inline-flex items-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800 dark:hover:bg-green-500"
      >
        <svg
          className="w-24 h-24 mx-auto my-auto"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
        </svg>
        <span className="sr-only">Accept</span>
      </button>
      <button
        type="button"
        onClick={()=>handleReject()}
        style={{display: playing?"block":"none"}}
        className="w-32 h-32 absolute left-0 bottom-0 text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-8xl p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500"
      >
        <svg
          className="w-24 h-24 mx-auto my-auto rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
        </svg>
        <span className="sr-only">Accept</span>
      </button>
    </div>
  );
};

export default Board;
