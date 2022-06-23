import uniqid from 'uniqid'

export default class Contact {
  #id = uniqid()

  firstName = ''
  lastName = ''
  email = ''
  connected = false

  constructor({ firstName, lastName, email, connected }) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.connected = connected
  }

  get id() {
    return this.#id
  }
}
