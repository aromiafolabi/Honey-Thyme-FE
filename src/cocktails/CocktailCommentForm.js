import React from 'react'
import { useParams } from 'react-router-dom'
import { createCocktailComment, getSingleCocktail } from '../lib/api'
import { getId } from '../lib/auth'

function CocktailCommentForm({ fetchCocktail, setCocktail }) {
  const [commentValue, setCommentValue] = React.useState('')
  const [isError, setIsError] = React.useState(false)
  const { cocktailId } = useParams()
  const profileId = getId()

  
  const cocktailData = {
    content: commentValue,
    cocktail: cocktailId,
    owner: profileId,
  }
  console.log(typeof(cocktailId), typeof(profileId))
  console.log(cocktailId, profileId)

  const handleChange = (e) => {
    setCommentValue(e.target.value)
    console.log(e.target.value)

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // const id = getId()
      await createCocktailComment(cocktailId, cocktailData, { content: commentValue })
      const cocktailWithComment = await getSingleCocktail(cocktailId)
      setCocktail(cocktailWithComment.data)
      setCommentValue('')      
      fetchCocktail()
    } catch (err) {
      setIsError(true)

    }
  }

  return (
    <div className="message-area">
      <form  onSubmit={handleSubmit}>
        <div className="field">
          <div className="control1">
            <textarea className="textarea border" name="content" onChange={handleChange} value={commentValue}/>
          </div>
          <div className="control2">
            <button type="login-button" className="message-button">Comment</button>
          </div>
          {/* {isError && <p className="help is-danger">Please write a comment and try again!</p>} */}
        </div>
      </form>
    </div>
  )

}

export default CocktailCommentForm