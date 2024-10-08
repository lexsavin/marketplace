import styles from './styles.module.css'
import * as React from 'react'
import Button from '@mui/material/Button'
import DensityMediumIcon from '@mui/icons-material/DensityMedium'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

export const Header = () => {
  const navigate = useNavigate()

  const handleRedirectCarsPage = useCallback(() => {
    navigate('/')
  }, [navigate])

  const handleRedirectFavoritesPage = useCallback(() => {
    navigate('/favorites')
  }, [navigate])

  return (
    <header className={styles.header}>
      <div>
        <div onClick={handleRedirectCarsPage}>
          <span>КУПИ</span>АВТО
        </div>
        <Button
          variant="contained"
          startIcon={<DensityMediumIcon />}
          sx={{
            textTransform: 'none',
            width: '135px',
            height: '36px',
            backgroundColor: '#4F2CD9',
          }}
        >
          Каталог
        </Button>
      </div>
      <div className={styles.group}>
        <div>Москва, Волгоградский пр-кт, 43, стр 1</div>
        <div>+7 800 555 35 35</div>
        <div onClick={handleRedirectFavoritesPage}>
          <FavoriteIcon
            sx={{
              color: '#4F2CD9',
              width: '30px',
              height: '27px',
              marginRight: '7px',
            }}
          />
          <div>Избранное</div>
        </div>
      </div>
    </header>
  )
}
