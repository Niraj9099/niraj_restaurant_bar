import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Nomatch = () => {
  const navigate = useNavigate()
  
useEffect(() => {
    navigate('/')
  }, [])

    return (
        alert("Page Not Found ! \n Go to Home Page ")
       
    )
}
