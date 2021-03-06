import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import "./App.css";
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './style';
import memories from './images/memories.png';
import {Avatar} from "@material-ui/core";


const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
          <div className="home__header">
                    <div className="home__headerleft">
                        <a >Home</a>
                        <a >Frinds</a>
                    </div>
                    <div className="home__headerright">
                        <a >chat</a>
                        <a >Images</a>
                        <Avatar>AM</Avatar>
                    </div>

          </div>
        {/* <Typography className={classes.heading} variant="h2" align="center">Final project</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" /> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
