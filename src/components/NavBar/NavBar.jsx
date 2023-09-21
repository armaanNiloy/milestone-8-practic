import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill, RiCloseFill } from 'react-icons/ri';


const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { name: "Home", path: "/", id: 1 },
        { name: "Products", path: "/products", id: 2 },
        { name: "Product A", path: "/products/1", id: 3 },
        { name: "About Us", path: "/about", id: 4 },
        { name: "Contact Us", path: "/contact", id: 5 }
    ]

    return (
        <nav>
            <div className="md:hidden text-2xl" onClick={() => setOpen(!true)}>
                {
                    open === true ?
                        <RiMenu2Fill></RiMenu2Fill>
                        :
                        <RiCloseFill></RiCloseFill>
                }
            </div>
            <ul className="md: flex mr-4">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;