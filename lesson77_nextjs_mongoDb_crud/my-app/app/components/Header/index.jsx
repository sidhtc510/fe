"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const currentPath = usePathname();

    const links = [
        { title: "Main page", path: "/" },
        { title: "Admin page", path: "/admin" },
    ];

    return (
        <nav className="flex gap-3 border py-2 px-3 bg-gray-100">
            {links.map(({ title, path }) => {
                return (
                    <Link className={clsx("text-blue-600 text-xl", {
                        "underline": currentPath === path
                    })} key={title} href={path}>
                        {title}
                    </Link>
                );
            })}
        </nav>
    );
}
