import {Navbar, Products_Hero, About_Location, Products_Card, Products_List
    } from "../components"

const Products = () => {
    return(
        <div>
            <Navbar />
            <Products_Hero />
            <Products_List />
            <About_Location />
        </div>
    )

}
export default Products;