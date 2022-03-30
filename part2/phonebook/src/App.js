import { useState } from 'react'

const App = () =>
{
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  //functions
  const handle_submit = (event) =>
  {
    event.preventDefault();
    const temp = persons;
    for (let i = 0; i < temp.length; i++)
    {
      if (newName === persons[i].name)
      {
        alert(`${newName} is already added to phonebook`)
        return
      }
    }
    temp.push({ name: newName })
    setPersons([...temp])
  }

  const handle_on_change = (event) => setNewName(event.target.value)

  //renders numbers
  const temp1 = persons.map((ele, i) => <p key={i}>{ele.name}</p>)


  console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handle_submit} >
        <div>
          name: <input onChange={handle_on_change} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {temp1}

    </div>
  )
}

export default App