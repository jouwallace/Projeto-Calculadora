import "./styles.css";
import styled from "styled-components";
import { useState, useEffect } from "react";

//estilo para a estrutura da calculadora
const CalculadoraEstrutura = styled.div`
  border: solid black;
  background-image: url("https://www.bemcolar.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/a/papel-de-parede-adesivo-formula-matematica-geometria-calculo-infantil.jpg");
  width: 50vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  /*Aparelhos mobile de no maximo 500px de tela(Galaxy note20 usado como referência de tela)*/
  @media (max-width: 500px) {
    font-size: 12px;
    width: 60vw;
  }

  /*Aparelhos mobile de no maximo 430px de tela(Iphone15 usado como referência de tela)*/
  @media (max-width: 430px) {
    width: 60vw;
    font-size: 10px;
  }

  /*Aparelhos mobile de no maximo 390px de tela(Iphone12 usado como referência de tela)*/
  @media (max-width: 390px) {
    width: 60vw;
    font-size: 10px;
  }
`;

//estilo referente ao emblema: "calculadora"
const H1 = styled.h1`
  border: solid gray;
  border-radius: 10px;
  background-color: black;
  color: white;
  width: 46vw;
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 500px) {
    width: 50vw;
    height: 8vh;
  }

  @media (max-width: 430px) {
    width: 48vw;
    height: 8vh;
  }

  @media (max-width: 390px) {
    width: 48vw;
    height: 7vh;
  }
`;

//estilo para o painel onde será digitado os numeros que serão somados/divididos/diminuidos/multiplicados.
const SecaoDigitarNumeros = styled.section`
  border: solid gray;
  background-color: black;
  border-radius: 10px;
  width: 26vw;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 500px) {
    width: 34vw;
    height: 10vh;
  }
  @media (max-width: 430px) {
    width: 32vw;
  }
  @media (max-width: 390px) {
    width: 30vw;
  }
`;

//Estilo para os botoes
const Btn = styled.section`
  border: solid gray;
  background-color: black;
  border-radius: 10px;
  height: 6vh;
  width: 22vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 500px) {
    width: 28vw;
  }
  @media (max-width: 430px) {
    width: 26vw;
  }
`;

//botão para a soma
const SomaButton = styled.button`
  border-radius: 5px;
  height: 4vh;
  width: 4vw;
  font-size: 22px;
  background-color: red;

  @media (max-width: 390px) {
    font-size: 20px;
  }
`;

//botão para a subtração
const SubtracaoButton = styled.button`
  border-radius: 5px;
  height: 4vh;
  width: 4vw;
  font-size: 22px;
  background-color: blue;

  @media (max-width: 390px) {
    font-size: 20px;
  }
`;

//botão para a multiplicação
const MultiplicacaoButton = styled.button`
  border-radius: 5px;
  height: 4vh;
  width: 4vw;
  font-size: 36px;
  background-color: green;

  @media (max-width: 430px) {
    font-size: 22px;
  }
`;

//botão para a divisão
const DivisaoButton = styled.button`
  border-radius: 5px;
  height: 4vh;
  width: 4vw;
  font-size: 18px;
  background-color: yellow;
`;

//botão limpar o painel
const LimparButton = styled.button`
  border-radius: 5px;
  height: 4vh;
  width: 4vw;
  font-size: 18px;
  background-color: White;

  @media (max-width: 500px) {
    font-size: 12px;
  }
  @media (max-width: 430px) {
    font-size: 10px;
  }
  @media (max-width: 390px) {
    font-size: 9px;
  }
`;

//Estilo referente ao Painel que mostra o resultado da operação
const Resultado = styled.h2`
  border: solid gray;
  background-color: white;
  color: black;
  border-radius: 10px;
  font-size: 50px;
  height: 24vh;
  width: 28vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    width: 44vw;
  }
  @media (max-width: 430px) {
    width: 40vw;
  }
`;

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();

  const [segundoValor, setSegundoValor] = useState();

  const [resultado, setResultado] = useState(0);

  const [backgroundColor, setBackgroundColor] = useState("");

  const CapturarValor = (item) => {
    setPrimeiroValor(Number(item.target.value));
  };
  const CapturarSegundoValor = (item) => {
    setSegundoValor(Number(item.target.value));
  };

  //Obs: useEffect foi feito para mudar a cor do body ao clicar em uma operação,
  //mas nao consegui fazer algumas coisas que queria
  //então preferi deixar somente no painel de resultado a mudança.

  //useEffect(() => {
  //document.body.style.backgroundColor = backgroundColor;
  //}, [backgroundColor]);

  //Ao realizar as operações, mudará a cor referente a operação selecionada
  const Soma = () => {
    setResultado(primeiroValor + segundoValor);
    setBackgroundColor("red");
  };

  const Subtracao = () => {
    setResultado(primeiroValor - segundoValor);
    setBackgroundColor("blue");
  };

  const Multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
    setBackgroundColor("green");
  };

  const Divisao = () => {
    setResultado(primeiroValor / segundoValor);
    setBackgroundColor("yellow");
  };

  //O painel será limpo deixando também o painel com a sua cor padrão(branco)
  const Limpar = () => {
    setResultado("");
    setBackgroundColor("White");
  };

  return (
    <CalculadoraEstrutura>
      <H1>CALCULADORA</H1>

      <Resultado style={{ backgroundColor: backgroundColor }}>
        {resultado}
      </Resultado>

      <SecaoDigitarNumeros>
        <input type="number" onChange={CapturarValor} />
        <input type="number" onChange={CapturarSegundoValor} />
      </SecaoDigitarNumeros>

      <Btn>
        <SomaButton onClick={Soma}>+</SomaButton>
        <SubtracaoButton onClick={Subtracao}>-</SubtracaoButton>
        <MultiplicacaoButton onClick={Multiplicacao}>*</MultiplicacaoButton>
        <DivisaoButton onClick={Divisao}>/</DivisaoButton>
        <LimparButton onClick={Limpar}>AC</LimparButton>
      </Btn>
    </CalculadoraEstrutura>
  );
}
