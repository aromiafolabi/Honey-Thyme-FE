import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getSingleCocktail, deleteCocktailComment, deleteCocktail } from '../lib/api'
import { isAuthenticated, isOwner } from '../lib/auth'
import Error from '../common/Error'
import Loading from '../common/Loading'
import CocktailCommentCard from './CocktailCommentCard'
import CocktailCommentForm from './CocktailCommentForm'
import { Link } from 'react-router-dom'

function CocktailShow() {
  const { cocktailId } = useParams()
  const [cocktail, setCocktail] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !cocktail && !isError
  const isLoggedIn = isAuthenticated()
  console.log(isLoggedIn)
  //console.log(cocktailId)

  const fetchCocktail = React.useCallback(() => {
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

  React.useEffect(() => {
    fetchCocktail()
  }, [cocktailId, fetchCocktail])

  //console.log(cocktail)

  const handleDelete = async () => {
    if (window.confirm('Do you want to delete this cocktail?')) {
      try {
        await deleteCocktail(cocktailId)
        Navigate.push('/cocktails')
      } catch (err) {
        console.log(err)
      }
    }
  }

  const handleDeleteComment = async (commentId) => {
    if (window.confirm('Do you want to delete this comment?')) {
      try {
        await deleteCocktailComment(cocktailId, commentId)
        fetchCocktail()
      } catch (err) {
        setIsError(true)
      }
    }
  }

  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          {isError && <Error />}
          {isLoading && <Loading />}
          {cocktail && (
            <>
              <div className="col-md-6">
                <img src={cocktail.image} className="img-fluid" alt={cocktail.name}/>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <button type="save-button" className="message-button">Save</button>
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
              {isOwner(cocktail.owner) && (
                <div className="buttons">
                  <Link
                    to={`/cocktails/${cocktailId}/edit`}
                  >
          Edit this Cocktail
                  </Link>
                  <button
                    onClick={handleDelete}
                  >
          Delete this Cocktail
                  </button>
                </div>
              )}

              <div className="column">
                {cocktail.comments.map(comment => (
                  <CocktailCommentCard
                    key={comment._id}
                    content={comment.content}
                    owner={comment.owner}
                    handleDelete={() => handleDeleteComment(comment._id)}
                  />
                ))}
              </div>
              {isAuthenticated() && (
                <CocktailCommentForm
                  fetchcocktail={fetchCocktail}
                  cocktailId={cocktailId}
                />
              )}
            </>
          )}
        </div>
      </div>
      
    </div>
  )
}

export default CocktailShow

// 
