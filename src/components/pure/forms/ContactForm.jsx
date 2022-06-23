import { useRef } from 'react'
import { func, bool } from 'prop-types'

export default function ContactForm({ add, isDisabled }) {
  const firstNameRef = useRef('')
  const lastNameRef = useRef('')
  const emailRef = useRef('')

  const submitHandler = (event) => {
    event.preventDefault()

    const newContact = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
    }

    add(newContact)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        required
        placeholder='Nombre'
        ref={firstNameRef}
        disabled={isDisabled}
      />

      <hr />

      <input
        type='text'
        required
        placeholder='Apellido'
        ref={lastNameRef}
        disabled={isDisabled}
      />

      <hr />

      <input
        type='text'
        required
        placeholder='Correo'
        ref={emailRef}
        disabled={isDisabled}
      />

      <hr />

      <button type='submit' disabled={isDisabled}>
        Agregar
      </button>

      <hr />
    </form>
  )
}

ContactForm.propTypes = {
  add: func.isRequired,
  isDisabled: bool.isRequired,
}
