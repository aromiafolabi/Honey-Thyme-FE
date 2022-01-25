import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import CocktailCard from './CocktailCard'

function CocktailShow() {
  const { cocktailId } = useParams()
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/cocktails/${cocktailId}`)
        console.log(res.data)
        setCocktail(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [cocktailId])


  return (
    <div>
      {cocktail && (
        cocktail.map(each => (
          <CocktailCard
            key={cocktail._id}
            name={each.name}
          />
        ))
      )}
    </div>
  )
}

export default CocktailShow
