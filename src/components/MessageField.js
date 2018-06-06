// React
import React from 'react';

// MUI components
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

// Own modules
import isTextFieldValid from '../utils/isTextFieldValid';

const styles = theme => ({
  messageField: {
    flexShrink: 1,
    marginBottom: 15,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class MessageField extends React.Component {
  state = {
    message: {
      value: '',
      isValid: true,
    },
  };

  validate = () => {
    const { message } = this.state;
    const isMessageValid = isTextFieldValid(message.value);

    this.setState({
      message: {
        ...message,
        isValid: isMessageValid,
      },
    });

    return isMessageValid;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value,
      }
    }));
  }

   handleKeyPress = event => {
    const { message } = this.state;

    if (event.key === 'Enter' && this.validate()) {
      this.props.sendMessage(message.value);

      this.setState({
        message: {
          value: '',
          isValid: true,
        },
      });
    }
  };

  render() {
    const { classes, isChatMember, joinChat, activeId, disabled } = this.props;
    const { message } = this.state;

    return (
      <Paper elevation={10} className={classes.messageField}>
        {isChatMember
          ? <FormControl fullWidth>
              <Input
                disabled={disabled}
                placeholder="Type your message..."
                name="message"
                value={message.value}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
            </FormControl>
          : <Button
              disabled={disabled}
              variant="raised"
              color="primary"
              fullWidth
              type="button"
              onClick={() => joinChat(activeId)}
            >
              Join
            </Button>
        }
      </Paper>
    );
  }
};

export default withStyles(styles)(MessageField);
