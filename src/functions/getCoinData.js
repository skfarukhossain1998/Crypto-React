import axios from "axios";

export const getCoinData=(id)=>{
    const myData=axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response)=>{
        console.log("Response>>>",response);
        return response.data;
    })
    .catch((error)=>{
        console.log("error",error);
    });
    return myData;
};
/* 
import axios from "axios";

export const getCoinData = (id) => {
  const coinData = axios
  .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
    });

  if (coinData) return coinData;
  else return;
}; */