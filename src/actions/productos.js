import Axios from "axios";
import Swal from "sweetalert2";

export const getAllProducts = products => ({
  type: "getAllProducts",
  payload: [...products],
});

export const startGetAllProducts = () => dispatch => {
  const prodURL = `https://zapateria-zitelli-api.herokuapp.com/productos`;
  // const devURL = `http://localhost:4000/productos/`;
  Axios.get(prodURL)
    .then(response => {
      if (response.data.error) {
        return Swal.fire("Error", response.data.error, "error");
      }
      dispatch(getAllProducts(response.data.products));
    })
    .catch(error => {
      console.error(error);
    });
};

export const getMostSoldProducts = products => ({
  type: "getMostSoldProducts",
  payload: [...products],
});

export const startGetMostSoldProducts = () => dispatch => {
  const prodURL = `https://zapateria-zitelli-api.herokuapp.com/productos/most-sold-products`;
  // const devURL = `http://localhost:4000/productos/most-sold-products`;
  Axios.get(prodURL)
    .then(response => {
      if (response.data.error) {
        return Swal.fire("Error", response.data.error, "error");
      }
      dispatch(getMostSoldProducts(response.data.products));
    })
    .catch(error => {
      console.error(error);
    });
};

export const getMostSoldBrands = brands => ({
  type: "getMostSoldBrands",
  payload: [...brands],
});

export const startGetMostSoldBrands = () => dispatch => {
  const prodURL = `https://zapateria-zitelli-api.herokuapp.com/productos/most-sold-brands`;
  // const devURL = `http://localhost:4000/productos/most-sold-brands`;
  Axios.get(prodURL)
    .then(response => {
      if (response.data.error) {
        return Swal.fire("Error", response.data.error, "error");
      }
      dispatch(getMostSoldBrands(response.data.brands));
    })
    .catch(error => {
      console.error(error);
    });
};

export const getMostSoldCategories = categories => ({
  type: "getMostSoldCategories",
  payload: [...categories],
});

export const startGetMostSoldCategories = () => dispatch => {
  const prodURL = `https://zapateria-zitelli-api.herokuapp.com/productos/most-sold-categories`;
  //const devURL = `http://localhost:4000/productos/most-sold-categories`;
  Axios.get(prodURL)
    .then(response => {
      if (response.data.error) {
        return Swal.fire("Error", response.data.error, "error");
      }
      dispatch(getMostSoldCategories(response.data.categories));
    })
    .catch(error => {
      console.error(error);
    });
};

export const getMostSoldGenres = genres => ({
  type: "getMostSoldGenres",
  payload: [...genres],
});

export const startGetMostSoldGenres = () => dispatch => {
  const prodURL = `https://zapateria-zitelli-api.herokuapp.com/productos/most-sold-genres`;
  // const devURL = `http://localhost:4000/productos/most-sold-genres`;
  Axios.get(prodURL)
    .then(response => {
      if (response.data.error) {
        return Swal.fire("Error", response.data.error, "error");
      }
      dispatch(getMostSoldGenres(response.data.genres));
    })
    .catch(error => {
      console.error(error);
    });
};
