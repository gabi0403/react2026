import Header from './components/Header'
import Home from './pages/Home'
import './App.css'

function App() {
  const storeName = 'Casa Nativa'
  const storeDescription = 'Conheça nossa seleção inicial de produtos para casa, cozinha e decoração.'

  return (
    <>
      <Header name={storeName} />
      <Home description={storeDescription} />
    </>
  )
}

export default App
