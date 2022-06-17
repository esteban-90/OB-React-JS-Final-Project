import { useState } from 'react'
import Contact from 'models/Contact.class'
import ContactItem from 'components/pure/ContactItem'

export default function ContactList() {
  const [contact, setContact] = useState(
    new Contact({
      firstName: 'Juan',
      lastName: 'Perez',
      email: 'juanperez@email.com',
      connected: true,
    })
  )

  const changeConnected = () => {
    setContact(new Contact({ ...contact, connected: !contact.connected }))
  }

  return (
    <div>
      <ContactItem contact={contact} toggle={changeConnected} />
    </div>
  )
}
