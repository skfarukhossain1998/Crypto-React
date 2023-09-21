import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import axios from 'axios';
import Search from '../components/Dashboard/Search';
import PaginationComponent from '../components/Pagination';
import Loader from '../components/Common/Loader';
import BackToTop from '../components/Common/BackToTop';
import { get100Coins } from '../functions/get100Coins';
import Footer from '../components/Common/Footer';


function DashboardPage(){
    
    const [coins,setCoins]=useState([]);
    const [pignatedCoins,setPignatedCoins]=useState([]);
    const [search,setSearch]=useState("");
    const [page,setPage]=useState(1);
    const [isLoading,setIsLoading]=useState(true);
    const handlePageChange=(event,value)=>{
        setPage(value);
        var previousIndex=(value-1)*10;
        setPignatedCoins(coins.slice(previousIndex,previousIndex+10));
    };

    const onSearchChange=(e)=>{
        /* console.log(e.target.value); */
        setSearch(e.target.value);
    };
    var filteredCoins=coins.filter((item)=>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.symbol.toLowerCase().includes(search.toLowerCase())
    );
        useEffect(()=>{
        /* fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&locale=en"
        )
        .then((res)=>res.json())
        .then((data)=>{}); */

        /* axios
        .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((response)=>{
            console.log("Response>>>",response);
            setCoins(response.data);
            setPignatedCoins(response.data.slice(0,10));
            setIsLoading(false);
        })
        .catch((error)=>{
            console.log("error",error);
            setIsLoading(false);
        }); */
        getData();
        
    },[]);
    
    const getData=async ()=>{
        const myCoins=await get100Coins();
        if(myCoins){
            setCoins(myCoins);
            setPignatedCoins(myCoins.slice(0,10));
            setIsLoading(false);
        }
        
    };

    return(
    <>
      <Header/>
      <BackToTop/>
     {isLoading ? 
        (
        <Loader/>
        ):(
         <div>
    
      <Search search={search} onSearchChange={onSearchChange}/>
     <TabsComponent coins={search? filteredCoins :pignatedCoins}/>
     {!search && (
        <PaginationComponent page={page} handlePageChange={handlePageChange}/> 
     )}
     
    </div>
    )}
      <Footer />
    </>
    );
}
export default DashboardPage;