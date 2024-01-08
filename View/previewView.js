import View from "../view.js";

class previewView extends View {
  // _parentElement = "";

  _generateMarkUp() {
    return `
    <div data-name = "${this._data.name}" class="country">
    <div class="country-img">
      <img src="${this._data.flag}" alt="country-flag" />
    </div>
    <div class="country-details">
      <h4 class="country-name">${this._data.name}</h4>
      <p id="Population">Population: <span>${numeral(
        +this._data.population
      ).format("0,0")}</span></p>
      <p id="region">Region: <span>${this._data.region}</span></p>
      <p id="capital">Capital: <span>${this._data.capital}</span></p>
    </div>
  </div>
    `;
  }
}

export default new previewView();
