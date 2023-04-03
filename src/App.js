import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';


function App() {

  const {onToogleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  },[])


  return (
    <div className="App">
      <Header/>
      <button onClick={onToogleButton}>Toggle</button>
    </div>
  );
}

export default App;
