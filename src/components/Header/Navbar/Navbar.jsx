import React from "react";
import NavLinks from "./NavLinks";
import PageName from "./PageName";
import UserMenu from "./UserMenu";

const Navbar = () => {

    return (
        <nav className="flex justify-between px-10 my-2 bg-slate-400 ">
            <div className="">
                <NavLinks />
            </div>
            <div className="">
                <PageName />
            </div>
            <div className="">
                <UserMenu />
            </div>
        </nav>
    );
};

export default Navbar;
