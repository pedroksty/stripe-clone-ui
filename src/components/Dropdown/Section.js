import React, { useContext } from 'react'
import { Context } from './Provider'

export function DropdownSection({ option }) {
  const { updateOptionProps, cachedId } = useContext(Context)

  const { id, optionDimensions, contentDimensions } = option

  const isActive = cachedId === id

  return (
    <div className="dropdown-section" >
      <option.WrappedContent />
    </div>
  )
}