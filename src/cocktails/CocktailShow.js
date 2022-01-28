import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getSingleCocktail, deleteCocktailComment, deleteCocktail, addSaves, removeSaves } from '../lib/api'
import { isAuthenticated, isOwner, getId } from '../lib/auth'
import Error from '../common/Error'
import Loading from '../common/Loading'
import CocktailCommentCard from './CocktailCommentCard'
import CocktailCommentForm from './CocktailCommentForm'
import { Link } from 'react-router-dom'
import arrow from '../assets/arrow.png'


function CocktailShow() {
  const { cocktailId } = useParams()
  const profileId = getId()
  
  const cocktailData = {
    cocktail: cocktailId,
    owner: profileId,
  }
  
  const [cocktail, setCocktail] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const [hasSaved, setHasSaved] = React.useState(false)
  const [saveId, setSaveId] = React.useState(null)
  const isLoading = !cocktail && !isError
  const isLoggedIn = isAuthenticated()
  console.log(isLoggedIn)

  const fetchCocktail = React.useCallback(() => {
    const getData = async () => {
      try {
        const res = await getSingleCocktail(cocktailId)
        console.log(res.data)
        setCocktail(res.data)
        res.data.savedBy.map(saved => {
          const ownerId = String(saved.owner.id)
          if (ownerId === profileId){
            setHasSaved(true)
          }
          console.log(saved)
          return
        })
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [cocktailId, profileId, hasSaved])

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

  const handleSaveClick = async (e) => {
    e.preventDefault()
    try {
      const saveClick = await addSaves(cocktailId, cocktailData)
      console.log('hi', saveClick.data.id)
      setSaveId(saveClick.data.id)
      setHasSaved(true)
    } catch (err) {
      setIsError(true)
    }
  }

  const handleDeleteClick = async (e) => {
    e.preventDefault()
    try {
      const removeClick = await removeSaves(cocktailId, saveId, cocktailData)
      console.log(removeClick.data)
      setHasSaved(false)
    } catch (err){
      console.log(err)
    }
  }

  return (
    <div>

      <div className="back-button-area">
        <button type="button" className="back-button">
          <a href="javascript:window.history.back();" className="back-button-light">Back</a>
        </button>
      </div>

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
                  <div className="save-button-area">
                    {hasSaved ? 
                      <button type="save-button" className="message-button" onClick={handleDeleteClick}>Remove Save</button>
                      :
                      <button type="save-button" className="message-button" onClick={handleSaveClick}>Save</button>
                    }  
                  </div>               
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

                <div className="comments-area">
                  <div className="comments">
                    <h2 className="comments-title">Comments <img src={arrow} className="arrow"></img></h2>
                  </div>
                </div>

                {cocktail.comments.map(comment => (
                  <CocktailCommentCard
                    key={comment.id}
                    content={comment.content}
                    owner={comment.owner}
                    handleDelete={() => handleDeleteComment(comment.id)}
                  />
                  
                ))}
              </div> 
              {isAuthenticated() && (
                <CocktailCommentForm
                  fetchcocktail={fetchCocktail}
                  cocktailId={cocktailId}
                  setCocktail={setCocktail}
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

