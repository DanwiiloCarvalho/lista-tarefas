import './Task.css';

export function Task({title, duration}) {
    return (
        <article className="task">
            <h3>{title}</h3>
            <p>Duração: {duration + ' h'}</p>
            <div className="icons">
                <span className="material-symbols-outlined">bookmark_added</span><span className="material-symbols-outlined">delete</span>
            </div>
        </article>
    );
}