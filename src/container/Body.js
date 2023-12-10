import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";
import Items from "../components/Items";
import { useState } from "react";

const calculationTable = {
  duracao: 5,

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
  const [numHomens, setNumHomens] = useState(0);
  const [numMulheres, setNumMulheres] = useState(0);
  const [numCriancas, setNumCriancas] = useState(0);
  const [consumableItems, setConsumableItems] = useState({
    carne: 0,
    paoDeAlho: 0,
    refrigerante: 0,
    agua: 0,
    carvao: 0,
    sal: 0,
    gelo: 0,
  });

  const calculation = () => {
    const numPessoas = numHomens + numMulheres + numCriancas;
    const numCarne =
      (numHomens * calculationTable.homens.carne +
        numMulheres * calculationTable.mulheres.carne +
        numCriancas * calculationTable.criancas.carne) *
      calculationTable.duracao;
    console.log(numCarne, numPessoas);
    setConsumableItems((prevState) => {
      return {
        ...prevState,
        carne: numCarne,
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
        </div>

        <div className="input-group-result">
          <div className="results">
            <Items
              item="Carne"
              amount="0.0kg"
              consumableItems={consumableItems}
            />
          </div>
        </div>
        <div className="row">
          <Button textValue="Novo cálculo" compute={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Body;
