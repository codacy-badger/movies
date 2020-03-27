import React from 'react';
import {
  Link,
  withRouter
} from "react-router-dom";

const Menu = () => {
  return (
    <ul>
      <li><Link to="/">Movies</Link></li>
      <li><Link to="/charts">Charts</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  )
}

export default withRouter(Menu);
