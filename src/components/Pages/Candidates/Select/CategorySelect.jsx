import React from 'react'
import Select from 'react-select'

const options = [
  { value: '', label: 'All category' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export const CategorySelect = () => (
  <Select options={options} />
)