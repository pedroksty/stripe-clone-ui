import React, { useState, useCallback, useEffect } from 'react'

const Context = React.createContext()

export function DropdownProvider({ children }) {
  const [options, setOptions] = useState([])
  const [targedId, setTargedId] = useState(null)
  const [cachedId, setCachedId] = useState(null)

  const registerOption = useCallback(({
    id,
    optionDimesions,
    OptionCenterX,
    WrappedContent,
    backgroundHeight
  }) => {
    setOptions(items => [
      ...items,
      {
        id,
        optionDimesions,
        OptionCenterX,
        WrappedContent,
        backgroundHeight
      }
    ])
  }, [setOptions])

  const updateOptionProps = useCallback((optionId, props) => {
    setOptions(items => items.map(item => {
      if (item.id === optionId) {
        item = { ...item, props }
      }

      return item
    }))
  }, [setOptions])

  const getOptionById = useCallback(
    (id) => options.find(item => item.id === id),
    [options]
  )

  const deleteOptionsById = useCallback(
    (id) => {
      setOptions((items) => items.filter(item => item.id !== id))
    },
    [setOptions]
  )

  useEffect(() => { }, [])

  return (
    <Context.Provider>
      value={{

      }}

      {children}
    </Context.Provider>
  )
}
