import React from "react";
import { string } from "prop-types";
import { Panel } from "./styles";

export const ErrorPanel = ({ message }) => (
  <Panel>
    <span data-notification-panel>{message}</span>
  </Panel>
);

ErrorPanel.propTypes = {
  message: string.isRequired
};

export default ErrorPanel;
