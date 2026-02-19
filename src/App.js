import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Main from './Main';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <Main />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
