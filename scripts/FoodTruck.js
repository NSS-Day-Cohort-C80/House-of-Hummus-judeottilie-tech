import { Sales } from "./Sales.js"
import { Entrees, EntreeEvents } from "./Entrees.js"
import { Vegetables, VegetableEvents } from "./Vegetables.js"
import { SideDishes, SideDishEvents } from "./SideDishes.js"
import { OrderButton, OrderButtonEvents } from "./OrderButton.js"

//async function, awaiting the fetch calls so it has the information it needs. 
export const FoodTruck = async () => {
    //connects to the container in the index.html and puts all this info inside of it. each of the awaits call the info and then move to the next once that info is successfully returned. each function is fetching from the server in their own code on their own modules, so we need to wait for that to be returned
    document.querySelector("#container").innerHTML = `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <div class="foodtruck__options">
            ${await Entrees()}
            ${await Vegetables()}
            ${await SideDishes()}
        </div>

        <article> 
            ${await OrderButton()}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${await Sales()}
        </article>
    `
//called after the HTML. can only listen for the event after the HTML is created. will be invoking the events to save the order information 
    EntreeEvents()
    VegetableEvents()
    SideDishEvents()
    OrderButtonEvents()
}
