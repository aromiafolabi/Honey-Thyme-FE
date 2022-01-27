import React from 'react'
import { getProfileInfo } from '../lib/api'
import { getId } from '../lib/auth'
import CocktailCard from '../cocktails/CocktailCard'


function Profile() {

  const [profileInfo, setProfileInfo] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const id = getId()
        const profileRes = await getProfileInfo(id)
        console.log(profileRes.data)
        setProfileInfo(profileRes.data)
      } catch (err){
        console.log(err)
      } 
    }
    getData()
  }, [])


  return (
    <>
      <div className="container mt-6">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card p-3 py-4">
              <div className="text-center">
                <div className="text-center mt-3">
                  <div className="profile-image">
                    {
                      (profileInfo && profileInfo.profileImage) &&
      <img src={profileInfo.profileImage} alt="profile image" />
                    }
                    {(profileInfo && (!profileInfo.profileImage)) && 
        <p> No profile image </p>
                    }
                  </div>
                </div>
                <h5 className="mt-2 mb-0">
                  {profileInfo && profileInfo.fullName}
                </h5>
                <div className="px-4 mt-1">
                  <p className="username">{profileInfo && profileInfo.username}</p>
                </div>
                <div className="buttons"> 
                  <button className="created-button"><a className="created-button-dark">Created</a></button> 
                  <button className="saved-button"><a className="saved-button-light">Saved</a></button> 
                </div>

                <div className="photo-list">
                  {
                    (profileInfo && (profileInfo.savedCocktail.length > 0)) && 
            profileInfo.savedCocktail.map(saves => (
              <CocktailCard
                key={saves.id}
                image={saves.cocktail.image}
                cocktailId={saves.cocktail.id}
                profileid={saves.owner}
              />
            ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile