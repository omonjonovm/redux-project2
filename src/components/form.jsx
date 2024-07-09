import { TextArea, Input } from '../ui'

const Form = props => {
  const { title, setTitle, description, setDescription, body, setBody } = props
  return (
    <form>
      <Input label={'Title'} state={title} setState={setTitle} />
      <TextArea label={'Description'} state={description} setState={setDescription} />
      <TextArea label={'Body'} state={body} setState={setBody} height='200px' />
      <button className='w-100 btn btn-lg btn-primary mt-2' type='submit'>
        Submit
      </button>
    </form>
  )
}

export default Form