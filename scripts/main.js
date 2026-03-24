import { FoodTruck } from "./FoodTruck.js"

//
const renderAllHTML = async () => {
    await FoodTruck()
}
//renders the whole page with all the information, calls FoodTruck() that fetches and builds the HTML. page will not run without this render
renderAllHTML()