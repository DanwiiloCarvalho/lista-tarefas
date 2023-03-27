import './CreateButton.css';
import { Task } from '../Task';

export function CreateButton({updateTasks, title, duration, nameButton}) {

    function createTask() {
        updateTasks(title, duration);
    }

    return (
        <button className="create" onClick={createTask}>{nameButton}</button>
    );
}