import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Churrascômetro</h1>
      <div class="calculator">
        <h3>
          Precisa de uma ajudinha com o churrasco? :)
          <br></br>
          Quantas pessoas vão participar?
        </h3>
        <div class="row-first">
          <div class="input-group">
            <label for="men">Homens</label>
            <input type="number" id="men" value="0" class="input-valid" />
            <div class="button-group">
              <button class="input-group__button--small">-</button>
              <button class="input-group__button--small">+</button>
            </div>
          </div>
          <div class="input-group">
            <label for="women">Mulheres</label>
            <input type="number" id="women" value="0" class="input-valid" />
            <div class="button-group">
              <button class="input-group__button--small">-</button>
              <button class="input-group__button--small">+</button>
            </div>
          </div>
          <div class="input-group">
            <label for="kid">Crianças</label>
            <input type="number" id="kid" value="0" class="input-valid" />
            <div class="button-group">
              <button class="input-group__button--small">-</button>
              <button class="input-group__button--small">+</button>
            </div>
          </div>
        </div>
        <div class="row">
          <div>
            <p id="invalid-input">Por favor, insira somente números!</p>
            <p id="no-input" style={{ visibility: "hidden" }}>
              Por favor, selecione a quantidade de pessoas!
            </p>
            <div>
              <div class="result-total-guest">
                <p>Confira a lista para o seu churrasco!</p>
                <p id="total-guest">0 convidado</p>
                <span class="guest-list">0 homem</span>
                <span class="guest-list">0 mulheres</span>
                <span class="guest-list">0 crianças</span>
              </div>
              <div class="input-group-result">
                <div id="header-result">
                  <p>ITEM</p>
                  <p>QUANTIDADE</p>
                </div>
                <ul class="results">
                  <li>
                    <strong>Carne</strong>
                    <span>0.0 kg</span>
                  </li>
                  <li>
                    <strong>Pão de Alho</strong>
                    <span>0 unidades</span>
                  </li>
                  <li>
                    <strong>Refrigerante</strong>
                    <span>1 garrafa de 2 L</span>
                  </li>
                  <li>
                    <strong>Água</strong>
                    <span>0 garrafa de 1 L</span>
                  </li>
                  <li>
                    <strong>Carvão</strong>
                    <span>0 kg</span>
                  </li>
                  <li>
                    <strong>Sal</strong>
                    <span>0.00 kg</span>
                  </li>
                  <li>
                    <strong>Gelo</strong>
                    <span>0.0 kg</span>
                  </li>
                </ul>
              </div>
            </div>
            <a href="/" className="default-button">
              Calcular
            </a>
          </div>
        </div>
      </div>
      <div class="theme-container">
        <label id="label-theme-text" for="input-theme">
          Tema Escuro
        </label>
        <label class="switch">
          <input type="checkbox" id="input-theme" checked="checked" />
          <span class="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default App;
