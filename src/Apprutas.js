import React from 'react';
import { BrowserRouter, Route,Routes,Link } from 'react-router-dom';

import Cursos from './componentes/Cursos';
import './Apprutas.css';
import logo from './logo.svg';
import SobreNos from './componentes/SobreNos';
import Faleconnosco from './componentes/Faleconnosco';
import Modulouno from './componentes/Modulouno';
import Modulodos from './componentes/Modulodos';
import Modulotres from './componentes/Modulotres';
import Moduloquatro from './componentes/Moduloquatro';

import App from './App';
/*import Iniciouno from './Iniciouno';*/


function Apprutas() {
  return(
    <BrowserRouter basename='/react-dummytres'>
      <div>
        
           <header className="App-header">
            <l1><Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link></l1>
            
            <p className="App-header">Instituto NU </p>
            
            <ul>
             <l1 className="liuno"><Link to="/App"className="atres"style={{ textDecoration: 'none' }}>Inscrição </Link></l1> 
             <l1 className="liuno"><Link to="/componentes/Cursos"className="atres"style={{ textDecoration: 'none' }}> Cursos </Link></l1>
             <l1 className="liuno"><Link to="/componentes/SobreNos"className="atres"style={{ textDecoration: 'none' }}> Sobre nós </Link></l1>
			       <l1 className="liuno"><Link to="/componentes/Faleconnosco"className="atres"style={{ textDecoration: 'none' }}> Fale Conosco </Link></l1>
		        </ul>
            </header>
        
      </div>
    
      <Routes>
        <Route path="/App/react-dummytres"element={<App />}/>
        <Route path="/componentes/Cursos"element={<Cursos />}>
            <Route path="modulouno" element={<Modulouno />} />
            <Route path="modulodos" element={<Modulodos />} />
            <Route path="modulotres" element={<Modulotres />} />
            <Route path="moduloquatro" element={<Moduloquatro />} />
          </Route>
        <Route path="/componentes/SobreNos"element={<SobreNos />}/>
        <Route path="/componentes/Faleconnosco"element={<Faleconnosco />}/>
      </Routes>
    </BrowserRouter>
    );
  }

export default Apprutas;