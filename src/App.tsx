import React from 'react';
import './App.css';
import {Template} from "./Components/Template";
import {Route} from "react-router-dom";

function App() {
  return (
      <Route path={'/'} element={<Template>
          <div>123</div>
      </Template>}/>
  );
}

export default App;
