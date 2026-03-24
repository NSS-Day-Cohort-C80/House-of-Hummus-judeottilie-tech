import { setSide } from "./transientState.js"

//goes to server and fetches sides
const getSides = () => {
    return fetch(`http://localhost:8088/sides`).then(response => response.json())
}


//builds HTML, await sides data before moving to next step. when info is returned, runs the .map array method part of the function, looping through each side and returning built radio buttons w their information
export const SideDishes = async () => {
    const sides = await getSides()

    const html = `
        <section class="sides">
            <h2>Side Dishes</h2>
            ${sides.map(side => `
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