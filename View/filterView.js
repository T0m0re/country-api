import View from "../view.js";

class FilterView extends View {
  _parentElement = document.querySelector(".countries-container");
  _parentEl = document.querySelector(".drop-down");

  _toggleAction() {
    const dropDown = document.querySelector(".drop-down-menu");
    const listMenu = document.querySelector(".list-menu");

    dropDown.addEventListener("click", function () {
      listMenu.classList.toggle("display-hidden");
    });
  }

  //   _getQuery(handler) {
  //     this._parentEl.addEventListener("click", function (e) {
  //       const items = e.target.closest(".list-items");
  //       if (!items) return;
  //       const query = items.textContent;

  //       return handler(query);
  //     });
  //   }
  _addHandlerClick(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const items = e.target.closest(".list-items");
      if (!items) return;
      const query = items.textContent;

      return handler(query);
    });
  }

  //   _addHandlerClick(handler) {
  //     this._parentEl.addEventListener("click", function (e) {
  //       const items = e.target.closest(".list-items");
  //       if (!items) return;

  //     });
  //   }
}

export default new FilterView();
