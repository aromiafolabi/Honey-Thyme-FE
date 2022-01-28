import { isOwner } from '../lib/auth'

function CocktailCommentCard({  content, owner, handleDelete }) {
  return (
    <div>
      <div>
        <div className="right">
          <div className="senderBubble">
            <p className="sender">
              <strong>{owner.username}</strong>
              <br />
              {content}
            </p>
            <div className="delete-div">
              {isOwner(owner.id) &&
              <a className="delete" onClick={handleDelete}>x</a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CocktailCommentCard