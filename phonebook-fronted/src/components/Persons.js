import React from 'react'
import Person from './Person'

const Persons = ({ persons, filter, handleDelete }) => {
  return (
    <div>
      {persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map((person) => <Person person={person} handleDelete={handleDelete} key={person.id} />)}
    </div>
  )
}

export default Persons