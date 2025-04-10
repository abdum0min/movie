import { Component } from 'react'
import './movies-add-form.css'


class MoviesAddForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      views: ''
    }
  }

  changeHandlerInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addFormHandler = e => {
    e.preventDefault()
    this.props.addForm({name:this.state.name, views:this.state.views })
    this.setState({
      name: '',
      views: ''
    })
  }

  render(){
    const {name, views} = this.state


    return(
      <div className='movies-add-form'>
        <h3>Yangi kino qo'shish</h3>
        <form className='add-form d-flex' onSubmit={this.addFormHandler}>
          <input name='name' type="text" className=' form-control new-post-label ' placeholder='Qanday kino?' onChange={this.changeHandlerInput} value={name} />
          <input name='views' type="number" className=' form-control new-post-label ' placeholder="Necha marotaba ko'rilgan?" onChange={this.changeHandlerInput} value={views} />
          <button  type='submit' className='btn btn-outline-dark'>
            Qo'shish
          </button>
        </form>
      </div>
    )
  }

}


//  const MoviesAddForm = () => {
//   return (

//   )
// }

export default MoviesAddForm
