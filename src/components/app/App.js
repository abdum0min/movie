import { Component } from 'react';
import './App.scss';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';
import { v4 as uuidv4 } from 'uuid';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: [
        {name: 'Empire of Osman', views: 881, favourite: false, like: false, id: 1 },
        {name: 'Ertugurul', views: 799, favourite: false, like: false, id: 2},
        {name: 'Omar', views: 904, favourite: true, like: true, id: 3}
      ],
      term: '',
      filter: 'all'
    }
  }

  onDelete = id => {
    this.setState(({data})=>({data: data.filter(c => c.id !== id)}))
  }

  addForm = item => {
    const newItem = {name: item.name, views: item.views, id: uuidv4(), favourite: false, like: false, } 
    this.setState(({data}) => ({data: [...data, newItem]}))
  }

  onToggleProp = (id, prop) => {
    this.setState(({data})=>({
      data:data.map(item => {
        if(item.id === id){
          return {...item, [prop]: !item[prop]}
        }
        return item
      })
    }))
  }

  searchHandler = (arr, term) => {
    if(term.length === 0){
      return arr
    }

    return arr.filter(item => item.name.toLowerCase().indexOf(term)> -1)
  }

  filterHandler = (arr, filter) => {
    switch(filter){
      case 'popular':
        return arr.filter(c => c.like)
      case 'mostViews':
        return arr.filter(c => c.views > 800)
      default:
        return arr
    }
  }

  updateTermHandler = (term) => this.setState({term})

  updateFilterHandler = (filter) => this.setState({filter})

  render(){
    const {data, term, filter} = this.state,
      allMovies = data.length,
      favouriteMovies = data.filter(c => c.favourite).length,
      visibleData = this.filterHandler(this.searchHandler(data, term), filter)
    return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo allMovies={allMovies} favouriteMovies={favouriteMovies}/>
        <div className='search-panel'>
          <SearchPanel updateTermHandler={this.updateTermHandler} />
          <AppFilter updateFilterHandler={this.updateFilterHandler} filter={filter} />
        </div>
        <MovieList data={visibleData} onDelete={this.onDelete} onToggleProp={this.onToggleProp}  />
        <MoviesAddForm addForm={this.addForm}/>
      </div>
    </div>
  )
  }
}


export default App;
