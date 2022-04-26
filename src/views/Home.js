import React, { useEffect } from "react";
import Lists from '../component/List'
import { useDispatch, useSelector } from "react-redux";
import {getData} from '../action/index'


const Home = () => {
    const lists = useSelector((state) => state.lists);
    const dispatch = useDispatch()

    const url="https://api.github.com/users/onii-nyan"
    const token="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"
    
    const fetchData =async()=>{
        const response = await fetch(url+'/repos', {
            method: 'GET',
            headers: new Headers({
                'Authorization': token
            })
        })
        const data = await response.json()
        dispatch(getData(data))
    }

    useEffect(() => {
        fetchData();
      }, []);

    return (
      <div className="home">
          <h3>List Repository onii-nyaan</h3>
          {lists && <Lists lists={lists}/>} 
      </div>
    );
  }
   
  export default (Home);