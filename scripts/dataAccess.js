const baseURL = "http://localhost:8088"

export const getEntrees = () => {
    return fetch(`${baseURL}/entrees`).then(response => response.json())
}

export const getVegetables = () => {
    return fetch(`${baseURL}/vegetables`).then(response => response.json())
}

export const getSides = () => {
    return fetch(`${baseURL}/sides`).then(response => response.json())
}

export const getPurchases = () => {
    return fetch(`${baseURL}/purchases`).then(response => response.json())
}

export const savePurchase = (entreeId, vegetableId, sideId, total) => {
    const purchase = {
        entreeId,
        vegetableId,
        sideId,
        total: parseFloat(total.toFixed(2))
    }

    return fetch(`${baseURL}/purchases`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(purchase)
    }).then(response => response.json())
}