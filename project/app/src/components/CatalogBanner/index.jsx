import React, { useEffect } from "react";
import Button from "../UI/Button";
import Wrapper from "../UI/Wrapper";
import { useSelector } from "react-redux";
import CategoriesContainer from "../CategoriesContainer";
import s from "./s.module.css";
import { Link } from "react-router-dom";

export default function CatalogBanner() {
    const categories = useSelector((state) => state.categories);
    const fourCategoryItems = categories.list.slice(0, 4);

    return (
        <Wrapper>
            <div className={s.catBanWrapper}>
                <div className={s.titleButton}>
                    <p>Catalog</p>
                    <Link to="/categories">
                        <Button className="transp">All categories</Button>
                    </Link>
                </div>
                <CategoriesContainer categories={fourCategoryItems} />
            </div>
        </Wrapper>
    );
}
