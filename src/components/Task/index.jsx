import './Task.css';

export function Task({title, duration}) {
    return (
        <article className="task">
            <h3>{title}</h3>
            <p>Duração: {duration}</p>
            <div className="icons">
                <span class="material-symbols-outlined">bookmark_added</span><span class="material-symbols-outlined">delete</span>
            </div>
        </article>
    );
}