import previewView from "./previewView.js";
import View from "../view.js";

class CountryView extends View {
  _parentElement = document.querySelector(".countries-container");

  _generateMarkUp() {
    return this._data.map((result) => previewView.render(result, false)).join();
  }
}

export default new CountryView();
