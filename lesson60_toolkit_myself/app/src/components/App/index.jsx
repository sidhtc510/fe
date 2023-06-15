import { useDispatch, useSelector } from "react-redux";
import {
    fetchProducts,
    incrementAction,
} from "../../store/slice/productsSlice";
import { useEffect } from "react";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const { products, status } = useSelector((state) => state.products);

    return (
        <div>
            {status === "loading" ? (
                <p>LOADING ... </p>
            ) : (
                products.map((el) => (
                    <h2
                        style={{
                            userSelect: "none",
                            cursor: "pointer",
                            padding: 20,
                        }}
                        key={el.id}
                        onClick={() => dispatch(incrementAction(el.id))}
                    >
                        {el.title} -<b> {el.price}</b>
                    </h2>
                ))
            )}
        </div>
    );
}

export default App;
