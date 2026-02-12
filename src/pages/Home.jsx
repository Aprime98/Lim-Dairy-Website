import {Navbar, Home_Hero, Home_About, Home_Products, Home_Footer} from "../components";

const Home = () => {
    return(
        <div>
            <Navbar />
            <div className="">
                <Home_Hero />
                <Home_About />
                <Home_Products />
                <Home_Footer />
            </div>
        </div>

    )

}
export default Home;