export const getEntrees = () => {
    return fetch(`http://localhost:8088/entrees`).then(response => response.json())
}

export const getVegetables = () => {
    return fetch(`http://localhost:8088/vegetables`).then(response => response.json())
}

export const getSides = () => {
    return fetch(`http://localhost:8088/sides`).then(response => response.json())
}

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