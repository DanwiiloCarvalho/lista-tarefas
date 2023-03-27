import './Input.css'
export function Input({callbackParent, id, labelText, placeholderText}) {

    return (
        <div className='input-group'>
            <label htmlFor="input">{labelText}</label>
            <input id={id} type="text" placeholder={placeholderText} onChange={e => callbackParent(e.target.value)}/>
        </div>
    )
}