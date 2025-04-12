import { useContext } from 'react'
import './app-filter.css'
import { Context } from '../../context'

const AppFilter = () => {
    const {state, dispatch} = useContext(Context)

    return <div className='btn-group'>
        {btnsArr.map(btn => (
            <button key={btn.name} onClick={()=> dispatch({type:"ON_FILTER", payload: btn.name})} className={`btn ${state.filter === btn.name ? 'btn-dark' : 'btn-outline-dark' }`} type='button'> {btn.label} </button>
        ))}
    </div>
}
const btnsArr = [
    {name: 'all', label: "Barcha kinolar"},
    {name: 'popular', label: "Mashxur kinolar"},
    {name: 'mostViews', label: "Eng ko'p ko'rilgan kinolar"},
]

export default AppFilter