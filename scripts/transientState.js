
//empty object with null properties so they can be filled with actual values once the options have been selected. this will be stored in the transient state until the user selects the purchase button, which will make it into permanent date
let currentOrder = {
    entreeId: null,
    vegetableId: null,
    sideId: null
}

//turning the values into numbers if the id matches the selection 
export const setEntree = (id) => {
    currentOrder.entreeId = parseInt(id)
}

export const setVegetable = (id) => {
    currentOrder.vegetableId = parseInt(id)
}

export const setSide = (id) => {
    currentOrder.sideId = parseInt(id)
}
//returns the object with the filled values as numbers
export const getOrder = () => {
    return { ...currentOrder }
}

//checks the object formed above, checks if the property is NOT null, and then checks the next property to see if it has a value now too. 
export const isOrderComplete = () => {
    return (
        currentOrder.entreeId !== null &&
        currentOrder.vegetableId !== null &&
        currentOrder.sideId !== null
    )
}
//clears the transient state data so it can be refreshed and hold new data as a new selection is made
export const clearOrder = () => {
    currentOrder.entreeId = null
    currentOrder.vegetableId = null
    currentOrder.sideId = null
}