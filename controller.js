import * as model from "./modal.js";
// import View from "./view.js";
import SearchView from "./View/Searchview.js";
import countryView from "./View/countryView.js";
import pagination from "./View/paginationView.js";
import filterView from "./View/filterView.js";
import clickCountry from "./View/clickCountry.js";

const toggleButton = document.querySelector(".toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

const loadCountries = async function () {
  try {
    //load countries
    await model.loadCountries();

    //   Render Countries
    // countryView.render(model.state.countries);
    countryView.render(model.state.load.countries);

    // 4) Render initial pagination

    // pagination.render(model.state.load);
  } catch (err) {
    console.error(err);
  }
};

// Control Pagination
// const controlPagination = function (goToPage) {
//   // 3) Render NEW results

//   countryView.render(model.getSearchPerPage(goToPage));
//   console.log(goToPage);

//   //4 render NEW  pagination
//   pagination.render(model.state.load);
// };

// // Control Pagination Filter
// const controlPaginationFiltered = function (goToPage) {
//   // 3) Render NEW results

//   countryView.render(model.getSearchPerPage(goToPage, true));
//   console.log(goToPage);

//   //4 render NEW  pagination
//   pagination.render(model.state.load);
// };

const getSearchResult = async function (query) {
  try {
    // 1) Get search query from view
    // const query = SearchView.getQuery();
    // if (!query) return;
    // console.log(query);

    //2) load search result from modal with query

    await model.searchCountries(query);

    console.log(query);

    // 3) render search result
    SearchView.toggleView();

    SearchView.render(model.state.results);
  } catch (err) {
    console.log(err);
  }
};

const getBorderCountry = async function (query) {
  try {
    await model.loadBorderCountry(query);
    SearchView.render(model.state.results);
  } catch (err) {
    console.error(err);
  }
};

const filterSearch = async function (query) {
  try {
    // 1) Get Saerch query from view
    // const query = filterView._getQuery();
    // if (!query) return;
    // console.log(query);

    // 2) Load filter results from model with query

    await model.filterByRegion(query);

    // 3) Render filtered region
    countryView.render(model.state.load.filteredResults);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  loadCountries();
  filterView._toggleAction();
  filterView._addHandlerClick(filterSearch);
  clickCountry.addCountryClickHandle(getSearchResult);
  clickCountry.addBorderClickHanler(getBorderCountry);
  // pagination.addHandlerClick(controlPagination);
  // pagination.addHandlerClick(controlPaginationFiltered);
  SearchView.addHandlerSearch(getSearchResult);

  SearchView.goBack();
};

init();
// clickCountry.addBorderClickHanler(getSearchResult);
