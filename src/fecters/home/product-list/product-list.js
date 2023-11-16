import SmallCard from "../../../component/small-cart/small-cart";

import './product-list.css'
export default function ProductList(props) {
    const { productList } = props;
    return (
        <div className="container product-list px-4 py-5">
            {
                productList && productList.map((row) => {
                    return <SmallCard row={row}></SmallCard>
                })
            }

        </div>
    )
}