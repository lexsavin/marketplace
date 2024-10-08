import { useCallback } from 'react'
import styles from './styles.module.css'
import ImportExportIcon from '@mui/icons-material/ImportExport'

export function Sort({ onClickSort }) {
  const handleChange = useCallback(
    (e) => onClickSort(e.target.value),
    [onClickSort],
  )

  return (
    <div className={styles.container}>
      <ImportExportIcon />
      <select onChange={handleChange}>
        <option value={'first_in_stock'}>Сначала в наличии</option>
        <option value={'by_name_a_z'}>По имени (A-Z)</option>
        <option value={'by_name_z_a'}>По имени (Z-A)</option>
        <option value={'newer_first'}>Сначала новое</option>
        <option value={'older_first'}>Сначала старше</option>
        <option value={'cheaper_at_first'}>Сначала дешевле</option>
        <option value={'expensive_at_first'}>Сначала дороже</option>
      </select>
    </div>
  )
}

export const sortСallbacks = {
  first_in_stock: (cars) => {
    const inStock = [...cars].filter((car) => car.availability)
    const outOfStock = [...cars].filter((car) => !car.availability)
    return [...inStock, ...outOfStock]
  },
  by_name_a_z: (cars) =>
    [...cars].sort((a, b) => a.brand.localeCompare(b.brand)),
  by_name_z_a: (cars) =>
    [...cars].sort((a, b) => b.brand.localeCompare(a.brand)),
  newer_first: (cars) => [...cars].sort((a, b) => b.model_year - a.model_year),
  older_first: (cars) => [...cars].sort((a, b) => a.model_year - b.model_year),
  cheaper_at_first: (cars) =>
    [...cars].sort((a, b) => a.price.slice(1) - b.price.slice(1)),
  expensive_at_first: (cars) =>
    [...cars].sort((a, b) => b.price.slice(1) - a.price.slice(1)),
}
