import React, { useState } from 'react'

const Search = ({ onTerm }) => {
  const [term, setTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onTerm(term)
  }

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-xs-12'>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <input
                type='text'
                className='form-control'
                id='term'
                placeholder='term'
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search
