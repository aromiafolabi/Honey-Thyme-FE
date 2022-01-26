import React from 'react'

import { createCocktailComment } from '../lib/api'

function CocktailCommentForm({ fetchCocktail, cocktailId }) {

  const [commentValue, setCommentValue] = React.useState('')
  const [isError, setIsError] = React.useState(false)

  const handleChange = (e) => {
    setCommentValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createCocktailComment(cocktailId, { content: commentValue })
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
            <button type="login-button" className="message-button">Send</button>
          </div>

          {isError && <p className="help is-danger">Please write a comment and try again!</p>}
      
        </div>

      </form>

    </div>
  )

}

export default CocktailCommentForm