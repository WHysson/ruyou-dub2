import React from 'react';
import './App.css';
import './fonts/stylesheet.css'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom';
import FormComponent from './components/formComponent/formComponent';
import PaletteComponent from './components/paletteComponent.jsx/paletteComponent';

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="content_wrapper">
          <div className="content_wrapper_form">
            <NavLink className="link" to="/form">Форма</NavLink>
            <NavLink className="link" to="/palette">Палитра</NavLink>
            <Route path='/form' render={() => <FormComponent/>}/>
            <Route path='/palette' render={() => <PaletteComponent/>}/>
           
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default App;
