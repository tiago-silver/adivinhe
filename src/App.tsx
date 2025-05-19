import { useState, useEffect } from 'react'

import './global.css'
import style from "./app.module.css"
import { Header } from './components/Header'
import { Tip } from './components/Tip'
import { Letter } from './components/Letter'

import { Input } from './components/Input'
import { Button } from './components/Button'
import { LettersUsed, type LettersUsedProps } from './components/LettersUsed'

import { WORDS, type Challenge } from './utils/words'

function App() {
  const [score, setScore] = useState(0)
  
  // guardar a letra 
  const [letter, setLetter] = useState("")
  const [challenge, setChallenge] = useState<Challenge | null>(null)

  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([])

  const ATTEMPTS_MARGIN = 5


  function handleRestartGame(){
    const isConfirmed = window.confirm("Deseja realmente reiniciar o jogo?")

    if(isConfirmed){
      startGame()
    }
  }


  function handleConfirm(){
    if(!challenge){
      return
    }

    if(!letter.trim()){
      alert("Digite uma letra")
      return
    }

    const value = letter.toUpperCase()

    const exist = lettersUsed.find((used)=> used.value.toUpperCase() === value)

    if(exist){
      setLetter("")
      alert(`Você já usou a letra ${value}!`)
      return
    }

    const hits = challenge.word.toUpperCase().split("").filter((char) => char === value).length

    const correct = hits > 0
    const currentScore = score + hits

    setLettersUsed((prevState) => [...prevState,{value, correct}])
    setScore(currentScore)
    setLetter("")
    
  }

  function startGame(){
    const index = Math.floor(Math.random()* WORDS.length)

    const randomWord = WORDS[index]
    setChallenge(randomWord)

    setScore(0)
    setLetter("")
    setLettersUsed([])
  }

  function endGame(message: string){
    alert(message)
    startGame()
  }


  useEffect(() => {
    startGame()
  }, [])

  useEffect(() => {
    if(!challenge){
      return
    }

    if(score === challenge.word.length){
      setTimeout(()=>{
        return endGame("Parabéns, você descobriu a palavra!")

      }, 200)

    }
    const attemptsLimit = challenge.word.length + ATTEMPTS_MARGIN

    if(lettersUsed.length === attemptsLimit){
      return endGame(`Infelizmente você atingiu o limite de tentativas! A palavra era ${challenge.word}`)

    }

  }, [score, lettersUsed.length])

  if(!challenge) {
    return 
  }

  return (
    <div className={style.container}>
      <main>
         <Header current={lettersUsed.length} max={challenge.word.length + ATTEMPTS_MARGIN} onRestart={handleRestartGame}/>
         <Tip tip={challenge.tip} />

          <div className={style.word} >

            {
              challenge.word.split("").map((letter, index) => {

                const letterUsed = lettersUsed.find((used)=> used.value.toUpperCase() === letter.toUpperCase())

                console.log(letterUsed)
                return <Letter key={index} value={letterUsed?.value} color={letterUsed?.correct ? "correct" : "default"} />
              })
            }
            
           
          </div>

          <h4>Palpite</h4>

          <div className={style.guess}>
            <Input autoFocus value={letter} maxLength={1} placeholder='?' onChange={(e)=> setLetter(e.target.value)}/>
            <Button title="Confirmar" onClick={handleConfirm} />
          </div>

          <LettersUsed data= {lettersUsed} />
      </main>
    </div>
  )
}

export default App
