import {useEffect, useState} from "react"
import {getTrendings} from "../services/getTrendings"

export const useTrendings = () => {
 const [trends, setTrends] = useState([]) 

  useEffect(() => {
    getTrendings()
      .then(trends => (
        setTrends(trends)
      ))
  }, [])

  return trends
}
