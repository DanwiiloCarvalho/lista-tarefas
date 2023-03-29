import { useContext, useState } from 'react';
import { AppContext } from '../App';
import './Task.css';

export function Task({id, title, duration, completed}) {
    const [taskCompleted, setTaskCompleted] = useState(completed);
    const {tasks, setTasks} = useContext(AppContext);

    function completeTask() {
        if (taskCompleted) {
            setTaskCompleted(false);
        } else {
            setTaskCompleted(true);
        }
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => id != task.id));
    }

    return (
        <article className="task">
            <h3 className={taskCompleted ? 'completed' : ''}>{title}</h3>
            <p>Duração: {duration + ' h'}</p>
            <div className="icons">
                <span className={taskCompleted ? 'material-symbols-outlined bookmark-completed' : 'material-symbols-outlined bookmark'} onClick={completeTask}>bookmark_added</span>
                <span className="material-symbols-outlined" onClick={() => deleteTask(id)}>delete</span>
            </div>
        </article>
    );
}