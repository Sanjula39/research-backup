import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const NoMatch = () => {
 const navigate= useNavigate();
 useEffect(()=>{
  navigate('/dashboard');
 },[navigate])


  return (
    <div>
      <h1>Page not found</h1>
    </div>
  )
}

export default NoMatch
