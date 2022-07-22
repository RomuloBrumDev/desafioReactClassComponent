import React, { Component } from "react";

class myInfo extends Component {
  state = {
    nome: "Rômulo Brum",
    idade: 42,
    comidaFavorita: "Comida Japonesa",
    musicasFavoritas: [
      "One More Time - Daft Punk",
      "A Lenda - Sandy & Júnior",
      "Pop - N*SYNC"
    ]
  };
  render() {
    return (
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidaFavorita}</h3>
        <ul>
          <li>{this.state.musicasFavoritas[0]}</li>
          <li>{this.state.musicasFavoritas[1]}</li>
          <li>{this.state.musicasFavoritas[2]}</li>
        </ul>
      </div>
    );
  }
}

export default myInfo;
