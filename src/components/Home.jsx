import axios from "axios"
import { useEffect, useState } from "react"
import "./styles.css"

export const Home = () => {

    var [data,setData] = useState([])
    const [loading , setLoading] = useState(false)

    useEffect( () => {

        setLoading(true)

        var x = axios({
            url : "http://localhost:8000/data",
            method : "GET"
        })
        .then( (res) => {
            // console.log(res)
            setData(res.data)
            setLoading(false)
            // var data = res.data
            // var newdata = data.filter( e => e.brand == "HRX")
            // console.log(newdata)
        })

    } ,[])

    // const handleChange = (e) => {

    //     // console.log(e.target.value)
    //     var x = e.target.value

    //     if(x == "Low to high")
    //     { 
    //         var newdata = data.sort( function(a,b){
    //             return a.price - b.price
    //         })
    //         setData(newdata) 
           
    //         console.log(newdata)
    //     }
    //     else if( x == "High to Low")
    //     {
    //         var newdata = data.sort( function(a,b){
    //             return b.price - a.price
    //         })
    //         setData(newdata) 
          
    //         console.log(newdata)
    //     }
    // }

    

    return (
        <div className="home">
            <div className="select">
                <select >
                    <option value={""}>Sort Price</option>
                    <option value={"Low to high"}>Low to High</option>
                    <option value={"High to Low"} >High to Low</option>
                </select>
            </div>
            <h1>Home Page</h1>
            {loading && <h2>Loading...</h2>}
            <div className="cards">
                 {data.map( e => (
                     <div key={e.id}>
                         <img src={e.url}></img>
                         <p>{e.name}</p>
                         <p> Type : {e.type}</p>
                         <p> Price : {e.price}</p>
                         <p> Brand : {e.brand}</p>
                     </div>
                 ) )}
            </div>
        </div>     
    )
}