import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/material/styles';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const RecipeCard = ({ id, title, image }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/recipes/${id}`}>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RecipeCard;
