import { Component, OnInit } from '@angular/core';

import * as fromFiltroActions from '../../filter/filter.actions';
import * as fromTodoActions from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;
  filtrosValidos: fromFiltroActions.filtrosValidos[] = [ 'todos', 'completados', 'pendientes'];
  filtroActual: fromFiltroActions.filtrosValidos;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.contarPendientes( state.todos);
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro( nuevoFiltro: fromFiltroActions.filtrosValidos ) {
      const accion = new fromFiltroActions.SetFiltroActions( nuevoFiltro );
      this.store.dispatch( accion );
  }

  contarPendientes( todos: Todo[]) {
      this.pendientes = todos.filter( todo => !todo.completado ).length;
  }
  borrarTodo() {
      const accion = new fromTodoActions.BorrarAllTodoAction();
      this.store.dispatch( accion );
  }
}
