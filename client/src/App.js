import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import List from './routes/List';
import Detail from './routes/Detail';
import WatchList from './routes/WatchList';
import Header from './components/Header';
import SearcMovie from './routes/SearcMovie';
import { MainProvider } from './context/MainState';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';








function App() {

  const [name,setName] = useState("")

  useEffect(() => {
    (
      async()=> {
              const response =   await fetch('http://localhost:8081/user', {
                            headers: {'Content-Type': 'application/json'},
                            credentials: 'include',
                        
                    });
                    
                    const content = await response.json();
  
                    
                    setName(content.name);
  
                  }
        )()
  
      });

 
  return (
    <MainProvider>
      <Router>
        <Header name={name} setName={setName}/>
          <Routes>
            <Route path="/" element={<Home name={name}/>} />
            <Route path="/login" element={<Login setName={setName}/>} />
            <Route path="/Register" element={<Register />} />
            <Route path="/list" element={<List />} />
            <Route path="/details/:id" element={<Detail />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/search" element={<SearcMovie />} />
            
        </Routes>
      </Router>

    </MainProvider>
  );
}

export default App;
