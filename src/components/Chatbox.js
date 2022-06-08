import { render } from "@testing-library/react";
import PropTypes from "prop-types";
import React, { useState, Component } from "react";
import "./../styles/Chatbox.css";

class Chatbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountId: props.accountId,
      groupId: props.groupId,
      orgunitId: props.orgunitId,
      subscriberNo: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("platform-inbox-row-click", (customEvent) => {
      console.log(customEvent.detail.data.subscriberNo);
      this.setState({ subscriberNo: customEvent.detail.data.subscriberNo });
    });
  }

  render() {
    return (
      <div>
        <div className="direct-chat-container">
          {this.state.subscriberNo ? (
            <t2c-direct-chat-auth
              accountId={this.state.accountId}
              groupId={this.state.groupId}
              messageType="Twoway"
              orgunitId={this.state.orgunitId}
              subscriberNo={this.state.subscriberNo}
              theme='{"color":{"brand":"#09BEE0","primary":"#09BEE0","secondary":"#FFF","background":"#fff"},"font":{"font1":"","font2":"","font3":""}}'
            />
          ) : (
            <div>
              <h1 className="dc-header">
                Select a subscriber to open direct chat
              </h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Chatbox.propTypes = {
  accountId: PropTypes.string,
  groupId: PropTypes.string,
  messageType: PropTypes.string,
  orgunitId: PropTypes.string,
  subscriberNo: PropTypes.string,
};

export default Chatbox;
