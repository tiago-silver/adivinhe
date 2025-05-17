import { useState, useEffect } from 'react'

import './global.css'
import style from "./app.module.css"
import { Header } from './components/Header'
import { Tip } from './components/Tip'
import { Letter } from './components/Letter'

import { Input } from './components/Input'
import { Button } from './components/Button'
import { LettersUsed } from './components/LettersUsed'

import { WORDS, type Challenge } from './utils/words'

function App() {
  const [attempts, setAttempts] = useState(0)
  // guardar a letra 
  const [letter, setLetter] = useState("")
  const [challenge, setChallenge] = useState<Challenge | null>(null)

  function handleRestartGame(){
    alert("reiniciar o jogo")
  }
  function startGame(){
    const index = Math.floor(Math.random()* WORDS.length)

    const randomWord = WORDS[index]
    setChallenge(randomWord)

    setAttempts(0)
    setLetter("")
  }

  useEffect(() => {
    startGame()
  }, [])

  if(!challenge) {
    return 
  }

  return (
    <div className={style.container}>
      <main>
         <Header current={attempts} max={10} onRestart={handleRestartGame}/>
         <Tip tip="Um framework JavaScript para construir interfaces de usuário" />

          <div className={style.word} >

            {
              challenge.word.split("").map(()=> <Letter value=''/>)
            }
            
           
          </div>

          <h4>Palpite</h4>

          <div className={style.guess}>
            <Input autoFocus  maxLength={1} placeholder='?'/>
            <Button title="Confirmar" />
          </div>

          <LettersUsed />
      </main>
    </div>
  )
}

export default App
