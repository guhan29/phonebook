import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [message, setMessage] = useState([null, null])

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const oldPerson = persons.find(person => person.name === newName)
    if(oldPerson !== undefined) {
      const replace = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if(replace) {
        console.log(oldPerson.id)
        personService
          .update(oldPerson.id, newPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== oldPerson.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
            setMessage(['success', `Modified ${newName}`])
          })
          .catch(error => {
            setMessage(['error', error.response.data.error])
            // setPersons(persons.filter(person => person.id !== oldPerson.id))
          })
      } else {
        setNewName('')
        setNewNumber('')
      }
      return
    }
    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setMessage(['success', `Added ${newPerson.name}`])
      })
      .catch(error => {
        setMessage(['error', error.response.data.error])
      })
  }

  const handleDelete = (id) => {
    setPersons(persons.filter(person => person.id !== id))
    personService
      .deletePerson(id)
      .catch(error => {
        console.log('unable to delete')
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter onChange={handleFilterChange} value={newFilter} />
      <h2>add a new</h2>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} 
        handleSubmit={handleSubmit} 
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={newFilter} handleDelete={handleDelete} />
    </div>
  )
}

export default App