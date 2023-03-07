import React, { Component } from "react";
import styled from "styled-components";
import Alface from "./Imagens/alface.png";
import Laranja from "./Imagens/laranja.png";
import Cereja from "./Imagens/cereja.png";
import Cenoura from "./Imagens/cenoura.png";
import Manga from "./Imagens/manga.png";
import Limao from "./Imagens/limao.png";
import Tomate from "./Imagens/tomate.png";
import Beterraba from "./Imagens/beterraba.png";

const BoxImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: solid;
  background-color: pink;
  width: 20vw;
  height: 30vh;
  margin: 10px;
`;
const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: solid;
  height: 100vh;
  background-color: orange;
  img {
    width: 36vw;
  }
`;

export default class App extends Component {
  state = {
    produtosHorti: [
      {
        imagem: Alface
      },
      {
        imagem: Laranja
      },
      {
        imagem: Cenoura
      },
      {
        imagem: Cereja
      },
      {
        imagem: Manga
      },
      {
        imagem: Limao
      },
      {
        imagem: Tomate
      },
      {
        imagem: Beterraba
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>Horti-fruti</h1>
        <p>Venha fazer suas compras online</p>
        <Container>
          {this.state.produtosHorti.map((item) => (
            <BoxImages>
              <img src={item.imagem} alt="" />
            </BoxImages>
          ))}
        </Container>
      </div>
    );
  }
}
