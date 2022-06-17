import Contact from 'models/Contact.class'
import { func, instanceOf } from 'prop-types'

export default function ContactItem({ contact, toggle }) {
  const { firstName, lastName, email, connected } = contact

  return (
    <div>
      <h2>Nombre: {firstName}</h2>
      <p>Apellido: {lastName}</p>
      <p>Contacto: {connected ? ' En Línea' : 'No Disponible'}</p>
      <p>Correo: {email}</p>
      <button onClick={toggle}>Cambiar</button>
    </div>
  )
}

ContactItem.propTypes = {
  contact: instanceOf(Contact).isRequired,
  toggle: func.isRequired,
}
