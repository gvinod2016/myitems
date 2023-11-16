//free difine
import { useEffect, useState } from "react"
import axios from 'axios';

// json config data
// import { _items } from "../../../mock/items"

// css
import "./home.css"
import ProductList from "./product-list/product-list";

export default function Home() {
    const [productList, setProductList] = useState(null)
    useEffect(() => {
        const url = './mock/items.json'
        axios.get(url).then((res) => {
            const data = res.data;
            console.log(data, "mock-data")
            setProductList(data)
        }).catch((err) => {
            console.log(err, 'error-data')
            setProductList(err)
        })
    }, [])
    if (!productList) {
        return 'loading....'
    }
    return (
        <>
            <div className="sec-home">
                <ProductList productList={productList}></ProductList>
            </div>
        </>
    )
}