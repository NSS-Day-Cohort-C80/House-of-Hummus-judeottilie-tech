import { getEntrees } from "./dataAccess.js"
import { setEntree } from "./transientState.js"

export const Entrees = async () => {
    const entreesArray = await getEntrees()

    const html = `
        <section class="entrees">
            <h2>Entrees</h2>
            ${entreesArray.map(entree => `
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