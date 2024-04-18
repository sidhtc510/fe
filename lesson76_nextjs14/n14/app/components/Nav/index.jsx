"use client";
import Link from "next/link";
import React from "react";
import s from './s.module.css'

export default function Nav() {
    return (
        <nav className={s.navWrap}>
            {" "}
            <Link href="/">Home</Link>
            <Link href="/ClientFetchPage">Client Fetch</Link>
            <Link href="/ServerFetchPage">Server Fetch</Link>
            <Link href="/StateManagerFetching">State Manager Fetch</Link>
        </nav>
    );
}
