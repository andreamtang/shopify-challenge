import React from 'react';
import ReadMoreReact from 'read-more-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsHeartFill, BsHeart, BsLink45Deg, BsClipboard } from 'react-icons/bs'
import './ImageCard.css';

class ImageCard extends React.Component {
  state = {
    isLiked: false,
    showTooltip: false
  }

  toggleLike = () => {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  copyToClipboard = () => {
    navigator.clipboard.writeText(this.props.url);
    this.setState({
      showTooltip: true
    })

    setTimeout( () => {
      this.setState({showTooltip: false}); 
    }, 1500)
  }
  
  render() {
    return (
      <Card className="mb-5 mx-auto bg-transparent Card" >
        <Card.Header className="border-bottom-0 CardHeader">
          <Card.Img className="CardImage" variant="top" src={this.props.url} alt="" />
        </Card.Header>
        <Card.Body className="CardBody">
          <Button 
            role="button" 
            aria-label="Like/Unlike button"
            variant="link" 
            className="CardButton" 
            onClick={this.toggleLike}>
            {this.state.isLiked ? <BsHeartFill size="1.5em"/> : <BsHeart size="1.5em"/>}
          </Button>
          <OverlayTrigger key='right' placement='top' trigger='click'
            overlay={this.state.showTooltip? 
            <Tooltip className="CardTooltip"><BsClipboard/> Copied to Clipboard</Tooltip> 
            : 
            <div />}
          >
            <Button 
              role="button" 
              aria-label="Share link button"
              variant="link" 
              className="CardButton" 
              onClick={this.copyToClipboard}>
              <BsLink45Deg size="1.5em"/>
            </Button>
          </OverlayTrigger>
          <Card.Title className="text-light CardTitle">
            <span className="CardTitle">{this.props.title}</span> • <span className="CardDate">{this.props.date}</span>
          </Card.Title>
          <div className="mb-2 CardDescription">
            <ReadMoreReact 
              text={this.props.description} 
              readMoreText="... more"
            />
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export default ImageCard;