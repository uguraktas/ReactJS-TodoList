import React, { Component } from 'react'
import { Card, Form, Icon, Input, Button, } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.onTodoAdd(values);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const todoListdateTime = isFieldTouched('dateTime') && getFieldError('dateTime');
    const todoListtodonote = isFieldTouched('todonote') && getFieldError('todonote');
    return (
      <Form layout="horizontal" onSubmit={this.handleSubmit}>
        <FormItem
        label="Todo List Title"
          validateStatus={todoListdateTime ? 'error' : ''}
          help={todoListdateTime || ''}
        >
          {getFieldDecorator('dateTime', {
            rules: [{ required: true, message: 'Please entery a title' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="time" />
          )}
        </FormItem>
        <FormItem
          validateStatus={todoListtodonote ? 'error' : ''}
          help={todoListtodonote || ''}
        >
          {getFieldDecorator('todonote', {
            rules: [{ required: true, message: 'Please entery a content' }],
          })(
            <TextArea prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} rows={4} />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())} >
            Ekle
          </Button>
        </FormItem>
      </Form>
    );
  }

}
const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);
export default class Add extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
    
  }
  render() {
    return (
      <div>
        <Card title="New Todo List Add"  >
          <WrappedHorizontalLoginForm {...this.props} />
        </Card>
      </div>
    )
  }


}
