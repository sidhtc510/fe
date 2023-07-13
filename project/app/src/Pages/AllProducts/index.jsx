import React, { useEffect } from "react";
import Wrapper from "../../components/UI/Wrapper";
import PageTitle from "../../components/UI/PageTitle";
import { useDispatch, useSelector } from "react-redux";

import ProductsContainer from "../../components/ProductsContainer";
import FilterSortBlock from "../../components/FiltersSortBlock";
import { fetchProducts } from "../../store/slice/productSlice";
// import { motion } from "framer-motion";

export default function AllProducts() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const products = useSelector((state) => state.products);


    return (
        // <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>

        <Wrapper>
            <PageTitle>All Products</PageTitle>

            <FilterSortBlock />
            {products.status === "loading" ? (
                <p>Loading...</p>
                ) : products.status === "error" ? (
                    "Error..."
                    ) : (
                        <ProductsContainer products={products} />
                        )}
        </Wrapper>
                        // </motion.div>
    );
}
