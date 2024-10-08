import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import PageviewIcon from '@mui/icons-material/Pageview'

export function Search({ onChangeQuery }) {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 420 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Найти авто"
        inputProps={{ 'aria-label': 'найти авто' }}
        onChange={onChangeQuery}
      />
      <PageviewIcon sx={{ color: '#4F2CD9', width: 26, height: 26 }} />
    </Paper>
  )
}

export function filterItems(items, query) {
  query = query.toLowerCase()
  return items.filter((item) =>
    item.brand.split(' ').some((word) => word.toLowerCase().startsWith(query)),
  )
}
