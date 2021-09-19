import React from 'react';
import ReadMoreReact from 'read-more-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { BsHeartFill, BsHeart } from 'react-icons/bs'
import './ImageCard.css';

class ImageCard extends React.Component {
  state = {
    liked: false
  }

  toggleLike = (state) => {
    this.setState({
      liked: !this.state.liked
    })
  }
  
  render() {
    return (
      <Card className="mb-5 mx-auto bg-transparent Card" >
        <Card.Header className="border-bottom-0 CardHeader">
          <Card.Img className="CardImage" variant="top" src={this.props.url} alt="" />
        </Card.Header>
        <Card.Body className="CardBody">
          <Button 
            variant="link" 
            className="CardButton" 
            onClick={this.toggleLike}>
            {this.state.liked ? <BsHeartFill/> : <BsHeart/>}
          </Button>
          <Card.Title className="text-light CardTitle">
            <span className="CardTitle">{this.props.title}</span> • <span className="CardDate">{this.props.date}</span>
          </Card.Title>
          <div className="mb-2 CardDescription">
            <ReadMoreReact 
              text={this.props.description} 
              readMoreText="more"
            />
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export default ImageCard;