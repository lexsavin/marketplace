import React from 'react'
import { Cars } from './pages/Cars'
import { Header } from './components/Header'
import { Favorites } from './pages/Favorites'
import { Route, Routes } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { Spinner } from './components/Spinner'
import { CarsContext } from './context/cars-context'

const GET_CARS = gql`
  query {
    cars {
      id
      brand
      model
      color
      model_year
      img_src
      price
      description
      availability
    }
  }
`

const App = () => {
  const { loading, error, data } = useQuery(GET_CARS)

  if (loading) return <Spinner text={'Loading...'} />
  if (error) return <p>Error : {error.message}</p>

  return (
    <CarsContext.Provider value={data.cars}>
      <div>
        <Header />
        <div style={{ margin: '30px' }}>
          <Routes>
            <Route path="/" element={<Cars />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </CarsContext.Provider>
  )
}

export default App
