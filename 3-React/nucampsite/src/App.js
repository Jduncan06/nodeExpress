
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';


function App() {
  return (
    <div className="App">
      <Header/> 
      <CampsitesDirectoryPage/>
      <Footer/>
    </div>
  );
}

export default App;
