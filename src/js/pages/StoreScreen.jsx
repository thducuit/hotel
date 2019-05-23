import React, { Component } from "react";
import { Container, Row, Span, Widget, WidgetHeader, WidgetContent }  from 'K300';
import DefaultTable from '../components/container/base/form/DefaultTable.jsx';

class StoreScreen extends Component {

  constructor() {
    super();

    this.state = {
      list: [
        [1, 'duc', 2],
        [2, 'ta', 2]
      ],
      headers: ['ID', 'Title', 'Old'],
      flag: true
    };
  }

  onClick() {
    let { list } = this.state;

    list = list.concat([
      [1, 'duc2', 2],
      [2, 'ta2', 2]
    ]);

    this.setState({
      list: list
    });
  } 
  
  render() {

    const { list, headers } = this.state;

    return (
      <Container>
            <Row>
                <Span col="12">
                    <Widget>
                        <WidgetHeader text="hello" icon="th" />
                        <WidgetContent>
                            <button onClick={ this.onClick.bind(this) }>Test</button>
                            <DefaultTable headers={headers} list={list} usecheck={true} />
                        </WidgetContent>
                    </Widget>
                </Span>
            </Row>
      </Container>
    );
  }
}
export default StoreScreen;