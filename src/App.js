import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';


function App() {

  const {onToogleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  },[])


  return (
    <div className="App">
      
      <button onClick={onToogleButton}>Toggle</button>
    </div>
  );
}

export default App;
