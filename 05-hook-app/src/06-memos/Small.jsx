import React from 'react'

export const Small = React.memo(({value}) => {
    console.log('entrooo');
  return (
    <small>{value}</small>
  )
})
