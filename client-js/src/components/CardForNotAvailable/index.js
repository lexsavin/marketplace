import * as React from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import Typography from '@mui/joy/Typography'
import Button from '@mui/joy/Button'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Box } from '@mui/material'
import styles from './styles.module.css'

export function CardForNotAvailable({ car }) {
  const { brand, model, color, model_year, img_src, price } = car

  return (
    <Card
      variant="outlined"
      sx={{ width: 420, height: 498, padding: '0px', backgroundColor: 'white' }}
    >
      <CardOverflow>
        <AspectRatio sx={{ position: 'relative' }} ratio="1.4">
          <img className={styles.image} src={img_src} loading="lazy" alt="" />
          <div className={styles.box}>
            <div>Нет в наличии</div>
          </div>
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
          disabled
          variant="solid"
          color="primary"
          sx={{
            backgroundColor: 'black',
            marginRight: '15px',
            width: '254px',
            height: '56px',
            color: 'black',
          }}
        >
          Купить
        </Button>
        <FavoriteBorderIcon
          sx={{
            color: '#D9D9D9',
            width: '30px',
            height: '27px',
          }}
        />
      </Box>
    </Card>
  )
}
