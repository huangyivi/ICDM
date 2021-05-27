import React, { Component } from 'react';
import './Mail.less'
class Mail extends Component {
  state = {
    msg: "我是邮箱页面",
  };
  render() {
    return (
      <div className="main">
        <h1 className="title">邮箱页面</h1>
        <div className="ctn">{this.state.msg}</div>
      </div>
    );
  }
}

export default Mail;
