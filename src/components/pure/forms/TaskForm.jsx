import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { func } from 'prop-types'
import LEVELS from 'models/levels.enum'

const initialValues = {
  name: '',
  description: '',
  completed: false,
  level: LEVELS.NORMAL,
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(5, 'Task name must be at least 5 characters long')
    .max(20, 'Task name must be at most 20 characters long')
    .required('Name is required'),

  description: Yup.string()
    .trim()
    .min(10, 'Description must be at least 10 characters long')
    .max(40, 'Description must be at most 40 characters long')
    .required('Description is required'),

  completed: Yup.boolean(),

  level: Yup.string().oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING]),
})

export default function TaskForm({ add }) {
  return (
    <>
      <h1>New Task</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          add(values)
          resetForm()
        }}
      >
        {({
          errors: { name: nameError, description: descriptionError },
          touched: { name: nameTouched, description: descriptionTouched },

          isSubmitting,
          isValidating,
        }) => {
          return (
            <Form noValidate>
              <label htmlFor='name'>Name:</label>

              <Field
                id='name'
                name='name'
                type='text'
                minLength={5}
                maxLength={20}
                autoFocus
              />

              {nameError && nameTouched && (
                <ErrorMessage name='name' component='small' />
              )}

              <br />

              <label htmlFor='description'>Description:</label>

              <Field
                id='description'
                name='description'
                type='text'
                minLength={10}
                maxLength={40}
              />

              {descriptionError && descriptionTouched && (
                <ErrorMessage name='description' component='small' />
              )}

              <br />

              <label htmlFor='completed'>Completed:</label>
              <Field type='checkbox' id='completed' name='completed' />

              <br />

              <label htmlFor='level'>Level:</label>

              <Field as='select' id='level' name='level'>
                <option value={LEVELS.NORMAL}>Normal</option>
                <option value={LEVELS.URGENT}>Urgent</option>
                <option value={LEVELS.BLOCKING}>Blocking</option>
              </Field>

              <br />

              <button type='submit'>Done</button>

              <br />

              <p>{isSubmitting && !isValidating && 'Sending data...'}</p>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

TaskForm.propTypes = {
  add: func.isRequired,
}
