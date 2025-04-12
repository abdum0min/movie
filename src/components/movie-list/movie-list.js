import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'
import { useContext } from 'react'
import { Context } from '../../context'
import { filterHandler, searchHandler } from '../../utilities/data'

const MovieList = () => {
  const {state, dispatch} = useContext(Context)

  const data = filterHandler(searchHandler(state.data, state.term), state.filter)
  return (
    <ul className='movie-list'>
      {data.map(item => (
        <MovieListItem key={item.id} {...item}/>
      ))}
    </ul>
  )
}

export default MovieList
