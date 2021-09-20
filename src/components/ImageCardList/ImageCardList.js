import React from 'react';
import ImageCard from '../ImageCard/ImageCard.js';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button } from 'react-bootstrap';
import './ImageCardList.css';

const API_KEY = '49gRciJcK9SCUEdVg3J4exN2A6cIo1pfM6Hs7zjL'
const IMAGE_COUNT = 6

class ImageCardList extends React.Component {
  state = {
    images: []
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    try {
      const res = await axios.get(`https://api.nasa.gov/planetary/apod?count=${IMAGE_COUNT}&api_key=${API_KEY}`);
      const data = res.data;
      this.setState({ images: [...this.state.images, ...data] });

      console.log(data);
    }
    catch (error) {
      console.error(error);
      this.setState({ images: this.state.images });
    }
  }

  render() {
    return (
      <Container className="pt-5 pb-5">
        <Row xs={1} sm={1} md={2} lg={3}>
          {this.state.images.map(imageData => ( 
            imageData.media_type === "image" && (
              <Col key={imageData.url}>
                <ImageCard
                  title={imageData.title}
                  date={imageData.date}
                  description={imageData.explanation}
                  url={imageData.url}
                />
              </Col>
            )
          ))}
        </Row>
        <div className="text-center">
          <Button variant="outline-light" className="Button" onClick={this.fetchImages}>Load More</Button>
        </div>
      </Container>
    );
  }
}

export default ImageCardList;
