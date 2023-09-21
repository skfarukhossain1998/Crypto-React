import axios from "axios";

export const get100Coins=()=>{
    const myData=axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((response)=>{

      return response.data;
    })
    .catch(err=>{
      console.log("Error",err)
    
  })
  return myData;
}


/*import axios from "axios";
 export const get100Coins=()=>{
    const myCoins=axios
        .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((response)=>{
            console.log("Response>>>",response);
           return response.data;
        })
        .catch((error)=>{
            console.log("error",error);
          
        });
        return myCoins;

}; */

/* import axios from "axios";


export const get100Coins = () => {
  const coins = axios
  .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      }
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
    });

  if (coins) return coins;
  else return;
}; */