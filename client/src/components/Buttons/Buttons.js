import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

export const Buttons = () => (
  <div>
    <RaisedButton label="MY PROFILE" primary={true} style={style} />
    <RaisedButton label="LOGOUT" secondary={true} style={style} />
  </div>
);

export const Button2 = () => (
  <div>
    <RaisedButton label="BORROW" secondary={true} style={style} />
  </div>
)