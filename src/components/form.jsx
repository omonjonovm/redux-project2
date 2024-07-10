import { useSelector } from 'react-redux'
import { TextArea, Input } from '../ui'

const Form = props => {
  const {isLoading } = useSelector(state =>state.article)
  const { title, setTitle, description, setDescription, body, setBody,formSubmit } = props
  return (
    <form onSubmit={formSubmit}>
      <Input label={'Title'} state={title} setState={setTitle} />
      <TextArea label={'Description'} state={description} setState={setDescription} />
      <TextArea label={'Body'} state={body} setState={setBody} height='200px' />
      <button className='w-100 btn btn-lg btn-primary mt-2' disabled={isLoading} type='submit'>
        {isLoading ? "Loading..." : 'Submit'}
      </button>
    </form> 
  )
}

export default Form