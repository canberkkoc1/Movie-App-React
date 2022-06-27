import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Cards({data}) {
  return (  
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        width="140"
        image={data.Poster}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.Year}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/details/${data.imdbID}`} state={{data:data}}>
        <Button size="small">Detail</Button>
        </Link>
      </CardActions>
    </Card>
  )  
}
