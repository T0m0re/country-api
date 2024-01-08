import View from "../view.js";

class Click extends View {
  _parent = document.querySelector(".countries-container");
  _border = document.querySelector(".country-page");
  addCountryClickHandle(handler) {
    this._parent.addEventListener("click", function (e) {
      const each = e.target.closest(".country");
      if (!each) return;

      const query = each.dataset.name;

      return handler(query);
    });
  }

  addBorderClickHanler(handler) {
    this._border.addEventListener("click", function (e) {
      const country = e.target.closest(".border");
      if (!country) return;
      const countryName = country.dataset.name;

      return handler(countryName);
    });
  }
}

export default new Click();
