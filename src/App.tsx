

import './global.css'
import style from "./app.module.css"
import { Header } from './components/Header'
import { Tip } from './components/Tip'
import { Letter } from './components/Letter'

import { Input } from './components/Input'
import { Button } from './components/Button'

function App() {

  function handleRestartGame(){
    alert("reiniciar o jogo")
  }

  return (
    <div className={style.container}>
      <main>
         <Header current={0} max={10} onRestart={handleRestartGame}/>
         <Tip tip="Um framework JavaScript para construir interfaces de usuário" />

          <div className={style.word} >
            <Letter value='R'/>
            <Letter value='e'/>  
            <Letter value='A'/>
            <Letter value='c'/>
            <Letter value='t'/>
          </div>

          <h4>Palpite</h4>

          <div className={style.guess}>
            <Input autoFocus  maxLength={1} placeholder='?'/>
            <Button title="Confirmar" />
          </div>
      </main>
    </div>
  )
}

export default App
