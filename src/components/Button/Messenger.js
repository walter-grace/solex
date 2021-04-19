import { AwesomeButton, AwesomeButtonSocial} from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import React, { Component } from 'react';

class MessengerButton extends Component {
  render() {
    return (
      <div>
          <h3>
              Message Marketplace
          </h3>
        <AwesomeButtonSocial type="messenger" size="small">
        </AwesomeButtonSocial>
        <AwesomeButtonSocial type="whatsapp" size="small">
        </AwesomeButtonSocial>
        <AwesomeButton
            size="small"
            type="primary"
            >
           <i class="fab fa-telegram fa-lg"></i> 
        </AwesomeButton>
        <AwesomeButton size="small" type="link" >
        <i className="fab fa-korvue"></i>
            Kin
        </AwesomeButton>
        <AwesomeButton size="small" type="primary" 
        >
        <i class="far fa-comment fa-lg"></i>
        Signal
        </AwesomeButton>
        <AwesomeButton size="small" type="link" 
        >
        <i class="fab fa-viber"></i>
        Viber
        </AwesomeButton>
      </div>
    );
  }
}

export default MessengerButton