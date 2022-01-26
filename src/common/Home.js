import * as React from 'react'
import Masonry from 'react-masonry-component'
import { getAllCocktails } from '../lib/api'
import Error from '../common/Error'
import Loading from '../common/Loading'
import CocktailCard from '../cocktails/CocktailCard'

function Home() {

  // const homePhotos = [
  //   {
  //     imageUrl: 'https://i.imgur.com/NOiatHs.jpg',
  //   },
  //   {
  //     imageUrl: 'https://i.imgur.com/WwvPDmV.jpg',
  //   },
  //   {
  //     imageUrl: 'https://i.imgur.com/QdcA1ZL.jpg',
  //   },
  //   {
  //     imageUrl: 'https://i.imgur.com/9Y0dbH0.jpg',
  //   },
  //   {
  //     imageUrl: 'https://i.imgur.com/TeJ0975.jpg',
  //   }
  // ]
  // // const masonryOptions = {
  // //   transitionDuration: 0,
  // // }
  // const masonryOptions = {
  //   fitWidth: false,
  //   columnWidth: 200,
  //   gutter: 30,
  //   itemSelector: '.photo-item',
  // }


  const [allCocktails, setAllCocktails] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !allCocktails && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllCocktails()
        //console.log(res.data)
        setAllCocktails(res.data)
      } catch (err) {
        console.log(err)
        setIsError(true)
      }
    }
    getData()
  }, [])

  console.log(allCocktails)

  const masonryOptions = {
    fitWidth: false,
    columnWidth: 200,
    gutter: 30,
    itemSelector: '.photo-item',
  }

  return (
    <>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="landing">
            <h1 className="landing-title text-center">
              <span className="title-word title-word-1">Honey</span>
              <span className="title-word title-word-2">&#38;</span> 
              <span className="title-word title-word-3">Thyme</span>
            </h1>
            <h4 className="landing-subtitle text-center">get your next cocktail idea</h4>
            <h2 className="landing-title text-center">
              <span className="title-word title-word-2">.</span>
              <span className="title-word title-word-1">.</span> 
              <span className="title-word title-word-3">.</span>
            </h2>
          </div>
        </div>
      </div>
      <Masonry 
        className={'photo-list-1'}
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {isError && <Error />}
        {isLoading && <Loading />}
        {allCocktails &&
        allCocktails.map(cocktail => (
          <li className={'photo-item'} key={cocktail.id}>
            <CocktailCard
              key={cocktail.id}
              image={cocktail.image}
              cocktailId={cocktail.id}
            />
          </li>
        ))
        } 
      </Masonry>
      {/* <Masonry
        className={'photo-list'}
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {isError && <Error />}
        {isLoading && <Loading />}
        {homePhotos.map((photo) => (
          <li className={'photo-item'} key={photo}>
            <img src={photo.imageUrl} alt={photo} className="photo"/>
          </li>
        ))}
      </Masonry> */}
    </>
  )

}


export default Home