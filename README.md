# **Goodreads-Webapp**

This application uses goodreads api to look for books by title, author or isbn code.


# Running the application locally

**Prerequisites:** You need to have Node + NPM or yarn installed.

Having done that, here is how to run the application locally in development mode.

**Clone the repo:**
**Install dependencies:**
 >  yarn install

**Starting the application in development mode:**
 - Run following command from the root folder
 > yarn start

**Running the production mode:**
  - Run following command from the root folder
   > yarn start:prod

# Testing the App:
- To test the clint (React) components `cd client` and run
    > yarn test

# Features In Current Version:

1. Search for books by title, author, or ISBN.
2. Displays paginated books.
3. See the description and rating, and other details by clicking on individual book.

# Future Implementation:

1. "Show More" in description instead of scroll
2. responsive pages 
3. moving xml parsing logic to express server
