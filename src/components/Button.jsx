import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './../ItemTypes';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();
  const [, drag] = useDrag(() => ({ item: { type: ItemTypes.BOX } }));
  return (
    <div  ref={drag} className={classes.root}>
      <Button variant="contained">Default</Button>
    </div>
  );
}