import React from 'react';

import './error-message.css';

const ErrorMessage = () => {
  return (
    <div className="error">
        <span className="boom">BOOM! &nbsp;</span>
        <span>
            Critical error &nbsp;
        </span>
        <span>
            (We try to fix it already)
        </span>
    </div>
  );
};

export default ErrorMessage;