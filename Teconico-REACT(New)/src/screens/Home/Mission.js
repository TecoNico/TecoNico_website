import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import img1 from '../../Assets/img/about-mission.jpg'
import img2 from '../../Assets/img/about-plan.jpg'
import img3 from '../../Assets/img/about-vision.jpg'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const Mission = () => {
    const classes = useStyles();
    return (
      <div id="mission">
        <div className="mission-card">
        <Card className={classes.root} >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img1}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
                Our Mission
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'center'}}> 
              Our mission is to provide a platform to the people where they can find anything that they need. A place where a small idea would be welcomed by both hands and would be provided with the best results out of it. We want to develop an environment where every one of us can thrive and meet all the demands of the coming future. A place where each and every one ‘s voice, not only talking about our employees but our customers and everyone who incubate their ideas in the company would be relished upon and would be cared.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button size="small" color="primary">
              Share
            </Button> */}
            <Button size="small" color="primary" style={{margin:'auto'}}>
              Learn More 
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root} >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img2}
              title="Contemplative Reptile"
            /><CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
              Our Plan
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'center'}}>
            We plan to provide the best products and services to the people. We never compromise with the quality as in the future we have to create benchmarks for us only. We have to make long term goals and have to create a proper structure to achieve it. We are here to provide great values and to earn and to make respect.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button> */}
          <Button size="small" color="primary" style={{margin:'auto'}}>
            Learn More 
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img3}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
              Our Vission
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'center'}}>
            We are passionate in our work and never look at alternatives for hard work. We build a strong connection with our colleagues, emotionally and professionally, which enable us to create a good environment in our company. We always treat our clients with a positive attitude, we treat them with due respect and maintain professionalism with them. As we always look at our company as a team of intellectuals, so we have created a democratic platform, in which everyone's voice and outlook is being mattered.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button> */}
          <Button size="small" color="primary" style={{margin:'auto'}}>
            Learn More 
          </Button>
        </CardActions>
      </Card>
      </div>
    </div>
  );
};

export default Mission;
