import './App.css';
import About from './Components/About'
import Content from './Components/Content'
import Description from './Components/description'
import Interests from './Components/Interests'
import Footer from './Components/footer'
function App() {
  return (
        <div className='App'>
          <span className='bordered_div'>
          <Content />
          <About />
          <Description/>
          <Interests/>
          <Footer/>
          </span>
        </div>  
  )
}

export default App;
