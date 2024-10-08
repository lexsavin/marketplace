import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import iconSrc from './delete.svg'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { deleteFromFavorites } from '../../features/favorites/favoritesSlice'

export function CardForFavorites({ car }) {
  const { id, brand, model, color, model_year, img_src, price, description } =
    car
  const dispatch = useDispatch()

  const handleDeleteFromFavorites = React.useCallback(
    () => dispatch(deleteFromFavorites(id)),
    [dispatch, deleteFromFavorites],
  )

  return (
    <Card sx={{ display: 'flex', borderRadius: 3, alignItems: 'center' }}>
      <CardMedia
        sx={{ height: 308, width: 443, borderRadius: 3 }}
        component="img"
        image={img_src}
        alt="Uknown"
      />
      <div>
        <CardContent sx={{ padding: '0 16px 0 16px', paddingBottom: '0px' }}>
          <Typography
            sx={{ fontSize: '36px', fontWeight: 700 }}
            gutterBottom
            component="div"
          >
            {brand} {model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography
            sx={{ marginTop: '15px' }}
            variant="body2"
            color="text.secondary"
          >
            Год: {model_year}
          </Typography>
          <Typography
            sx={{ marginTop: '15px' }}
            variant="body2"
            color="text.secondary"
          >
            Цвет: {color}
          </Typography>
          <Typography
            sx={{ margin: '15px 0 10px 0', fontSize: '24px', fontWeight: 500 }}
            gutterBottom
            component="div"
          >
            от: {price}
          </Typography>
        </CardContent>
        <Box
          sx={{ display: 'flex', alignItems: 'center', paddingLeft: '16px' }}
        >
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              backgroundColor: '#4F2CD9',
              marginRight: '15px',
              width: '254px',
              height: '56px',
              color: 'white',
            }}
          >
            Выбрать комплектацию
          </Button>
          <img
            onClick={handleDeleteFromFavorites}
            className={styles.delete}
            src={iconSrc}
            alt="SVG"
          />
        </Box>
      </div>
    </Card>
  )
}
