import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import CocktailCard from './CocktailCard'

function CocktailShow() {
  const { cocktailId } = useParams()
  const [cocktail, setCocktail] = React.useState(null)

  console.log(cocktailId)
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/cocktails/${cocktailId}/`)
        console.log(res.data)
        setCocktail(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [cocktailId])


  console.log(cocktail)

  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          {cocktail && (
            <>
              <div className="col-md-4">
                <img src={cocktail.image} className="img-fluid rounded-start" alt={cocktail.name}/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-title">Name: {cocktail.name}</p>
                  <p className="card-text">About: {cocktail.about}</p>
                  <p className="card-text">Serves: {cocktail.serves}</p>
                  <ul className="card-text">
                    {cocktail.ingredientsSpirit.map(eachSpirit => {
                      return <li key={eachSpirit}>Spirit: {eachSpirit}</li>
                    })}
                    {cocktail.ingredientsDrinks.map(eachDrink => {
                      return <li key={eachDrink}>Drinks: {eachDrink}</li>
                    })}
                    {cocktail.ingredientsProduce.map(eachProduce => {
                      return <li key={eachProduce}>Produce: {eachProduce}</li>
                    })}
                    {cocktail.ingredientsOther.map(eachOther => {
                      return <li key={eachOther}>Other: {eachOther}</li>
                    })}
                    {cocktail.recipe.map(eachRecipe => {
                      return <li key={eachRecipe}>{eachRecipe}</li>
                    })}
                  </ul>
                </div>
              </div> 
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CocktailShow

// 
