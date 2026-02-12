import {Navbar,
    About_Gallery,
    About_Hero,
    About_History,
    About_Location,
    About_Vision,} from "../components"

const Products = () => {
    return(
        <div>
            <Navbar />
            <About_Hero />
            <About_Vision />
            <About_History/>
            <About_Gallery />
            <About_Location />
        </div>
    )

}
export default Products;