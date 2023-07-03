import React, { useState } from 'react'
import { BuyFlowInput } from './types'

interface EmailStepProps {
  onNext: (field: 'email', value: BuyFlowInput['email']) => void
}

const EmailStep: React.FC<EmailStepProps> = ({ onNext }) => {
  const [email, setEmail] = useState<BuyFlowInput['email']>('')

  const handleFormSubmit = () => onNext('email', email)

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="email">Email:</label>{' '}
        <input
          autoFocus
          id="email"
          type="email"
          placeholder="john@example.org"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
        ></input>
      </div>
      <button>Next</button>
    </form>
  )
}

export default EmailStep
