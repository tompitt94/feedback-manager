# feedback-manager

## Project Description and Outcome

I started this project in my own time to cure a problem at my place of work. The company operates on a large number of marketplaces and receives large volumes of customer feedback each week. Previously it has only been feedbackon the likes of Amazon, eBay that might be captured and analysed but we were missing a big part of the puzzle.

In order to accurately analyse the feedbakc to make improvement to the service, there was key data needed alongside it. 

1. What is the nature of the feedback (Returns Service, Delivery Time, Product Quality, Customer Serivce, etc)
2. Which marketplace and country
3. What was the date the feedback was left?
4. Which delivery company was used?

This project included creating a modal that would be incorporated into an existing part of the system used daily by the Customer Service Team. The modal would allow the user to select the feedback categroy from a pre-defined list, enter the comments from the customer and add it directly into the company database meaning it could be used in conjunction with the order data we had already.

The analysis screen would allow the user to filter based on a particular marketplace or preset data ranges (3o days, 60 days, etc). This would display a line graph showing the volume of feedback recieved by date and a pie chart displaying the category % based on the selected filters.

The project was built using Vue 2, Google Charts, Bulma and Font Awesome. This repo includes some example data that was generated randomly.

Once completed and tested it was presented to the Development team at my workplace for review and was successfully merged and put live. Now is use it has helped us to review and take action on customer feedback from across the world.
