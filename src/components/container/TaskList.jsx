import { useState } from 'react'
import Task from 'models/Task.class'
import LEVELS from 'models/levels.enum'
import TaskForm from 'components/pure/forms/TaskForm'
import TaskItem from 'components/pure/TaskItem'

export default function TaskList() {
  const [tasks, setTasks] = useState([
    new Task({
      name: 'Tarea de ejemplo',
      description: 'Probando el formulario de tareas',
      completed: false,
      level: LEVELS.NORMAL,
    }),
  ])

  const addTask = async (task) => {
    const newTask = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(new Task(task))
      }, 1_000)
    })

    setTasks([...tasks, newTask])
  }

  return (
    <div>
      <TaskForm add={addTask} />

      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </div>
  )
}
