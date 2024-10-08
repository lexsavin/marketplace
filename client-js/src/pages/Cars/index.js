import { CardForInStock } from '../../components/CardForInStock'
import { CardForNotAvailable } from '../../components/CardForNotAvailable'
import styles from './styles.module.css'
import { Sort, sortСallbacks } from '../../components/Sort'
import { useCallback, useState } from 'react'
import { Search, filterItems } from '../../components/Search'
import { useContext } from 'react'
import { CarsContext } from '../../context/cars-context'

export const Cars = () => {
  const cars = useContext(CarsContext)

  const [selectedSort, setSelectedSort] = useState('first_in_stock')
  const [query, setQuery] = useState('')

  const handleSelectedSort = useCallback(
    (optionValue) => {
      setSelectedSort(optionValue)
    },
    [setSelectedSort],
  )

  const sortedCars = sortСallbacks[selectedSort](cars)

  function handleChangeQuery(e) {
    setQuery(e.target.value)
  }

  return (
    <div className={styles.container}>
      <div>
        <Sort onClickSort={handleSelectedSort} />
        <Search query={query} onChangeQuery={handleChangeQuery} />
      </div>
      <List items={filterItems(sortedCars, query)} />
    </div>
  )
}

function List({ items }) {
  return (
    <div>
      {items.map((car) => {
        return car.availability ? (
          <CardForInStock key={car.id} car={car} />
        ) : (
          <CardForNotAvailable key={car.id} car={car} />
        )
      })}
    </div>
  )
}
