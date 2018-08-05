import React, { Component } from 'react'
import { Card, Table, Divider, Button } from 'antd';
const { Column } = Table;

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

export default class FormList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentWillMount(){
  }

  render() {
    
    return (
      <div>
        <Card title="Todo List" >
          <Table rowSelection={rowSelection} dataSource={this.props.todosL}>
            <Column
              title="Entery Time"
              dataIndex="dateTime"
              key="datatime"
            />
            <Column
              title="Note"
              dataIndex="todonote"
              key="todonote"
            />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <span>
                  <Button type="primary">Edit</Button>
                  <Divider type="vertical" />
                  <Button type="danger">Delete</Button>
                </span>
              )}
            />
          </Table>
        </Card>
      </div>
    )
  }
  
}
