## Solution 

Requirements:
- Add new VideoGameSales View
- Each item in the VideoGameSales View must show the rank, name, platform, year, publisher and global_sales
- VideoGameSales View must have a filter by genre
- Infinite scrolling / Pagination
- Utilize Material UI components

Assessing solution:
- After reading the requirements I attempted to keep the UI minimilistic and similar to the views that were already established.
- Utilizing react hooks "useEffect" I've retrieved the video game sales JSON using fetch from the API endpoint provided ('https://codingtestfe.dev-illumix.com/videogamesales').
- I created a VideoGameSales component that inherits the sales data fetched from the API to display each sales object. Here I chose to use Material UI's "Chip" element to display the data in a simple format to display rank (top number in each card), name, platform, year, publisher and global_sales.
- To create the filter by genre feature I've created an input using Material UI that stores user input (genre). I've created a filter function that checks if the input value matches the genre of any sales object which will then display the corresponding matches.
- For pagination, I kept track of the current page number and set the amount of items per page to be 6. Inside of the "filterSales" function I've sliced the sales data according to which page the user is viewing. I've also decided to hide the pagination UI if the user is typing in the input when filtering by genre.

Additional Upgrades for future:
- It would be great to add a filter function for all of the sub categories in the sales data such as filtering by rank, platform, year, publisher or the global sales count.
- Adding a graph, perhaps using Charts.js would be a great feature that help users visualize the data being presented!

## Quick Start

1. yarn install
2. yarn start

## Questions
- Please let me know if you have any issues running or any questions about the project. I'd appreciate any feedback!