import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as fromFiltroActions from '../filter/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform( todos: Todo[], filtro: fromFiltroActions.filtrosValidos): Todo[] {

    switch ( filtro ) {

      case 'completados':
        return todos.filter( todo => todo.completado );

      case 'pendientes':
        return todos.filter( todo => !todo.completado );

      default:
        return todos;
    }

  }

}
