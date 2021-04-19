import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-amber.css";
import React, { Component } from 'react';

class ReactButton extends Component {
  render() {
    return (
      <div>
        <AwesomeButton type="primary"
        size=""
        href="https://solanaburna.netlify.app/"
        >
          Get New Wallet
        </AwesomeButton>
        <hr/>
        <AwesomeButton type="primary"
        size=""
        href="https://solanaburna.netlify.app/"
        >
          Mint Social Token
        </AwesomeButton>
      </div>
    );
  }
}

export default ReactButton