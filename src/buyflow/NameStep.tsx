import React, { useState } from 'react'

import { BuyFlowInput } from './types'

interface NameStepProps {
  onNext: (field: 'name', value: BuyFlowInput['name']) => void
}

export default function NameStep({ onNext }: NameStepProps) {
  const [name, setName] = useState<BuyFlowInput['name']>({
    first: '',
    last: '',
  })

  const handleFormSubmit = () => {
    onNext('name', name)
  }

  const handleNameChange = (field: keyof BuyFlowInput['name']) => {
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
          autoFocus
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
