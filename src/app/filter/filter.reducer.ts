
import * as fromFiltros from './filter.actions';

const estatdoInicial: fromFiltros.filtrosValidos = 'todos';


export function filtroReducer( state = estatdoInicial,
                               action: fromFiltros.acciones ): fromFiltros.filtrosValidos {

        switch ( action.type ) {
            case fromFiltros.SET_FILTRO:
                return action.filtro;
            default:
                return state;
        }
}

