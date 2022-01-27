import React from 'react'
import CocktailCard from '../cocktails/CocktailCard'
import { getAllCocktails } from '../lib/api'


function SearchBar (){
  const [searchedValue, setSearchedValue] = React.useState('')
  const [cocktails, setCocktails] = React.useState(null)


  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllCocktails()
        console.log(res.data)
        setCocktails(res.data)
      } catch (err) {
        console.log(err)
        console.log(err)
      }
    }
    getData()
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchedValue(e.target.value)
  }
  console.log(searchedValue)
  const filteredCocktails = (cocktails) => {
    return cocktails.filter(cocktail => {
      return cocktail.name.toLowerCase().includes(searchedValue.toLowerCase())
    })
  }
  return (
    <>
      <input 
        className="Search-bar" 
        type="search" 
        placeholder="Search cocktails..." 
        onChange={handleSearch}/>
      {cocktails && 
        filteredCocktails(cocktails).map(cocktail => (
          <CocktailCard
            key={cocktail.id}
            image={cocktail.image}
            name={cocktail.name}
            cocktailId={cocktail.id}
          />
        ))
      }
    </>
  )
}

export default SearchBar