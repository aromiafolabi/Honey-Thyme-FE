import React from 'react'
import { getProfileInfo, getSaves } from '../lib/api'
import { getId } from '../lib/auth'
import CocktailCard from '../cocktails/CocktailCard'


function Profile() {

  const [profileInfo, setProfileInfo] = React.useState(null)
  const [saves, setSaves] = React.useState(null)

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
      console.log('attempt to get save')
      try {
        const id = getId()
        const res = await getSaves(id)
        setSaves(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  })

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
            (saves && (saves.length > 0)) &&
            saves.map(saves => (
              <CocktailCard
                key={saves.id}
                image={saves.image}
                cocktailId={saves.id}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Profile