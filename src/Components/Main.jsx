import React, { useEffect, useState } from 'react'
import './Style.css'

const Main = () => {
    const [input,setInput] = useState("")
    const [data,setData] = useState("offce")
    const [list,setList]=useState([])

    useEffect(()=>{
     const Apidata = async()=>{
        const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${data}&client_id=7dQXxXPcQFfpfkkjdklsYxp0mGWT9aviICNbI6N3vMQ`)
        const result = await res.json()
        console.log(result.results)
        setList(result.results)
     }
     Apidata()
    },[data])
    
  return (
    <div className='OuterDiv'>
        <div className="Navbar">
            <h2>GeekGallery</h2>
            <div className="searchinputDiv">
                <input type="text"  placeholder='Search' onChange={(e)=>{setInput(e.target.value)}}/>
                <button onClick={()=>{setData(input)}}>Search</button>
            </div>
        </div>
        <div className="mainSection">
          {
            list.length > 0 ? 
            <div className='cardMainDiv'>
         {
            list.map((ele)=>{
            return <div className='cardDiv' style={{backgroundImage:`url(${ele.urls.full})`,backgroundSize:"100% 100%"}}>
              <p><b>{ele.alt_description}</b></p>
              <p>{ele.created_at}</p>

            </div>
          })
        }
          </div>
            : <div className='Error'>
              <div className='NotFound'>
              <h2 style={{color:"red",fontSize:"3rem"}}>Data Not Found..!</h2>
              <p style={{marginTop:"20px"}}>Please try after some time or write valid input.</p>
            </div>
            </div>
          }
          
        </div>
    </div>
  )
}

export default Main