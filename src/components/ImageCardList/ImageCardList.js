import React from 'react';
import ImageCard from '../ImageCard/ImageCard.js';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';

const API_KEY = '49gRciJcK9SCUEdVg3J4exN2A6cIo1pfM6Hs7zjL'
const IMAGE_COUNT = 6

class ImageCardList extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages() {
    axios
      .get(`https://api.nasa.gov/planetary/apod?count=${IMAGE_COUNT}&api_key=${API_KEY}`)
      .then(res => {
        const data = res.data
        this.setState({ data });

        console.log(data);
      })
      .catch(error => {
        console.log(error);
        this.setState({ data: [] });
      });
  }

  render() {
    return (
      <Container className="mt-5">
        <Row xs={1} sm={1} md={2} lg={3}>
          {this.state.data.map(imageData => ( 
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
      </Container>
    );
  }
}

export default ImageCardList;
