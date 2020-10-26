import Axios from "axios";
import Swal from "sweetalert2"

export const getBestSalespeople = salespeople => ({
  type: "getBestSalespeople",
  payload: [...salespeople],
});

export const startGetBestSalespeople = () => dispatch => {
  const prodURL = `https://zapateria-zitelli-api.herokuapp.com/vendedores/best-salespeople/`
  // const devURL = `http://localhost:4000/vendedores/best-salespeople`;
  Axios.get(prodURL)
    .then(response => {
      if (response.data.error) {
        return Swal.fire("Error", response.data.error, "error");
      }
      dispatch(getBestSalespeople(response.data.salespeople));
    })
    .catch(error => {
      console.error(error);
    });
};

export const getVentas = ventas => ({
  type: "getVentas",
  payload: [...ventas]
})

export const startGetSales = () => dispatch => {
  const prodURL = `https://zapateria-zitelli-api.herokuapp.com/vendedores/sales/`
  // const devURL = `http://localhost:4000/vendedores/sales`;
  Axios.get(prodURL)
    .then(response => {
      if (response.data.error) {
        return Swal.fire("Error", response.data.error, "error");
      }
      dispatch(getVentas(response.data.sales));
    })
    .catch(error => {
      console.error(error);
    });
}