import { getPurchases, getEntrees, getVegetables, getSides, savePurchase } from "./dataAccess.js"
import { getOrder, isOrderComplete, clearOrder } from "./transientState.js"
import { FoodTruck } from "./FoodTruck.js"

//goes to server and fetches purchases
export const getPurchases = () => {
    return fetch(`http://localhost:8088/purchases`).then(response => response.json())
}

export const savePurchase = (entreeId, vegetableId, sideId, total) => {
    const purchase = {
        entreeId,
        vegetableId,
        sideId,
        total: parseFloat(total.toFixed(2))
    }

    return fetch(`http://localhost:8088/purchases`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(purchase)
    }).then(response => response.json())
}

export const Sales = async () => {
    const purchases = await getPurchases()

    const html = purchases.map(purchase => `
        <p>Receipt #${purchase.id} = $${purchase.total.toFixed(2)}</p>
    `).join("")

    return html
}

export const SalesEvents = () => {
    document.addEventListener("click", async (event) => {
        if (event.target.id === "purchase") {
            if (isOrderComplete()) {
                const order = getOrder()

                const entrees = await getEntrees()
                const vegetables = await getVegetables()
                const sides = await getSides()

                const entree = entrees.find(entree => entree.id === order.entreeId)
                const vegetable = vegetables.find(vegetable => vegetable.id === order.vegetableId)
                const side = sides.find(side => side.id === order.sideId)

                const total = entree.price + vegetable.price + side.price

                await savePurchase(order.entreeId, order.vegetableId, order.sideId, total)
                clearOrder()
                FoodTruck()
            }
        }
    })
}