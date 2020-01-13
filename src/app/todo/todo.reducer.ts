
import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

// Creo un par de todo inciales
const todo1 = new Todo('Comer');
const todo2 = new Todo('Cenar');
const todo3 = new Todo('Dormir');

todo2.completado = true;


const estadoIncial: Todo[] = [ todo1, todo2, todo3];

export function todoReducer( state = estadoIncial, action: fromTodo.Acciones ): Todo[] {

    switch ( action.type ) {

        case fromTodo.AGREGAR_TODO:
            const todo = new Todo( action.texto );
            // Con el ES6 se clona el arreglo state inicial y se añade un nuevo todo. Uso del operador spread
            return [...state, todo];
        case fromTodo.TOGGLE_TODO:
            return state.map( todoEdit => {
                if ( todoEdit.id === action.id){
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                } else {
                    return todoEdit;
                }
            });
        case fromTodo.TOGGLE_ALL_TODO:
            return state.map( todoEdit => {
                    return {
                        ...todoEdit,
                        completado: action.completado
                    };
            });
        case fromTodo.EDITAR_TODO:
            return state.map( todoEdit => {
                if ( todoEdit.id === action.id){
                    return {
                        ...todoEdit,
                        texto: action.texto
                    };
                } else {
                    return todoEdit;
                }
            });
        case fromTodo.BORRAR_TODO:

            return state.filter( todoBorrar => todoBorrar.id !== action.id);

        case fromTodo.BORRAR_ALL_TODO:

            return state.filter( todoBorrar => !todoBorrar.completado );
        default:
            return state;
    }
}
