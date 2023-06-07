import React from "react";

import s from "./s.module.css";
import { Link } from "react-router-dom";

export default function RolesContainer() {
    return (
        <div className={s.role_cards}>
            <Link to="/admin">
                <div>Admin </div>
            </Link>

            <Link to="/customer">
                <div>Customers</div>
            </Link>
        </div>
    );
}
