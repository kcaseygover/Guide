import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classNames from 'classnames';


export default class Modal extends Component {

  renderFooter(){
    if(!this.props.footer){
      return <div className="modal-footer">
      <div style="primary" onClick={this.props.onConfirm}>{this.props.confirmLabel}</div>
      <div style="default" onClick={this.props.onCancel}>{this.props.cancelLabel}</div>
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

            <h4 className="modal-title">{this.props.title}</h4>
          </div>
          <div className="modal-body">
            The Body
          </div>
        </div>
      </div>
    </div>
  }
};

//{this.renderFooter()}