function PopUp({ trigger, setTrigger }) {
  

  return (
    <div>
      {trigger ? (
        <>
          <div className="popup">
            <div className="card text-center">
              <div className="card-header">
              Honey&Thyme
                <div>
                  <button className="close-btn" onClick={() => setTrigger(false)}>x</button>
                </div>
              </div>
              <div className="card-body">       
                <div className="card-title">
                  <h2>Find your new cocktail recipe here!</h2>
                </div>
                <div className="popup-btns-container">
                  <div>
                    <button type="submit" className="red-button"><a href="/login">Login</a></button>
                  </div>
                  <div>
                    <button type="submit" className="red-button"><a href="/register">Register</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (''
      )}
    </div>
  )
}

export default PopUp