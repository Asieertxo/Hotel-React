import React from 'react';
import ReactDOM from 'react-dom';
import "./components/Base.scss";
import "./components/Variables.scss";

import Navegation from './components/Navegation/Navegation';
import Title from './components/Title/Title';
import Reservation from './components/Reservation/Reservation';
import Arrows from './components/Arrows/Arrows';

ReactDOM.render(
  <>
    <header className="mainheader">
      <Navegation />
      <Title />
      <Reservation />
      <Arrows />

      
    </header>







    <div>
      <a>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</a>
    </div>
  </>,
  document.getElementById('root')
);
