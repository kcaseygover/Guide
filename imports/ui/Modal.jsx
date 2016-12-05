import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import Event from './Event.jsx'

export default class Modal extends Component {

  renderFooter(){
    if(!this.props.footer){
      return <div className="modal-footer">
      <Event style="primary" onClick={this.props.onConfirm}>{this.props.confirmLabel}</Event>
      <Event style="default" onClick={this.props.onCancel}>{this.props.cancelLabel}</Event>
      </div>
    }else{
      return <div className="modal-footer">{this.props.footer}</div>
    }
  }
  render() {
    let modalClassName = classNames({
      "modal": true,
      "show-modal": this.props.showModal
    });
    return <div className={modalClassName}>

      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">

            <Event className="close" onClick={this.props.onCancel} ariaLabel="Close"><span aria-hidden="true">&times;</span></Event>
            <h4 className="modal-title">{this.props.title}</h4>
          </div>
          <div className="modal-body">
            {this.props.children}
          </div>
          {this.renderFooter()}
        </div>
      </div>
    </div>
  }
};