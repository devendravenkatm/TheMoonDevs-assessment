import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';

const BurnButtonBar = ({ executeBurn, burnAmount, onChangeBurnAmount, txButton, txProgress }) => {
  return (
    <div className="burn-button-bar">
      <div className="input-value-box">
        <p className="input-muted">Enter amount to Burn</p>
        <input
          className="input-value"
          type="text"
          value={burnAmount}
          placeholder="0.00"
          onChange={onChangeBurnAmount}
        />
      </div>
      <Button
        variant="outlined"
        onClick={executeBurn}
        startIcon={
          txProgress ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <img src="/icons/fire.svg" alt="Fire Icon" />
          )
        }
      >
        <span>{txButton}</span>
      </Button>
    </div>
  );
};

export default BurnButtonBar;
