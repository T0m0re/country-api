import View from "../view.js";
// import numeral from "numeral";

class SearchView extends View {
  _parentEl = document.querySelector(".search-form");
  _parentElement = document.querySelector(".country-data");
  page = document.querySelector(".countries-container");
  filter = document.querySelector(".filter-section");
  countryPage = document.querySelector(".country-page");
  backButton = document.querySelector(".back");
  pagination = document.querySelector(".pagination");

  // getQuery() {
  //   const query = this._parentEl.querySelector(".search-input").value;
  //   return query;
  // }

  goBack() {
    // this keyword won injure me
    const page = document.querySelector(".countries-container");
    const filter = document.querySelector(".filter-section");
    const pagination = document.querySelector(".pagination");
    const countryPage = document.querySelector(".country-page");

    this.backButton.addEventListener("click", function () {
      page.classList.remove("display-hidden");
      filter.classList.remove("display-hidden");
      pagination.classList.remove("display-hidden");
      countryPage.classList.add("display-hidden");
      console.log(this);
    });
  }

  toggleView() {
    this.page.classList.add("display-hidden");
    this.filter.classList.add("display-hidden");
    this.pagination.classList.add("display-hidden");
    this.countryPage.classList.remove("display-hidden");
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      const query = this.querySelector(".search-input").value;

      handler(query);
    });
  }

  _generateMarkUp() {
    this._data;
    const balues = Object.values(this._data.nativeName);
    const nativeName = [];
    balues?.map((each) => {
      for (const [key, value] of Object.entries(each)) {
        if (key === "common") nativeName.push(value);
      }
    });

    const currencies = Object.values(this._data.currencies)[0];
    const languages = Object.values(this._data.languages);

    return `
          <div>
            <img src="${this._data.flag}" alt="country-flag" />
          </div>
          <div class="info">
            <h2 class="country-name">${this._data.countryName}</h2>
            <div class="data">
              <div class="data-1">
                <p>Native Name: ${nativeName.map((name) => {
                  return `<span>${name}<span>`;
                })}</p>
                <p>Population: <span>${numeral(+this._data.population).format(
                  "0,0"
                )}</span></p>
                <p>Region: <span>${this._data.region}</span></p>
                <p>Sub Region: <span>${this._data.subRegion}</span></p>
                <p>Capital: <span>${this._data.capital}</span></p>
              </div>
              <div class="data-2">
                <p>Top Level Domain: ${this._data.topLevelDomain.map((name) => {
                  return `<span>${name}<span>`;
                })}</p>
                <p>Currencies: <span>${currencies.name}</span></p>
                <p>Languages: ${languages.join(", ")}</p>
              </div>
            </div>
            <div class="country-border">
              <p>Border Countries</p>${this._data.borderCountries.map(
                (name) => {
                  return `<button class = "border" data-name = "${name}">${name}</button>`;
                }
              )}
              
            </div>
          </div>`;
  }
}

export default new SearchView();
