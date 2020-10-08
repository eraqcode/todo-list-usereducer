import React from 'react'
import './todo.css'
export const TodoList = ({todo, dispatch}) => {
    return (
        <div 
            style={{ color: todo.complete ? "#b1aeae" : "black", background: todo.complete ? "gray" : "#ccdbf1f2" }}
            className="todolist">
            <div className="todolist__text">
                <header>
                    <h4> { todo?.task } </h4>
                </header>
                <p>
                   { todo?.description }
                </p>

                {
                    todo.complete ? ( <h3 style = {{ color: "lightgreen" }}> Completado </h3> ) : null
                }
            </div>
            <div className="todolist__buttons">
                <buttons 
                    style={{ background: todo.complete ? "#29b606" : "#f10f0f"}}
                    className="btn"
                    type="button"
                    onClick={ () => dispatch({ type: "complete", payload: {id:todo.id} })   }
                >
                    Completo
                </buttons>
                <buttons
                    className="btn"
                    type="button"
                    onClick={ () => dispatch({ type: "remove", payload: {id:todo.id} })   }
                >
                    Eliminar
                </buttons>
            </div>

        </div>
    )
}
