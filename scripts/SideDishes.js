import { getSides } from "./dataAccess.js"
import { setSide } from "./transientState.js"

export const SideDishes = async () => {
    const sidesArray = await getSides()

    const html = `
        <section class="sides">
            <h2>Side Dishes</h2>
            ${sidesArray.map(side => `
                <div>
                    <input 
                        type="radio" 
                        name="side" 
                        value="${side.id}" 
                        id="side--${side.id}" 
                    />
                    <label for="side--${side.id}">
                        ${side.title} - $${side.price.toFixed(2)}
                    </label>
                </div>
            `).join("")}
        </section>
    `

    return html
}

export const SideDishEvents = () => {
    document.addEventListener("change", (event) => {
        if (event.target.name === "side") {
            setSide(event.target.value)
        }
    })
}