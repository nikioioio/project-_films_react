import {Films} from '../Components/Films';
import React, {useState, useEffect} from 'react';
import {Preloader} from '../Components/Preloader';
import {Search} from '../Components/Search';
import { Filter } from '../Components/Filter'

const API_KEY = process.env.REACT_APP_API_KEY;

export const  Main  = () =>  {

    const [data, setData] = useState([]);
    const [mask, setMask] = useState('matrix');
    const [filter, setFilter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false)


    const getQueryWithMask =() => {
        return `http://www.omdbapi.com/?s=${mask}&apikey=${API_KEY}&type=${filter}`;
    }

    useEffect(()=> {
        updaterFunc();
    },[mask,filter])


    const updaterFunc  = async  () =>  {
        const response =  await fetch(getQueryWithMask());
        const json =  await response.json();
        if(json.Response === "False"){
             setData([]);
             setLoading(false);
        }else {
             setData(json['Search']);
             setLoading(false);
        }
    }



    const updateQueryMask =  (mask) => {
        console.log(mask)
        if (mask==='error'){
            setData([]);
            setLoading(false)
            setIsError(true)
        }else{
            setIsError(false)
            setData([]);
            setMask(mask);
            setLoading(true)
        }

    }

    const updateQueryFilter = (filter) => {
        console.log(filter)
        setFilter(()=>(filter ==='all' ? '': filter));
        setData([]);
        setLoading(true);
    }

        return (
            <>
                <Search updateQuery={updateQueryMask}/>
                <Filter updateQueryFilter={updateQueryFilter}/>
                <main className="container content">
                    {
                        loading ? <Preloader/>: <Films data={data} isError={isError}/>
                    }

                </main>
            </>
        )

}

