import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'Others', label: 'Others' }
]

export const GenderSelect = () => (
  <Select options={options} />
)