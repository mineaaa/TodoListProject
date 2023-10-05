import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from "react";

export default function TodoListGrid(props) {

    const gridRef = useRef();
    const columns = [{ headerName: 'Kuvaus', field: 'description', sortable: true, floatingFilter: true, filter: true, animateRows: true },
    { headerName: 'Aika', field: 'date', sortable: true, floatingFilter: true, filter: true, animateRows: true },
    { headerName: 'Prioriteetti', field: 'priority', cellStyle: params => params.value == "Korkea" || params.value == "korkea" ? { color: 'red' } : { color: 'black' }, floatingFilter: true, filter: true, animateRows: true }];


    const deleteSelected = () => {

        if (gridRef.current.getSelectedNodes().length > 0) {
            const removeIndex = parseInt(gridRef.current.getSelectedNodes()[0].id);
            props.deleteTodo(removeIndex);
        }
        else {
            alert("valitse rivi ensin");
        }


    }

    return (
        <>
            <button onClick={deleteSelected}>Poista valittu </button>

            <div className="ag-theme-material" style={{ height: '700px', width: '100%', margin: 'auto' }}>
                <AgGridReact
                    rowData={props.todos}
                    columnDefs={columns}
                    rowSelection="single"
                    onGridReady={params => gridRef.current = params.api}
                >

                </AgGridReact>

            </div>

        </>
    )

}