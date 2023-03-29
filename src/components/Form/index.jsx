import './Form.css';
import { Input } from '../Input';
import { CreateButton } from '../CreateButton';
import { createContext, useState } from 'react';

export const FormContext = createContext();

export function Form() {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');

    return (
        <section className='form'>
            <h2>Insira sua próxima tarefa:</h2>

            <FormContext.Provider value={{title, setTitle, duration, setDuration}}>
                <Input id='title' labelText='O que você vai fazer?' placeholderText='Título da tarefa' />
                <Input id='duration' labelText='Duração:' placeholderText='Tempo estimado (em horas)' />
                <CreateButton nameButton='Criar Tarefa'/>
            </FormContext.Provider>
        </section>
    );
}