import { useState } from 'react';
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








function App() {

  

 
  return (
    <MainProvider>
      <Router>
        <Header />
          <Routes>
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
