// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import {useEffect, useState} from "react";

const Card = ({ title, content}) => {
    const [count, setCount] = useState(0)
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        console.log(`${title} has been liked: ${hasLiked}`)
    },[hasLiked]);

    return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title} <br/> {count || null}</h2>
      <p>{content}</p>
        <button onClick={() => setHasLiked(!hasLiked)}>
            {hasLiked ? '😍🤍' : '❤️'}
        </button>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" content="Action" rating={5} isCool={true}  />
      <Card title="Star Trek" content="Adventure"/>
      <Card title="Lion King" content="Cartoon"/>

    </div>
  )
}
export default App
