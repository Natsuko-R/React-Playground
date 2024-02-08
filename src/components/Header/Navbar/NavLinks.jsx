import React from "react";
import { Link } from "react-router-dom";
import { links } from "./links";

const NavLinks = () => {
    return (
        <div className="flex">

            {links.map((link) => (
                <div key={link.name} className="px-1 text-left text-sm md:cursor-pointer group">

                    <h1 className="py-3">{link.name}</h1>

                    {link.submenu && (
                        <div className="absolute top-8 hidden group-hover:block hover:block">
                            <div className="bg-sky-50 p-3.5">
                                {link.sublinks.map(sub => (
                                    <div key={sub.name}>
                                        <h1 className="text-lg font-semibold">{sub.name}</h1>
                                        {sub.sublink.map((s) => (
                                            <div key={s.name} className="text-sm text-gray-600 my-2.5">
                                                <Link to={s.link} className="hover:text-primary">{s.name}</Link>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}

        </div>
    );
};

export default NavLinks;
