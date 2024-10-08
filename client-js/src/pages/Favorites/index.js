import { CardForFavorites } from '../../components/CardForFavorites'
import styles from './styles.module.css'
import { useSelector } from 'react-redux'
import { selectLikes } from '../../features/favorites/favoritesSlice'
import plural from 'plural-ru'
import { useContext } from 'react'
import { CarsContext } from '../../context/cars-context'

export const Favorites = () => {
  const cars = useContext(CarsContext)

  const likes = useSelector(selectLikes)

  const filteredCars = cars.filter((car) => likes.includes(car.id))

  return (
    <div className={styles.container}>
      <div>
        {`Избранные товары — ${filteredCars.length} ${plural(filteredCars.length, 'позиция', 'позиции', 'позиций')}`}
      </div>
      {filteredCars.map((car) => {
        return <CardForFavorites key={car.id} car={car} />
      })}
    </div>
  )
}
