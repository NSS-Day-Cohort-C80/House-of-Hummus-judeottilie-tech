import { FoodTruck } from "./FoodTruck.js"

//needs to be async/await since the majority of the functions it's waiting on are also async/await. cannot render page unless it returns that info, so waiting for that info in other functions to be returned before running
const renderAllHTML = async () => {
    await FoodTruck()
}
//renders the whole page with all the information, calls FoodTruck() that fetches and builds the HTML. page will not run without this render
renderAllHTML()