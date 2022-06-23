import { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker'
import Contact from 'models/Contact.class'
import ContactItem from 'components/pure/ContactItem'
import ContactForm from 'components/pure/forms/ContactForm'

const initialContacts = new Array(5).fill(null).map((_, index) => {
  const gender = index % 2 === 0 ? 'female' : 'male'
  const firstName = faker.name.firstName(gender)
  const lastName = faker.name.lastName(gender)
  const email = faker.internet.email(firstName, lastName)
  const connected = faker.datatype.boolean()

  return new Contact({ firstName, lastName, email, connected })
})

export default function ContactList() {
  const [contacts, setContacts] = useState(initialContacts)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3_000)
    return () => clearTimeout(timer)
  }, [contacts])

  const toggleConnected = (id) => {
    setContacts(
      contacts.map((contact) =>
        id === contact.id
          ? new Contact({ ...contact, connected: !contact.connected })
          : contact
      )
    )
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  const addContact = (contact) => {
    setContacts(contacts.concat(new Contact(contact)))
  }

  const showContacts = () => {
    const thereAreContacts = !!contacts.length

    const table = (
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th colSpan={2}>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact, index) => (
            <ContactItem
              key={index}
              contact={contact}
              toggle={() => toggleConnected(contact.id)}
              remove={() => deleteContact(contact.id)}
            />
          ))}
        </tbody>
      </table>
    )

    const message = <p>No hay contactos</p>

    return thereAreContacts ? table : message
  }

  return (
    <>
      <ContactForm add={addContact} isDisabled={isLoading} />
      {isLoading ? <p>Cargando...</p> : showContacts()}
    </>
  )
}
