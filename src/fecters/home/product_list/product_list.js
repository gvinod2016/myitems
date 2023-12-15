import SmallCard from "../../../component/small-cart/small-cart";
import "./product_list.css"

export default function ProductList(props) {
    const { row } = props;
    return (
        <>
            <div className="product-list ">
                {
                    row && row.map((row) => {
                        // console.log(row, "....")
                        return <>
                                    <SmallCard row={row}></SmallCard>
                                </>
                    })
                }

            </div>
        </>

    )
}