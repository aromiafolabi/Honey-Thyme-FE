import React from 'react'
import { getProfileInfo } from '../lib/api'
import { getId } from '../lib/auth'
import CocktailCard from '../cocktails/CocktailCard'
import Masonry from 'react-masonry-component'


function Profile() {

  const [profileInfo, setProfileInfo] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const id = getId()
        const profileRes = await getProfileInfo(id)
        console.log(profileRes.data)
        setProfileInfo(profileRes.data)
        console.log(profileRes.data.url)
      } catch (err){
        console.log(err)
      } 
    }
    getData()
  }, [])

  const masonryOptions = {
    fitWidth: false,
    columnWidth: 200,
    gutter: 30,
    itemSelector: '.photo-item',
  }

  return (
    <>
      <div>
        <div className="back-button-area">
          <button type="button" className="back-button">
            <a href="javascript:window.history.back();" className="back-button-light">Back</a>
          </button>
        </div>
        <div className="container mt-6">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div>
                <div className="text-center">
                  <div className="text-center mt-3">
                    <div className="profile-image">
                      {profileInfo  && 
                      <img src={profileInfo.profileImage} alt="profile image" className="rounded-circle"/>
                      }
                      {/* {(profileInfo && (!profileInfo.profileImage)) && 
                <p className="rounded-circle"> No profile image </p>
                      } */}
                    </div>
                  </div>
                  <div className="px-4 mt-1">
                    <h5 className="username">{profileInfo && profileInfo.username}</h5>
                  </div>
                  <div className="hr-div">
                    <hr className="hr"></hr> 
                  </div>
                  {/* <div className="buttons"> 
                    <button className="created-button"><a className="created-button-dark">Created</a></button> 
                    <button className="saved-button"><a className="saved-button-light">Saved</a></button> 
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section saved-title">
        <p className="saved-title1">Your Saved Cocktails</p>
      </div>

      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        
        <div className="line-1">
          <hr></hr>
        </div>
        <div className="container-xl h-100">
          <div className="photo-list-2">
            <Masonry 
              className={'photo-list'}
              elementType={'ul'}
              options={masonryOptions}
              disableImagesLoaded={false}
              updateOnEachImageLoad={false}
            >
              {
                (profileInfo && (profileInfo.savedCocktail.length > 0)) && 
            profileInfo.savedCocktail.map(saves => (
              <li className={'photo-item'} key={saves.id}>
                <CocktailCard
                  className={'photo-list-3'}
                  key={saves.id}
                  image={saves.cocktail.image}
                  cocktailId={saves.cocktail.id}
                  profileid={saves.owner}
                />
              </li>
            ))
              }
            </Masonry>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile