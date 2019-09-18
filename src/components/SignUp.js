import React from "react";
import {connect} from "react-redux";
import {signUp} from "../redux/action";
import {message, Button, Form, Input, Select, Row, Col} from "antd";
import {isMobilePhone} from 'validator';

const FormItem = Form.Item;
const Password = Input.Password;
const Option = Select.Option;

class SignUp extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.signUp({ info: values, callback: () => {
          this.props.form.resetFields();
          message.success('Đăng ký thành công!', 5);
        }});
      }
    });
  };

  checkPhoneNumber = (rules, values, callback) => {
    if(!values) {
      callback('Vui lòng nhập số điện thoại')
    }
    else if(!isMobilePhone(values,'vi-VN')) {
      callback('Số điện thoại không hợp lệ');
    }
    else {
      callback();
    }
  }


  render() {
    const {getFieldDecorator} = this.props.form;
    return(
      <Row>
        <Col span={6}>
          <h3>Đăng ký thành viên</h3>
          <Form onSubmit={this.handleSubmit} className="gx-signup-form gx-form-row0">
            <FormItem>
              {getFieldDecorator('first_name', {
                rules: [{required: true, message: 'Vui lòng nhập Họ'}],
              })(
                <Input placeholder="Họ"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('last_name', {
                rules: [{required: true, message: 'Vui lòng nhập Tên'}],
              })(
                <Input placeholder="Tên"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{type: 'email', message: 'Địa chỉ Email không đúng'},
                        {required: true, message: 'Vui lòng nhập Email'}
                        ],
              })(
                <Input placeholder="Email"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{required: true, message: 'Vui lòng nhập Mật khẩu'},
                        {min: 6, message: 'Mật khẩu tối thiểu 6 ký tự'}],
              })(
                <Password placeholder="Mật khẩu" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('phone_number', {
                rules: [
                        {validator: this.checkPhoneNumber}],
              })(
                <Input placeholder="Điện thoại"/>
              )}
            </FormItem>
            <Form.Item>
              {getFieldDecorator('gender', {
                initialValue: 'male'
              })(<Select style={{ width: 120 }}>
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                 </Select>)}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                  Đăng ký
                </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const mapDispatchtoProps = dispatch => ({
  signUp: (values) => dispatch(signUp(values))
})

const WrappedSignUpForm = Form.create()(SignUp);

export default connect(null, mapDispatchtoProps)(WrappedSignUpForm);
