const baseURL = "http://localhost:8088"

export const getEntrees = () => {
    return fetch(`${baseURL}/entrees`).then(res => res.json())
}

export const getVegetables = () => {
    return fetch(`${baseURL}/vegetables`).then(res => res.json())
}

export const getSides = () => {
    return fetch(`${baseURL}/sides`).then(res => res.json())
}

export const getPurchases = () => {
    return fetch(`${baseURL}/purchases`).then(res => res.json())
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
    }).then(res => res.json())
}