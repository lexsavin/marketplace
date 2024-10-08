import * as React from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import Typography from '@mui/joy/Typography'
import Button from '@mui/joy/Button'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import {
  addToFavorites,
  deleteFromFavorites,
  selectLikes,
} from '../../features/favorites/favoritesSlice'

export function CardForInStock({ car }) {
  const { id, brand, model, color, model_year, img_src, price } = car
  const dispatch = useDispatch()

  const likes = useSelector(selectLikes)
  const isLike = likes.includes(id)

  const handleAddToFavorites = React.useCallback(
    () => dispatch(addToFavorites(id)),
    [dispatch, addToFavorites],
  )

  const handleDeleteFromFavorites = React.useCallback(
    () => dispatch(deleteFromFavorites(id)),
    [dispatch, deleteFromFavorites],
  )

  return (
    <Card
      variant="outlined"
      sx={{ width: 420, height: 498, padding: '0px', backgroundColor: 'white' }}
    >
      <CardOverflow>
        <AspectRatio ratio="1.4">
          <img src={img_src} loading="lazy" alt="" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography sx={{ fontSize: '24px', fontWeight: 500 }} level="title-lg">
          {brand} {model}
        </Typography>
        <Typography
          sx={{ fontSize: '14px', fontWeight: 500, marginTop: '5px' }}
          level="body-sm"
        >
          Год: {model_year} Цвет: {color}
        </Typography>
        <Typography
          sx={{ fontSize: '16px', fontWeight: 500, marginTop: '5px' }}
          level="title-lg"
        >
          от: {price}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button
          variant="solid"
          color="primary"
          sx={{
            backgroundColor: '#4F2CD9',
            marginRight: '15px',
            width: '254px',
            height: '56px',
          }}
        >
          Купить
        </Button>
        {isLike ? (
          <FavoriteIcon
            onClick={handleDeleteFromFavorites}
            sx={{
              color: '#240C86',
              cursor: 'pointer',
              width: '30px',
              height: '27px',
            }}
          />
        ) : (
          <FavoriteBorderIcon
            onClick={handleAddToFavorites}
            sx={{
              color: 'black',
              cursor: 'pointer',
              width: '30px',
              height: '27px',
            }}
          />
        )}
      </Box>
    </Card>
  )
}
