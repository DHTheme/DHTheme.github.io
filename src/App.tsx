import style from './App.module.sass'
import { Home } from './pages/Home'

function App() {

  return (
    <div className={style.App}>
      <header className={style.App_header}>
        Menu
      </header>
      <section>
        <Home />
      </section>
    </div>
  )
}

export default App
