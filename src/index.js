import React from 'react'
import { useNes } from '@brightleaf/react-hooks/lib/use-nes'
export default ({ next, previous, goto, url, path }) => {
  const { message, error, connecting, connected, client } = useNes(url, false)

  const handler = function(update, flags) {
    if (update && update.action === 'next') {
      next()
    }
    if (update && update.action === 'previous') {
      previous()
    }
    if (update && update.action === 'goto') {
      goto(update.slide)
    }
  }
  client.subscribe(path, handler)

  return null
}
