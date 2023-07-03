import React, { useState } from 'react'

interface EmailStepProps {
  onNext: (field: string, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = ({ onNext }) => {
  const [email, setEmail] = useState('')

  const handleFormSubmit = () => onNext('email', email)

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="email">Email:</label>{' '}
        <input
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
