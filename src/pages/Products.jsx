import {Navbar, Products_Hero, Products_List, About_Location, ProductCarousel
    } from "../components"

const Products = () => {
    return(
        <div>
            <Navbar />
            <Products_Hero />
            <ProductCarousel />
            {/*<Products_List />*/}
            <About_Location />
        </div>
    )

}
export default Products;