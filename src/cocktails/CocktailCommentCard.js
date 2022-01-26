import { isOwner } from '../lib/auth'

function CocktailCommentCard({  content, profile, handleDelete }) {
  return (
    <div>
      <div>
        <div>
          <div>
            <p>
              <strong>{profile.username}</strong>
              <br />
              {content}
            </p>
            {isOwner(profile._id) &&
              <button onClick={handleDelete}>X</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CocktailCommentCard