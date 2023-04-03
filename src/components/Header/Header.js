import React from 'react'
import { useTelegram } from '../../hooks/useTelegram'

export default function Header() {

    const {user, onClose} = useTelegram();

  return (
    <div className={'header'}>
        <Button onClick={onClose}>Close</Button>
        <span className={'username'}>
            {user?.username}
        </span>
    </div>
  )
}
