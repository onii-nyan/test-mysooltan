import { useEffect, useState } from "react";

const Home = () => {
    const [lists, setLists] = useState(null)
    const url="https://api.github.com/users/onii-nyan"
    const token="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"
    useEffect(() => {
        const authorize = async () =>{
            const fetchData = await fetch(url+'/repos', {
                method: 'GET',
                headers: new Headers({
                    'Authorization': token
                })
            })
            const res = await fetchData.json()
            setLists(res)
            }
            authorize()
        },[])
  
    return (
      <div className="home">
          <h1>test</h1>
      </div>
    );
  }
   
  export default Home;