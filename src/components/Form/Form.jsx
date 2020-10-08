import React, { useReducer } from 'react'
import { useEffect } from 'react';
import { todoListReducer } from '../../helpers/todoReducer';
import { useForm } from '../../hooks/useForm';
import { TodoList } from '../Todo/TodoList';
import './form.css'
export const Form = () => {

    const init = () => {
        return JSON.parse( localStorage.getItem("todos") ) || [];
    } 
    
    const [todos, dispatch] = useReducer(todoListReducer, [], init)
    const [values, handleInputChange, reset] = useForm({
        task: '',
        description: ''
    })
    const { task, description } = values;
    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "add", payload: { task:task, description:description } });
        reset();
    }

   

    //Guardando datos en localstorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])


    return (
        <div className="wrapper">
            <section className="todo">
                <div className="todo__content">
                    <h4 style = {{ color: "wheat" }}> ToDo list ({ todos.length }) </h4>
                    {
                        todos.length < 1 ? ( <h4 style= {{color: "white", margin: "30px"}}> Tu lista aqui </h4> ) 
                        : 
                        (   
                            todos.map( todo => (
                                <TodoList 
                                    todo={ todo }
                                    dispatch={ dispatch }
                                />
                            ) )
                        )
                    }
                </div>
            </section>
            <section className="form">
                <header>
                    <h3>Ingresa Tu Tarea</h3>
                </header>
                <form onSubmit={ handleFormSubmit }>
                    <div className="form__content">
                        <div className="form__fields">
                            <input
                                type="text"
                                name="task"
                                value={ task }
                                onChange={ handleInputChange }
                                placeholder="Tu tarea"
                            />
                        </div>
                        <div className="form__fields">
                            <textarea
                                name="description"
                                cols="26"
                                rows="3"
                                value={ description }
                                onChange={ handleInputChange }
                                placeholder="Descriptcion"
                            >
                            </textarea>
                        </div>

                    </div>
                   
                    <button type="submit">
                        Guardar
                    </button>
                </form>
            </section>
        </div>
    )
}
