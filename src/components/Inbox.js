import PropTypes from "prop-types";
import React, { Component, useState } from "react";
import Chatbox from "./Chatbox";
import "../styles/Inbox.css";

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountId: props.accountId,
      groupId: props.groupId,
      orgunitId: props.orgunitId,
    };
  }

  render() {
    return (
      <div className="inbox-container">
        <div className="inbox-row">
          <div className="box inbox-cell">
            <t2c-inbox-list-auth
              ref={this.state.ref}
              accountId={this.state.accountId}
              groupId={this.state.groupId}
              orgunitId={this.state.orgunitId}
              theme='{"sizes":{"width":"10px"},"color":{"brand":"red","primary":"red","secondary":"red","background":"#F4F4F4"},"font":{"font1":"","font2":"","font3":""}}'
            />
          </div>
          <div className="box dc-cell">
            <Chatbox
              accountId="271759e9-ca4f-4835-be61-0fe38d051559"
              groupId="425fa869-6116-4e0c-af1c-0c764e78bc70"
              orgunitId="b85c02b4-c3de-4c7f-8717-97aa551652bb"
            />
          </div>
        </div>
      </div>
    );
  }
}

// function Inbox({ accountId, groupId, orgunitId }) {
//   const ref = React.useRef();
//   const { phoneNum, setPhoneNum } = useState(0);
//   React.useLayoutEffect(() => {
//     const { current } = ref;

//     current.addEventListener("platform-inbox-row-click", (customEvent) => {
//       console.log(customEvent.detail.data.subscriberNo);
//       setPhoneNum(customEvent.detail.data.subscriberNo);
//     });
//   }, [ref]);
//   console.log(phoneNum);
//   return (
//     <div className="inbox-table-container">
//       <div className="inbox-table-row">
//         <div className="inbox-table-cell left-cell">
//           <t2c-inbox-list-auth
//             ref={ref}
//             accountId={accountId}
//             groupId={groupId}
//             orgunitId={orgunitId}
//             theme='{"sizes":{"width":"10px"},"color":{"brand":"#09BEE0","primary":"#09BEE0","secondary":"#F4F4F4","background":"#FFF"},"font":{"font1":"","font2":"","font3":""}}'
//           />
//         </div>
//         <div className="inbox-table-cell">
//           <Chatbox
//             messageType="Twoway"
//             accountId="271759e9-ca4f-4835-be61-0fe38d051559"
//             groupId="425fa869-6116-4e0c-af1c-0c764e78bc70"
//             sbtOrgunitId="b85c02b4-c3de-4c7f-8717-97aa551652bb"
//             subscriberNo={phoneNum}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

Inbox.propTypes = {
  accountId: PropTypes.string,
  groupId: PropTypes.string,
  orgunitId: PropTypes.string,
};

export default Inbox;
