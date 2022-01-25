import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleCocktail } from '../lib/api'

function CocktailShow() {
  const { cocktailId } = useParams()
  const [cocktail, setCocktail] = React.useState(null)

  console.log(cocktailId)
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleCocktail(cocktailId)
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
              <div className="col-md-6">
                <img src={cocktail.image} className="img-fluid" alt={cocktail.name}/>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <p className="card-title">{cocktail.name}</p>
                  <p className="card-text">{cocktail.about}</p>
                  <p className="card-text"><strong>Serves</strong> {cocktail.serves}</p>
                  <p><strong>Ingredients</strong> </p>
                  <ul className="card-text">
                    <div className="container ingredients">
                      <div className="row">
                        <div className="col">
                          <div className="ingredients-all">
                            <p className="ingredients-title">Spirit</p>
                            <div className="ingredients-each">
                              {cocktail.ingredientsSpirit.map(eachSpirit => {
                                return <li key={eachSpirit}>{eachSpirit}</li>
                              })}
                            </div>
                          </div>
                          <div className="ingredients-all">
                            <p className="ingredients-title">Drinks</p>
                            <div className="ingredients-each">
                              {cocktail.ingredientsDrinks.map(eachDrink => {
                                return <li key={eachDrink}>{eachDrink}</li>
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="ingredients-all">
                            <p className="ingredients-title">Produce</p>
                            <div className="ingredients-each">
                              {cocktail.ingredientsProduce.map(eachProduce => {
                                return <li key={eachProduce}>{eachProduce}</li>
                              })}
                            </div>
                          </div>
                          <div className="ingredients-all">
                            <p className="ingredients-title">Other</p>
                            <div className="ingredients-each">
                              {cocktail.ingredientsOther.map(eachOther => {
                                return <li key={eachOther}>{eachOther}</li>
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                  <div className="recipe-container">
                    <p><strong>Recipe</strong></p>
                    <div className="recipe">
                      {cocktail.recipe.map(eachRecipe => {
                        return <li key={eachRecipe}> {eachRecipe}</li>
                      })}
                    </div>
                  </div>
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
