export default class View {
  _data;

  render(data, render = true) {
    this._data = data;

    const markup = this._generateMarkUp();

    if (!render) return markup;

    this.clear();
    this._parentElement.insertAdjacentHTML(`afterbegin`, markup);
  }

  //   render(data, render = true) {
  //     if (!data || (Array.isArray(data) && data.length === 0))
  //       return this.renderError();
  //     this._data = data;
  //     const markup = this._generateMarkup();

  //     if (!render) return markup;
  //     this._clear();
  //     this._parentElement.insertAdjacentHTML(`afterbegin`, markup);
  //   }

  clear() {
    this._parentElement.innerHTML = "";
    if (this._parentEl) {
      this._parentEl.querySelector(".search-input").value = "";
    }
  }
}
