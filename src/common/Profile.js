import React from 'react'
import { getProfileInfo, getFavourites } from '../lib/api'
import { getId } from '../lib/auth'
import CocktailCard from '../cocktails/CocktailCard'


function Profile() {

  const [profileInfo, setProfileInfo] = React.useState(null)
  const [favourites, setFavourites] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const id = getId()
        const res = await getProfileInfo(id)
        setProfileInfo(res.data)
      } catch (err){
        console.log(err)
      } 
    }
    getData()
  })

  React.useEffect(() => {
    const getData = async () => {
      console.log('attempt to get fave')
      try {
        const id = getId()
        const res = await getFavourites(id)
        setFavourites(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  })

  return (
    <>
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
            (favourites && (favourites.length > 0)) &&
            favourites.map(favourites => (
              <CocktailCard
                key={favourites.id}
                image={favourites.image}
                cocktailId={favourites.id}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Profile