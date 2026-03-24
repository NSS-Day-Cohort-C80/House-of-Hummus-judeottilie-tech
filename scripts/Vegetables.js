import { setVegetable } from "./transientState.js"

//goes to server and fetches vegetables
const getVegetables = () => {
    return fetch(`http://localhost:8088/vegetables`).then(response => response.json())
}
//builds HTML, await veggie data before moving to next step. when info is returned, runs the .map array method part of the function, looping through each veggie and returning built radio buttons w their information
export const Vegetables = async () => {
    const vegetablesArray = await getVegetables()

    const html = `
        <section class="vegetables">
            <h2>Vegetables</h2>
            ${vegetablesArray.map(vegetable => `
                <div>
                    <input 
                        type="radio" 
                        name="vegetable" 
                        value="${vegetable.id}" 
                        id="vegetable--${vegetable.id}" 
                    />
                    <label for="vegetable--${vegetable.id}">
                        ${vegetable.type} - $${vegetable.price.toFixed(2)}
                    </label>
                </div>
            `).join("")}
        </section>
    `

    return html
}

//click event checking if user clicks radio buttons, checks if clicked radio button is an vegetable and looks at its name, if it matches, saves that ID to the transient state 
export const VegetableEvents = () => {
    document.addEventListener("change", (event) => {
        if (event.target.name === "vegetable") {
            setVegetable(event.target.value)
        }
    })
}