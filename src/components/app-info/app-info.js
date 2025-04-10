import './app-info.css'


const AppInfo = ({allMovies, favouriteMovies}) => {
    return (
        <div className='app-info'>
            <p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMovies} </p>
            <p className='fs-4 text-uppercase'>Sevimli kinolar soni: {favouriteMovies} </p>
        </div>
    )
}

export default AppInfo