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
      <h1>hi</h1>
      <div className="profile-container">
        {
          (profileInfo && profileInfo.profileImage) &&
      <img src={profileInfo.profileImage} alt="profile image" />
        }
        {(profileInfo && (!profileInfo.profileImage)) && 
        <p> No profile image </p>
        }
        <div>
          {profileInfo && profileInfo.fullName}
        </div>
        <div>
          {profileInfo && profileInfo.username}
        </div>
        <div>
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
    </>
  )
}

export default Profile