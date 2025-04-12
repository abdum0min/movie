import { useContext, useState } from 'react'
import './search-panel.css'
import { Context } from '../../context'


const SearchPanel = () => {
    const [term, setTerm] = useState('')
    const {state, dispatch} = useContext(Context)

    const updateTermHandler = e => {
        const term = e.target.value.toLowerCase()
        setTerm(term)
        dispatch({type: "ON_TERM", payload: term})
    }

    return <input  type="text" className='form-control search-input' placeholder='Kinolarni qidirsh' value={term}   onChange={updateTermHandler} />
}



export default SearchPanel