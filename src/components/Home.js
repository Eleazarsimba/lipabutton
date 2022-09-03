import React from 'react'
import {useNavigate} from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="MainApp" onClick={()=>navigate("/pay")}>LIPA NA MPESA</div>
  )
}

export default Home