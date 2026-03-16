import { getPurchases, getEntrees, getVegetables, getSides, savePurchase } from "./dataAccess.js"
import { getOrder, isOrderComplete, clearOrder } from "./transientState.js"
import { FoodTruck } from "./FoodTruck.js"

export const Sales = async () => {
    const purchases = await getPurchases()

    const html = purchases.map(purchase => `
        <p>Receipt #${purchase.id} = $${purchase.total.toFixed(2)}</p>
    `).join("")

    return html
}

export const SalesEvents = () => {
    document.addEventListener("click", async (event) => {
        if (event.target.id === "purchase__btn") {
            if (isOrderComplete()) {
                const order = getOrder()

                const entrees = await getEntrees()
                const vegetables = await getVegetables()
                const sides = await getSides()

                const entree = entrees.find(e => e.id === order.entreeId)
                const vegetable = vegetables.find(v => v.id === order.vegetableId)
                const side = sides.find(s => s.id === order.sideId)

                const total = entree.price + vegetable.price + side.price

                await savePurchase(order.entreeId, order.vegetableId, order.sideId, total)
                clearOrder()
                FoodTruck()
            }
        }
    })
}