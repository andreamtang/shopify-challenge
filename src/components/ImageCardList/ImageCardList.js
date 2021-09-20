import React from 'react';
import ImageCard from '../ImageCard/ImageCard.js';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button, Spinner } from 'react-bootstrap';
import { BsArrowUp } from 'react-icons/bs'
import './ImageCardList.css';

const API_KEY = '49gRciJcK9SCUEdVg3J4exN2A6cIo1pfM6Hs7zjL'
const IMAGE_COUNT = 12

class ImageCardList extends React.Component {
  state = {
    images: [],
    isLoading: true,
    isScrollToTopVisible: false
  }

  componentDidMount() {
    this.fetchImages();
    
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  fetchImages = async () => {
    this.setState({ isLoading: true });
    try {
      const res = await axios.get(`https://api.nasa.gov/planetary/apod?count=${IMAGE_COUNT}&api_key=${API_KEY}`);
      const data = res.data;
      this.setState({ 
        images: [...this.state.images, ...data], 
        isLoading: false });

      console.log(data);
    }
    catch (error) {
      console.error(error);
      this.setState({ 
        images: this.state.images, 
        isLoading: false });
    }
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        isScrollToTopVisible: true
      });
    } else {
      this.setState({
        isScrollToTopVisible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { isScrollToTopVisible } = this.state;
    return (
      <Container className="pb-5 ImageCardListContainer">
        <Row xs={1} sm={1} md={2} lg={3}>
          {this.state.images.map(imageData => ( 
            <Col key={imageData.url}>
              <ImageCard
                title={imageData.title}
                date={imageData.date}
                description={imageData.explanation}
                url={imageData.url}
                mediaType={imageData.media_type}
              />
            </Col>
          ))}
        </Row>
        <div className="text-center">
          {(this.state.isLoading ?
            <Spinner animation="border" variant="light" />
            :
            <Button variant="outline-light" className="Button" onClick={this.fetchImages}>Load More</Button>
          )}
        </div>
        {isScrollToTopVisible && (
          <BsArrowUp className="UpArrow" onClick={() => this.scrollToTop()}/>
        )}
      </Container>
    );
  }
}

export default ImageCardList;
