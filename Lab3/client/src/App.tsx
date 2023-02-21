import Header from './components/header'
import Intro from './components/intro'
import Footer from './components/footer'
import TickerList from './components/tickerlist'
import Portfolio from './components/portfolio'
import Stockdetails from './components/stock_details'
import './styles/style.css'

function App() {

  return (
    <div className="App">
      <Header />
      <Intro />
      <Portfolio />
      <Stockdetails />
      <TickerList />
      <Footer />
    </div>
  )
}

export default App


