import { isOwner } from '../lib/auth'

function CocktailCommentCard({  content, owner, handleDelete }) {
  return (
    <div>
      <div>
        <div>
          <div>
            <p>
              <strong>{owner.username}</strong>
              <br />
              {content}
            </p>
            {isOwner(owner.id) &&
              <button onClick={handleDelete}>X</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CocktailCommentCard