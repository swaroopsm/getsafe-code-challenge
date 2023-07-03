import React, { useState } from 'react'

interface Props {
  onNext: (field: string, value: { first: string; last: string }) => void
}

export default function NameStep({ onNext }: Props) {
  const [name, setName] = useState({ first: '', last: '' })

  const handleFormSubmit = () => {
    onNext('name', name)
  }

  const handleNameChange = (field: 'first' | 'last') => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setName({
        ...name,
        [field]: event.target.value,
      })
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="firstname">First name:</label>{' '}
        <input
          type="text"
          id="firstname"
          placeholder="John"
          onChange={handleNameChange('first')}
          required
        />
      </div>

      <div>
        <label htmlFor="lastname">Last name:</label>{' '}
        <input
          type="text"
          id="lastname"
          placeholder="Doe"
          required
          onChange={handleNameChange('last')}
        />
      </div>

      <div>
        <button>Next</button>
      </div>
    </form>
  )
}
