import Task from 'models/Task.class'
import { instanceOf } from 'prop-types'

export default function TaskItem({ task }) {
  const { name, description, completed, level } = task

  return (
    <div>
      <h2>Nombre: {name}</h2>
      <p>Descripción: {description}</p>
      <p>Completado: {completed ? 'sí' : 'no'}</p>
      <p>Nivel: {level}</p>
    </div>
  )
}

TaskItem.propTypes = {
  task: instanceOf(Task),
}
