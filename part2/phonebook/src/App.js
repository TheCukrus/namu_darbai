import { useState } from 'react'

const App = () =>
{
  //useStates
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()
  const [filterNumber, setFilterNumber] = useState("")

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
    temp.push({ name: newName, number: newNumber })
    setPersons([...temp])
  }

  const handle_on_change = (event) => setNewName(event.target.value)
  const handle_on_number = (event) => setNewNumber(event.target.value)
  const filter_numbers = (event) => setFilterNumber(event.target.value)

  const temp1 = [];
  const regex1 = new RegExp(filterNumber, "i");

  for (let i = 0; i < persons.length; i++)
  {
    if (regex1.test(persons[i].name))
    {
      temp1.push(<p key={i}>{persons[i].name} {persons[i].number}</p>)
    }
  }


  
  // console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>

      <p>filter shown with <input onChange={filter_numbers} /></p>

      <h2>add a new</h2>
      <form onSubmit={handle_submit}>
        <div>
          name: <input onChange={handle_on_change} />
          <div>
            number: <input onChange={handle_on_number} />
          </div>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* {persons.map(ele => <p key={ele.id}>{ele.name} {ele.number}</p>)} */}
      {temp1}
    </div>
  )
}

export default App