import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from '../src/pages/Home';
import Introduction from '../src/pages/Introduction/index';

function App () {
    return (
      <Routes>          
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Introduction" element={<Introduction />} />          
      </Routes>
    );
}

export default App;
