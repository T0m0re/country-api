export const state = {
  load: {
    countries: [],
    filteredResults: [],
    page: 1,
    resultPerPage: 24,
  },
  search: {
    query: "",
    results: {},
  },
};

const createCountryObject = function (country) {
  const countryResult = country[0];

  return {
    countryName: countryResult.name.common,
    flag: countryResult.flags.svg,
    population: countryResult.population,
    region: countryResult.region,
    capital: countryResult.capital,
    code: countryResult.cca2,
    subRegion: countryResult.subregion,
    languages: countryResult.languages,
    topLevelDomain: countryResult.tld,
    borderCountries: countryResult.borders,
    currencies: countryResult.currencies,
    nativeName: countryResult.name.nativeName,
  };
};

export async function loadCountries() {
  try {
    const data = await fetch("https://restcountries.com/v3.1/all");
    if (!data.ok) throw new Error(`data error`);
    const count = await data.json();
    state.load.countries = count.map((each) => {
      return {
        flag: each.flags.svg,
        name: each.name.common,
        population: each.population,
        region: each.region,
        capital: each.capital,
        code: each.cca2,
      };
    });
  } catch (err) {
    console.error(err);
  }
}

export async function searchCountries(query) {
  try {
    const data = await fetch(
      `https://restcountries.com/v3.1/name/${query}?fullText=true`
    );
    if (!data.ok) throw new Error(`country not found`);
    const country = await data.json();
    state.results = createCountryObject(country);

    return state.results;
  } catch (err) {
    console.error(err.message);
  }
}

export async function loadBorderCountry(query) {
  try {
    const data = await fetch(`https://restcountries.com/v3.1/alpha/${query}`);
    if (!data.ok) throw new Error(`country not found`);
    const country = await data.json();
    state.results = createCountryObject(country);

    return state.results;
  } catch (err) {
    console.error(err.message);
  }
}

export async function filterByRegion(query) {
  try {
    const data = await fetch(`https://restcountries.com/v3.1/region/${query}`);
    if (!data) throw new Error(`region not found`);
    const country = await data.json();
    state.load.filteredResults = country.map((each) => {
      return {
        flag: each.flags.svg,
        name: each.name.common,
        population: each.population,
        region: each.region,
        capital: each.capital,
        code: each.cca2,
      };
    });
  } catch (err) {
    console.error(err);
  }
}

// export const getSearchPerPage = function (
//   page = state.load.page,
//   filter = false
// ) {
//   state.load.page = page;
//   const start = (page - 1) * state.load.resultPerPage;
//   const end = page * state.load.resultPerPage;

//   if (!filter) {
//     return state.load.countries.slice(start, end);
//   } else {
//     return state.load.filteredResults.slice(start, end);
//   }
// };
