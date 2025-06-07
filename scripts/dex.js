import { mons } from "../data/mons.js";

let dexHTML = ``;
let typeHTML = ``;
let weaknessHTML = ``;
let moveHTML = ``;
let abilityHTML = ``;
let evoHTML = ``;
mons.forEach((mon) => {
  dexHTML += `
  <h2>${mon.Name} ${mon.id}</h2>
  <div class="container">
    <div>
      <h3>Normale</h3>
      <div class="container-sprite">
        <img src=${mon.Icons.normal}>
      </div>
    </div>
    <div>
      <h3>Shiny</h3>
      <div class="container-sprite">
        <img src=${mon.Icons.shiny}>
      </div>
    </div>
    <div>
      <h3>Tipo:</h3>
      <ul class="list types">
        ${mon.Types.forEach((type) => {
          typeHTML += `
          <li>${type}</li>
          `;
        })}
      </ul>
      <h3>Debolezze:</h3>
      <ul class="list">
        <li>${mon.Weaknesses[0]}</li>
        <li>${mon.Weaknesses[1]}</li>
        <li>${mon.Weaknesses[2]}</li>
        <li>${mon.Weaknesses[3]}</li>
      </ul>
      <h3>Peso & Altezza:</h3>
      <ul class="list">
        <li>${mon.Weight}</li>
        <li>${mon.Height}</li>
      </ul>
    </div>
    <div>
      <h2>Mosse:</h2>
      <ul class="move-list">
        <li>${mon.Moves[0]}</li>
        <li>${mon.Moves[1]}</li>
        <li>${mon.Moves[2]}</li>
        <li>${mon.Moves[3]}</li>
        <li>${mon.Moves[4]}</li>
        <li>${mon.Moves[5]}</li>
        <li>${mon.Moves[6]}</li>
        <li>${mon.Moves[7]}</li>
        <li>${mon.Moves[8]}</li>
        <li>${mon.Moves[9]}</li>
        <li>${mon.Moves[10]}</li>
        <li>${mon.Moves[11]}</li>
        <li>${mon.Moves[12]}</li>
        <li>${mon.Moves[13]}</li>
        <li>${mon.Moves[14]}</li>
        <li>${mon.Moves[15]}</li>
        <li>${mon.Moves[16]}</li>
        <li>${mon.Moves[17]}</li>
        <li>${mon.Moves[18]}</li>
        <li>${mon.Moves[19]}</li>
      </ul>
    </div>
    <div>
      <h2>Abilità:</h2>
      <ul class="list">
        <li>${mon.Abilities[0]}</li>
        <li>${mon.Abilities[1]}</li>
      </ul>
    </div>
    <div class="evolution-chain-container">
      <div class="evolution-chain">
        <img src=${mon.Evolution[0]}>
        &rarr;
        <img src=${mon.Evolution[1]}>
        &rarr;
        <img src=${mon.Evolution[2]}>
      </div>
    </div>
  </div>
  `;
});

document.querySelector(`.mons`).innerHTML = dexHTML;
document.querySelector(`.types`).innerHTML = typeHTML;