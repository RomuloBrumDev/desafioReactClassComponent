/ Crie uma class component 


// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.

// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)


**Bônus
// Adicione uma imagem da sua fruta favorita via import

import React, {Component} from 'React';

class myInfo extends Component {

    nome:'Rômulo Brum',
    idade: 42;
    comida favorita: 'Comida Japonesa'
    músicas favoritas: ['One More Time - Daft Punk', 'A Lenda - Sandy & Júnior', 'Pop - N*SYNC']

  render () {
    return(
        <div> 
          <h1>Rômulo Brum</h1>
          <h2>43</h2>
          <h3>Comida Japonesa - Todas</h3>
          <ul>
            <li>One More Time - Daft Punk</li>
            <li>A Lenda - Sandy & Júnior</li>
            <li>Pop - N*Sync</li>
          </ul>
        </div>
    );
  }  
}

export default myInfo;