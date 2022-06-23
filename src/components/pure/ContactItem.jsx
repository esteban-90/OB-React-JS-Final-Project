import Contact from 'models/Contact.class'
import { func, instanceOf } from 'prop-types'

export default function ContactItem({ contact, toggle, remove }) {
  const { firstName, lastName, email, connected } = contact

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{connected ? 'Conectado' : 'Desconectado'}</td>
      <td>
        <button onClick={toggle}>Cambiar</button>
      </td>
      <td>
        <button onClick={remove}>Eliminar</button>
      </td>
    </tr>
  )
}

ContactItem.propTypes = {
  contact: instanceOf(Contact).isRequired,
  toggle: func.isRequired,
  remove: func.isRequired,
}
