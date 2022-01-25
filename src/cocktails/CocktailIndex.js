import React from 'react'
import CocktailCard from './CocktailCard'
import axios from 'axios'
import Masonry from 'react-masonry-component'

function CocktailIndex() {

  const [allCocktails, setAllCocktails] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('/api/cocktails')
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
    <Masonry 
      className={'photo-list'}
      elementType={'ul'}
      options={masonryOptions}
      disableImagesLoaded={false}
      updateOnEachImageLoad={false}
    >
      {allCocktails &&
        allCocktails.map(cocktail => (
          <li className={'photo-item'} key={cocktail._id}>
            <CocktailCard
              key={cocktail._id}
              image={cocktail.image}
              cocktailId={cocktail._id}
            />
          </li>
        ))
      } 
    </Masonry>
  )
}

export default CocktailIndex