import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import NameStep from '../NameStep'

const mockOnNextStep = jest.fn()

test('renders form with first and last name', () => {
  const { container } = render(<NameStep onNext={mockOnNextStep} />)
  const form = container.querySelector('form')
  const firstNameInput = container.querySelector('#firstname')
  const lastNameInput = container.querySelector('#lastname')

  expect(form).toBeInTheDocument()
  expect(firstNameInput).toBeInTheDocument()
  expect(lastNameInput).toBeInTheDocument()
})

test('renders form input fields with native validations', () => {
  const { container } = render(<NameStep onNext={mockOnNextStep} />)
  const firstNameInput = container.querySelector('#firstname')
  const lastNameInput = container.querySelector('#lastname')

  expect(firstNameInput).toHaveAttribute('required')
  expect(lastNameInput).toHaveAttribute('required')
})

test('calls onNext with the input values when the form is submitted', () => {
  const { container } = render(<NameStep onNext={mockOnNextStep} />)
  const form = container.querySelector('form')
  const firstNameInput = container.querySelector('#firstname')
  const lastNameInput = container.querySelector('#lastname')

  fireEvent.change(firstNameInput!, { target: { value: 'John' } })
  fireEvent.change(lastNameInput!, { target: { value: 'Doe' } })
  fireEvent.submit(form!)

  expect(mockOnNextStep).toHaveBeenCalledWith('name', {
    first: 'John',
    last: 'Doe',
  })
})
