import { Sales } from "./Sales.js"
import { Entrees, EntreeEvents } from "./Entrees.js"
import { Vegetables, VegetableEvents } from "./Vegetables.js"
import { SideDishes, SideDishEvents } from "./SideDishes.js"
import { SalesEvents } from "./Sales.js"

export const FoodTruck = async () => {
    document.querySelector("#app").innerHTML = `
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
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${await Sales()}
        </article>
    `

    EntreeEvents()
    VegetableEvents()
    SideDishEvents()
    SalesEvents()
}
