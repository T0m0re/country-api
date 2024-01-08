import View from "../view.js";

class Pagination extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener(`click`, function (e) {
      const btn = e.target.closest(`.btn`);
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkUp() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.countries.length / this._data.resultPerPage
    );

    console.log(
      this._data.page,
      numPages,
      this._data.countries.length,
      this._data.resultPerPage
    );
    // Math.ceil(this._data.filteredResults.length / this.resultPerPage);

    if (curPage === 1 && numPages > 1) {
      return this._btnNext(curPage);
    }

    // Last Page
    if (curPage === numPages && numPages > 1) {
      return this._btnPrevious(curPage);
    }

    // Other Page
    if (curPage < numPages) {
      return [this._btnPrevious(curPage), this._btnNext(curPage)];
    }
    return ``;
  }

  _btnNext(curPage) {
    return `
    <button data-goto = "${
      curPage + 1
    }" class="btn pagination__btn-next">page ${curPage + 1}</button>
    `;
  }

  _btnPrevious(curPage) {
    return `
    <button data-goto = "${
      curPage - 1
    }"class="btn pagination__btn-previous">page${curPage - 1}</button>
    `;
  }
}

export default new Pagination();
