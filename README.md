# Dil-food-assignment

This project is built with Next.js and uses the Context API for state management.

## Project Structure

The project has the following structure:

- **components**: Contains reusable React components.
  - `Home.js`: Home page component.
  - `ProductDetails.js`: Product details page component.
  - `CartScreen.js`: Cart page component.
 

- **pages**: Contains Next.js pages for routing.
  - `index.js`: Home page.
  - `product/[productId].js`: Product details page.
  - `cart.js`: Cart page.

## Getting Started

To run the project locally on your system, follow these steps:

1. Install dependencies:

   ```bash
   npm install
## Run the development server:
npm run dev
Open http://localhost:3000 in your browser to view the app.

## State Management
The project uses the Context API for state management. The context is set up in AppContext.js and is used to manage the global state of the cart.
