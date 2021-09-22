# Shopify Frontend Developer Intern Challenge (Winter 2022)

## Spacestagram Demo

The deployed version can be found at: https://shopify-challenge-at.netlify.app/

## Getting Started

1. Clone the repo: `git clone https://github.com/andreamtang/shopify-challenge.git`
2. Install dependencies: `yarn install` 
3. Start the application: `yarn start`
4. View the application at http://localhost:3000

## Features

### Technical Requirements

☑️ Search results should come from NASA’s free APIs, for which you’ll need a free API key from https://api.nasa.gov

☑️ Each image result should list at least a title, date of capture (ideally in earth_date) and a button to “like” that image.

☑️ Each image can be “liked”, and a user should be able to undo their “like”

☑️ The HTML that ends up being served client-side should be accessible and semantic (MDN reference)

### Additional Notes

In an effort to enhance the user experience, I chose to include a few changes in addition to the suggested design:

1. The options to load more content and scroll to top upon reaching the end of the page creates a more engaging experience than pagination.
2. The animated spinner provides a visual clue that content is loading.
3. Descriptions for each image are truncated in order to avoid a text-heavy page.
4. Users can interact with content (i.e., link sharing and "liking") by clicking icons, rather than text buttons, creating a more visually interesting experience.

## Technologies Used

- [ReactJS](https://reactjs.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [NASA Open API](https://api.nasa.gov/)

## Future Improvements

Given the time constraint, I was unable to include everything that I would ideally want for this project. Some things that can be implemented in the future are:

- Including the option to display content in chronological order and/or within a specific date range. 
- The ability to store a user's 'likes' so that they are retained if the user leaves or reloads the page.
- An animated background that resembles a starry night sky to further convey the feeling of outer space.
- Crop images (with the option to view the original image in a modal) so that all cards are of equal height to create a cleaner look. Alternatively, a masonry layout could be used instead of a grid.
- Serving the API key with a .env file.

## Screenshots

<p align="center">
<img width="500" alt="Screen Shot 2021-09-20 at 6 13 14 PM" src="https://user-images.githubusercontent.com/32750252/134097474-b6b36376-420d-45e7-8700-d8600b8a9dcc.png">
  <br> The page upon load.
</p>

---

<p align="center">
<img width="500" alt="Screen Shot 2021-09-20 at 6 18 36 PM" src="https://user-images.githubusercontent.com/32750252/134097820-25944a5c-76c7-402c-a823-b0c81cba1d5a.png">
  <br> The bottom of the page. Some images have been "liked".
</p>
