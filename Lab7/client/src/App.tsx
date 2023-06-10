import Header from './components/header'
import Intro from './components/intro'
import Footer from './components/footer'
import Portfolio from './components/portfolio'
import Stockdetails from './components/stock_details'
import Database from './components/database'
import './styles/style.css'

function App() {

  return (
    <div className="App">
      <Header />
      <Intro />
      <Portfolio />
      <Stockdetails />
      <Database />
      <Footer />
    </div>
  )
}

export default App


