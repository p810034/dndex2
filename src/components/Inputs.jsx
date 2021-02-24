import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Inputs() {
  const classes = useStyles();
  const [, drag] = useDrag(() => ({ item: { type: ItemTypes.BOX } }));
  return (
    <form ref={drag} className={classes.root} noValidate autoComplete="off">
      <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
    </form>
  );
}