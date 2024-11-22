import React from 'react'

import './AddPlayground.css'

interface IAddPlayground {
  showSlots: (id : number) => void;
  id: number;
}

export const AddPlayground = ({ showSlots, id }: IAddPlayground) => {
  return (
    <div className='add-playground' onClick={() => showSlots(id)}>
      Add Slots +
    </div>
  )
}
