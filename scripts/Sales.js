import { getOrder, isOrderComplete, clearOrder } from "./transientState.js"

//goes to server and fetches purchase information
const getPurchases = () => {
    return fetch(`http://localhost:8088/purchases`).then(response => response.json())
}

 //creates purchase object w the ids and the total amount. parseFloat converts to number, toFixed rounds to the second decimal place. 
export const savePurchase = (entreeId, vegetableId, sideId, total) => {
    const purchase = {
        entreeId,
        vegetableId,
        sideId,
        total: parseFloat(total.toFixed(2))
    }
 //sends purchase to JSON server to be made into permanent data. POST is sending NEW data, .stringify converts to text 
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

