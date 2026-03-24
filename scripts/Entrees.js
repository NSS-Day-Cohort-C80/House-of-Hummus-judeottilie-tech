import { getEntrees } from "./dataAccess.js"
import { setEntree } from "./transientState.js"


//goes to server and fetches entrees
export const getEntrees = () => {
    return fetch(`http://localhost:8088/entrees`).then(response => response.json())
}

export const Entrees = async () => {
    const entrees = await getEntrees()

    const html = `
        <section class="entrees">
            <h2>Entrees</h2>
            ${entrees.map(entree => `
                <div>
                    <input 
                        type="radio" 
                        name="entree" 
                        value="${entree.id}" 
                        id="entree--${entree.id}" 
                    />
                    <label for="entree--${entree.id}">
                        ${entree.name} - $${entree.price.toFixed(2)}
                    </label>
                </div>
            `).join("")}
        </section>
    `

    return html
}

export const EntreeEvents = () => {
    document.addEventListener("change", (event) => {
        if (event.target.name === "entree") {
            setEntree(event.target.value)
        }
    })
}