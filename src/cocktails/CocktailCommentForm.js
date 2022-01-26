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
    <form  onSubmit={handleSubmit}>
      <div className="field">
        <div className="control">
          <textarea className="textarea" name="content" onChange={handleChange} value={commentValue}/>
        </div>
        {isError && <p className="help is-danger">Please write a comment and try again!</p>}
      </div>
      <div className="field">
        <button type="submit" className="button is-warning">Comment</button>
      </div>
    </form>
  )

}

export default CocktailCommentForm