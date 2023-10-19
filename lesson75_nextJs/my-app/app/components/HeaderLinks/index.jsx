"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const HeaderLinks = ({ links }) => {
    const pathName = usePathname();

    return (
        <>
            {links.map((link) => {
                const isActive = link.path === pathName;
                return (
                    <Link key={link.name} href={link.path} className={isActive ? "text-blue-500 underline font-bold" :  "text-blue-500 font-bold" }>
                        {link.name}
                    </Link>
                );
            })}
        </>
    );
};

export default HeaderLinks;
