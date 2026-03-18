import { getVegetables } from "./dataAccess.js"
import { setVegetable } from "./transientState.js"

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