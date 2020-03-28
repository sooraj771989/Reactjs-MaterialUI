import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
 
import Button from '@material-ui/core/Button';
 
import Typography from '@material-ui/core/Typography';

 

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
        margin: theme.spacing(1),
      },
  },
  
}));

export default function ProTip() {
  const classes = useStyles();
  return (

    
    <Typography align="center" className={classes.root} color="textSecondary">
     <div className={classes.root}> 
     <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
       </div>
      Example Site Using Material UI
    </Typography>
  );
}