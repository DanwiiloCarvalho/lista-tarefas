import { useContext } from 'react'
import { FormContext } from '../Form';
import './Input.css'

export function Input({id, labelText, placeholderText}) {
    const { title, setTitle, duration, setDuration } = useContext(FormContext);

    return (
        <div className='input-group'>
            <label htmlFor="input">{labelText}</label>
            <input id={id} type={id === 'duration' ? 'number' : 'text'} placeholder={placeholderText} onChange={e => id === 'title' ? setTitle(e.target.value) : setDuration(e.target.value)} />
        </div>
    )
}