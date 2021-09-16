import React from 'react';
import ImageCard from './ImageCard.js';
import axios from 'axios';

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
        this.setState({data: [] });
      });
  }

  render() {
    return (
      <div>
        {this.state.data.map(imageData => (
          <ImageCard
            key={imageData.url}
            title={imageData.title}
            description={imageData.explanation}
            url={imageData.url}
          />
        ))}
      </div>
    );
  }
}

export default ImageCardList;
