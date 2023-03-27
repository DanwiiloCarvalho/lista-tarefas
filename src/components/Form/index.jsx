import './Form.css';
import { Input } from '../Input';
import { CreateButton } from '../CreateButton';

export function Form() {
    return (
        <section className='form'>
            <h2>Insira sua próxima tarefa:</h2>
            <Input labelText='O que você vai fazer?' placeholderText='Título da tarefa' />
            <Input labelText='Duração:' placeholderText='Tempo estimado (em horas)' />
            <CreateButton nameButton='Criar Tarefa'/>
        </section>
    );
}