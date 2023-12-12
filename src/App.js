import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PlayerPlaylist from './components/PlayerPlaylist';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <Header />
    
    <div className='player-container'>

      <div className='side-bar'>
      <Sidebar />
      </div>
    
    
      <div className='player-playlist'>
      <PlayerPlaylist />
      </div>

    </div>
    <Footer />
    </>
  );
}

export default App;
