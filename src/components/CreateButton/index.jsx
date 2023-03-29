import { useContext, useState } from 'react';
import { AppContext } from '../App';
import { FormContext } from '../Form';
import './CreateButton.css';

export function CreateButton({nameButton}) {
    const {title, setTitle, duration, setDuration} = useContext(FormContext);
    const {setTasks} = useContext(AppContext);
    const [id, setId] = useState(1);
    
    function createTask() {
        if (title && duration) {
            const task = {
                key: id,
                title: title,
                duration: duration
            };
            setTasks(prevTasks => [...prevTasks, task]);
            setId(id + 1);
    
            setTitle('');
            setDuration('');
        }
    }

    return (
        <button className="create" onClick={createTask}>{nameButton}</button>
    );
}