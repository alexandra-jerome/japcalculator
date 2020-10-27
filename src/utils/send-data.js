import axios from "axios"

export const sendData = (kcal) => () => {
  axios.post(`${process.env.REACT_APP_BACK_URL}.netlify/functions/save-db`, { kcal: kcal });
};