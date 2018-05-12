// React
import React from 'react';

// MUI Components
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';

// Own modules
import getInitials from '../utils/getInitials';

const styles = theme => ({
  paperRoot: theme.mixins.gutters({
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 8,
      paddingRight: 8,
    },
  }),

  messageAvatar: {
    marginRight: theme.spacing.unit * 2,
  },
});

const MessageListItem = ({ classes, item }) => (
  <ListItem>
    <Avatar className={classes.messageAvatar}>
      {getInitials(item.name)}
    </Avatar>

    <Paper elevation={4} className={classes.paperRoot}>
      <Typography variant="caption" component="strong">
        {item.name}
      </Typography>

      <Typography component="p">
        {item.text}
      </Typography>

      <Typography variant="caption" component="em">
        {item.date}
      </Typography>
    </Paper>
  </ListItem>
);

export default withStyles(styles)(MessageListItem);
