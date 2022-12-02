# Development

### Link to Deployed Website
`https://roundcapybara121.github.io/development-project`

### Goal and Value of the Application
This application can be used by businesses to sell plants online. 
This removes the need for an employee to manage business transactions and allows 
the consumer direct control over what they buy. For consumers, they can easily
all the plants this stores sells and have costs calculated for them. This allows
them to have more time to focus on whether they have enough money, or if they 
want to get certain items, in which they can remove from cart if they don't 
like it anymore. Further development of the site can lead to actual transactions
or more calculations such as taxes and shipping costs.

### Usability Principles Considered
Each image in the item card has an alt tag to remain accessible for certain
people who use text to speech. To give users an easier time to navigate through
the website, I laid out hierachy using color and different font sizes/weights.
For the website name and subsection headings, I used the font style "limelight"
to indicate some importance. For smaller texts that display extra information,
I used the font style "Courier New". I group information into a block of color.
For example, each plant card has a dark green background compared to the light
green used as the site's background. To further distiguish the cards from one 
another, I added an orange border. To improve learnability, I made sure all the 
buttons were the same style with an orange border, light green background, and 
text in the middle indicating what the button does. Additionally, the overall 
layout will not change from sorting or filtering. The plants will remain on the 
left and the options to change will stay on the right. Operations are simple,
usually requiring a click to activate something and then a reclick to turn it 
off. Hopefully this will improve memorability because operations shouldn't be
overally complicated and I have also included some small descriptions in case
there is any confusion.

### Organization of Components
I have 2 components: 1 for card with a plant's information and 1 for the item
in a cart. The plant item card component is located in plantItem.js and requires
me to pass in information for it from App.js for the cards to be displayed. 
Once the add to cart button of a card is hit, this will update the cart's state
and include the name of the plant that was added. In App.js, I made a component
that goes through each cart item and create a remove button.

### How Data is Passed Down Through Components
I have one component called plantItem where it will represent one card with
the plant's image, name, sunlight level, price, and an add to cart button. 
Within App.js, I map through the filtered/sorted plant data and create a 
card for each plant item. In which I pass in the item image, name, sunlight 
level, price, and the function to handle an add to cart action. These will act 
as props in the PlantItem function in plantItem.js where I decompose the prop 
into the item fields to be displayed. Once an item is added to the cart, the 
cart state will update to include the item name and price. Then my remove 
button component in App.js will look at the items in the cart state in order to 
operate.

### How the User Triggers State Changes
The user can trigger state changes when hitting the filter, sort, reset, add 
to cart, or remove. The checkboxes used in filter and sort start off as "" or the 
empty state. Once a user clicks on the box, the checkbox will change to the 
"checked" state and fill in the checkbox. The "checked" state will trigger
a change in the state of the plants displayed in the grid accordingly. This 
means the plants displayed will either be filtered or sorted and then updated 
into the state of the plant grid. The reset button will sort the plant data 
based on the item IDs from lowest to highest and then update the state of 
the plant grid as a result. Finally, the add to cart button will change the 
state of the cart array and total price displayed by adding a new item and the
price of that item. The remove button, represented by "X" will update the state 
of the cart to exclude the item and then subtract the price of the item from
the total price.
