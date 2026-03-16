let currentOrder = {
    entreeId: null,
    vegetableId: null,
    sideId: null
}

export const setEntree = (id) => {
    currentOrder.entreeId = parseInt(id)
}

export const setVegetable = (id) => {
    currentOrder.vegetableId = parseInt(id)
}

export const setSide = (id) => {
    currentOrder.sideId = parseInt(id)
}

export const getOrder = () => {
    return { ...currentOrder }
}

export const isOrderComplete = () => {
    return (
        currentOrder.entreeId !== null &&
        currentOrder.vegetableId !== null &&
        currentOrder.sideId !== null
    )
}

export const clearOrder = () => {
    currentOrder.entreeId = null
    currentOrder.vegetableId = null
    currentOrder.sideId = null
}