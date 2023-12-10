import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";
import Items from "../components/Items";
import { useState } from "react";

const calculationTable = {
  homens: {
    carne: 2,
    paoDeAlho: 1,
    refrigerante: 1,
    agua: 1,
    carvao: 1,
    sal: 1,
    gelo: 1,
  },
  mulheres: {
    carne: 1,
    paoDeAlho: 1,
    refrigerante: 1,
    agua: 1,
    carvao: 1,
    sal: 1,
    gelo: 1,
  },
  criancas: {
    carne: 0.5,
    paoDeAlho: 0.5,
    refrigerante: 1,
    agua: 1,
    carvao: 1,
    sal: 1,
    gelo: 1,
  },
};

export const Body = () => {
  const defaultConsumableItems = {
    carne: 0,
    paoDeAlho: 0,
    refrigerante: 0,
    agua: 0,
    carvao: 0,
    sal: 0,
    gelo: 0,
  };
  const [numHomens, setNumHomens] = useState(0);
  const [numMulheres, setNumMulheres] = useState(0);
  const [numCriancas, setNumCriancas] = useState(0);
  const [consumableItems, setConsumableItems] = useState(
    defaultConsumableItems
  );
  const clear = () => {
    setNumHomens(0);
    setNumMulheres(0);
    setNumCriancas(0);
    setConsumableItems(defaultConsumableItems);
  };
  const calculation = () => {
    const numPessoas = numHomens + numMulheres + numCriancas;
    const numCarne =
      numHomens * calculationTable.homens.carne +
      numMulheres * calculationTable.mulheres.carne +
      numCriancas * calculationTable.criancas.carne;

    const numPaoDeAlho =
      numHomens * calculationTable.homens.paoDeAlho +
      numMulheres * calculationTable.mulheres.paoDeAlho +
      numCriancas * calculationTable.criancas.paoDeAlho;

    const numRefrigerante =
      numHomens * calculationTable.homens.refrigerante +
      numMulheres * calculationTable.mulheres.refrigerante +
      numCriancas * calculationTable.criancas.refrigerante;

    const numAgua =
      numHomens * calculationTable.homens.agua +
      numMulheres * calculationTable.mulheres.agua +
      numCriancas * calculationTable.criancas.agua;

    const numCarvao =
      numHomens * calculationTable.homens.carvao +
      numMulheres * calculationTable.mulheres.carvao +
      numCriancas * calculationTable.criancas.carvao;

    const numSal =
      numHomens * calculationTable.homens.sal +
      numMulheres * calculationTable.mulheres.sal +
      numCriancas * calculationTable.criancas.sal;

    const numGelo =
      numHomens * calculationTable.homens.gelo +
      numMulheres * calculationTable.mulheres.gelo +
      numCriancas * calculationTable.criancas.gelo;

    console.log(numCarne, numPessoas);
    setConsumableItems((prevState) => {
      return {
        ...prevState,
        carne: numCarne,
        paoDeAlho: numPaoDeAlho,
        refrigerante: numRefrigerante,
        agua: numAgua,
        carvao: numCarvao,
        sal: numSal,
        gelo: numGelo,
      };
    });
  };
  return (
    <div className="container">
      <div className="calculator">
        <Header
          title="Churrascômetro"
          subtitle="Precisa de uma ajudinha com o churrasco? :)"
          info="Quantas pessoas vão participar?"
        />
        <div className="container-fluid">
          <Card
            title="Homens"
            setInputValue={setNumHomens}
            inputValue={numHomens}
          />
          <Card
            title="Mulheres"
            setInputValue={setNumMulheres}
            inputValue={numMulheres}
          />
          <Card
            title="Crianças"
            setInputValue={setNumCriancas}
            inputValue={numCriancas}
          />
        </div>

        <div className="row">
          <Button textValue="Calcular" compute={calculation} />
          <Button textValue="Limpar" compute={clear} />
        </div>

        <div className="input-group-result">
          <div id="header-result">
            <p>ITEM</p>
            <p>QUANTIDADE</p>
          </div>
          <div className="results">
            <Items item="Carne" unit="kg" amount={consumableItems.carne} />
            <Items
              item="Pão de alho"
              unit="unidades"
              amount={consumableItems.paoDeAlho}
            />
            <Items
              item="Refrigerante"
              unit="garrafa de 2L"
              amount={consumableItems.refrigerante}
            />
            <Items
              item="Água"
              unit="garrafa de 2L"
              amount={consumableItems.agua}
            />
            <Items item="Carvão" unit="kg" amount={consumableItems.carvao} />
            <Items item="Sal" unit="kg" amount={consumableItems.sal} />
            <Items item="Gelo" unit="kg" amount={consumableItems.gelo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
