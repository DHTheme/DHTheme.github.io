import style from './styles/App.module.sass'
import imageLogo from './images/LogoDHTheme.svg'

import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { Colaborations } from './pages/Colaborations'
import { Applications } from './pages/Applications'

function App() {

  return (
    <div className={style.App}>
      <header className={style.App_header}>
        <img src={imageLogo} alt="logo" id={style.logo} />
        <nav id={style.menu}>
            <a href="./index">INÍCIO</a><br/>
            <a href="./details">DETALHES</a><br/>
            <a href="./applications">APLICAÇÕES</a><br/>
            <a href="./colaborations">COLABORAÇÕES</a><br/>
        </nav>
      </header>

      <section>
        <Home />
      </section>
    </div>
  )
}

export default App
