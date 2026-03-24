import { getOrder, isOrderComplete, clearOrder } from "./transientState.js"
import { FoodTruck } from "./FoodTruck.js"
import { savePurchase } from "./Sales.js"
 
//goes to server and fetches all information, each listed in the name of each get function
const getEntrees = () => {
    return fetch("http://localhost:8088/entrees").then(response => response.json())
}
 
const getVegetables = () => {
    return fetch("http://localhost:8088/vegetables").then(response => response.json())
}
 
const getSides = () => {
    return fetch("http://localhost:8088/sides").then(response => response.json())
}
 
 //order button "Purchase Combo" html string code to be invoked on FoodTruck.js along side OrderButtonEvents()
export const OrderButton = () => {
    return `
        <article>
            <button id="purchase">Purchase Combo</button>
        </article>
    `
}
 //checking if the Purchase Combo button was clicked, runs if yes
export const OrderButtonEvents = () => {
    document.addEventListener("click", async (event) => {
        if (event.target.id === "purchase") {
            if (isOrderComplete()) {
                const order = getOrder()
                //checks if selection is made
                const entrees = await getEntrees()
                const vegetables = await getVegetables()
                const sides = await getSides()
                    //.find is looking thru the individual arrays and returning the ones that match the id of the user selection. ALL of the sections have to have a radio button selected or else nothing happens and the button cannot be clicked
                const entree = entrees.find(entree => entree.id === order.entreeId)
                const vegetable = vegetables.find(vegetable => vegetable.id === order.vegetableId)
                const side = sides.find(side => side.id === order.sideId)
 
                const total = entree.price + vegetable.price + side.price
                    //adds the price together, saves to JSON server, clears, then rerenders for the new reciept to show up
                await savePurchase(order.entreeId, order.vegetableId, order.sideId, total)
                clearOrder()
                FoodTruck()
            }
        }
    })
}