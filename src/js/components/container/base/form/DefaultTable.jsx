import React, { PureComponent } from "react";
import  { Table, Thead, Tbody, Tr, Th, Td }  from 'K300';

class DefaultTableHeader extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {

    console.log('re-render DefaultTableHeader');
    
    const { usecheck, headers } = this.props;

    return (
      <Thead>
          <Tr>
            { usecheck ? <Th><input type="checkbox" id="title-table-checkbox" name="title-table-checkbox" /></Th> : null }
            
            {
                headers.map((headerLabel) => {
                  return <Th>{headerLabel}</Th>
                })
            }
          </Tr>
      </Thead>
    );
  }
}

class DefaultTableBody extends PureComponent {

  constructor(props) {
    super(props);
  }

  cells(cellData) {
    return cellData.map((value) => <Td>{value}</Td> );
  }

  cellsWithCheckbox() {
    return <Td><input type="checkbox" /></Td>
  }

  render() {

    console.log('re-render DefaultTableBody');

    const { usecheck, list } = this.props;

    return (
      <Tbody>
          { list.map( (item) => { 
                return  <Tr>
                          { usecheck ? this.cellsWithCheckbox() : null }
                          { this.cells(item) }
                        </Tr> 
            }) 
          }
      </Tbody>
    );
  }
}


class DefaultTable extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {

    console.log('re-render DefaultTable');

    return (
      <Table usecheck={ this.props.usecheck }>
        <DefaultTableHeader headers={this.props.headers} usecheck={ this.props.usecheck } />
        <DefaultTableBody list={this.props.list} usecheck={ this.props.usecheck } />
      </Table>
    );
  }
}

export default DefaultTable;
