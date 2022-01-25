import React from 'react'
import CocktailCard from './CocktailCard'

import Masonry from 'react-masonry-component'
import { getAllCocktails } from '../lib/api'

function CocktailIndex() {

  const [allCocktails, setAllCocktails] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllCocktails()
        //console.log(res.data)
        setAllCocktails(res.data)
      } catch (err) {
        console.log(err)
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