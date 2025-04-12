import { useContext, useState } from 'react'
import './movies-add-form.css'
import { Context } from '../../context'

const MoviesAddForm = () => {
  const [name, setName] = useState('')
  const [views, setViews] = useState('')  

  const {_, dispatch} = useContext(Context)

  const changeHandlerName = e => setName(e.target.value)
  const changeHandlerViews = e => setViews(e.target.value)

  const addFormHandler = e => {
    e.preventDefault()
    if(name !== '' && views !== ''){
      dispatch({type: "ADD_FORM", payload: {name, views}})
    }
    setName('')
    setViews('')
  }

  return(
    <div className='movies-add-form'>
      <h3>Yangi kino qo'shish</h3>
      <form className='add-form d-flex' onSubmit={addFormHandler}>
        <input name='name' type="text" className=' form-control new-post-label ' placeholder='Qanday kino?' onChange={changeHandlerName} value={name} />
        <input name='views' type="number" className=' form-control new-post-label ' placeholder="Necha marotaba ko'rilgan?" onChange={changeHandlerViews} value={views} />
        <button  type='submit' className='btn btn-outline-dark'>
          Qo'shish
        </button>
      </form>
    </div>
  )
}

export default MoviesAddForm
