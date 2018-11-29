import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class TablaSemestre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "tableProgramasData": props.tableProgramasData
        };
    }

    render(){
        return(
            <BootstrapTable data={this.state.tableProgramasData} pagination options={{ noDataText: 'No hay informacion para mostar' }}>
                <TableHeaderColumn width="150" dataField='programa' isKey>Programa</TableHeaderColumn>
                <TableHeaderColumn width="150" dataField='concepto'>Concepto</TableHeaderColumn>
                <TableHeaderColumn width="150" dataField='importe'>Importe</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

export default TablaSemestre;
