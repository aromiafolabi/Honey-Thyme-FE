import React from 'react'
import CocktailCard from './CocktailCard'

import Masonry from 'react-masonry-component'
import { getAllCocktails } from '../lib/api'
import Error from '../common/Error'
import Loading from '../common/Loading'

function CocktailIndex() {

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
    <div>
      <Masonry 
        className={'photo-list'}
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
    </div>
  )
}

export default CocktailIndex