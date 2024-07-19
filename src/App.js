import './App.css';
import Header from './Componants/Heder/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homebanner from './Componants/Home-banner/HomeBanner';
import Footer from './Componants/Foter/Footer';



function App() {
  return (
    <div className="App">
      <Header/>
      <Homebanner/>
      <Footer />
    </div>
  );
}

export default App;
