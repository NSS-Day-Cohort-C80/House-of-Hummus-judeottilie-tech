import { setEntree } from "./transientState.js"


//goes to server and fetches entrees
const getEntrees = () => {
    return fetch(`http://localhost:8088/entrees`).then(response => response.json())
}

//entrees function is awaiting getEntrees, once it returns, function builds HTML and exports it
export const Entrees = async () => {
    const entrees = await getEntrees()

    // the .map array method is looping thru each entree, turning them into radio buttons w their specific info (name and price). 
    // .join("") is bringing the HTML string together
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

//click event checking if user clicks radio buttons, checks if clicked radio button is an entree and looks at its name, if it matches, saves that ID to the transient state 
export const EntreeEvents = () => {
    document.addEventListener("change", (event) => {
        if (event.target.name === "entree") {
            setEntree(event.target.value)
        }
    })
}