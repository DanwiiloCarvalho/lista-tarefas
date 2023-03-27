import './Form.css';
import { Input } from '../Input';
import { CreateButton } from '../CreateButton';
import { useState } from 'react';

export function Form({updateTasks}) {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');

    /* useEffect(() => console.log(title + '\n' + duration), [title, duration]); */
    return (
        <section className='form'>
            <h2>Insira sua próxima tarefa:</h2>
            <Input callbackParent={value => setTitle(value)} id='title' labelText='O que você vai fazer?' placeholderText='Título da tarefa' />
            <Input callbackParent={value => setDuration(value)} id='duration' labelText='Duração:' placeholderText='Tempo estimado (em horas)' />
            <CreateButton updateTasks={updateTasks} title={title} duration={duration} nameButton='Criar Tarefa'/>
        </section>
    );
}