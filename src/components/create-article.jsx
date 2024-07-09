import { useState } from 'react'
import Form from './form'

const CreateArticle = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')
  const formProps = {title, setTitle, description, setDescription, body, setBody}
  return (
    <div className="text-center">
      <h1 className="fs-2">Create article</h1>
      <div w-75 mx-auto>
        <Form  {...formProps}/>
      </div>
    </div>
  )
}

export default CreateArticle