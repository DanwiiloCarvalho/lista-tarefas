import './Input.css'
export function Input({labelText, placeholderText}) {
    return (
        <div className='input-group'>
            <label htmlFor="input">{labelText}</label>
            <input id="input" type="text" placeholder={placeholderText}/>
        </div>
    )
}