import { getVegetables } from "./dataAccess.js"
import { setVegetable } from "./transientState.js"

//goes to server and fetches vegetables
export const getVegetables = () => {
    return fetch(`http://localhost:8088/vegetables`).then(response => response.json())
}

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

export const VegetableEvents = () => {
    document.addEventListener("change", (event) => {
        if (event.target.name === "vegetable") {
            setVegetable(event.target.value)
        }
    })
}