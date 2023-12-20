//free difine
import { useEffect, useState } from "react"
import axios from 'axios';
import _itemsUserData from '../../mock-data/items.json'

// json config data 
// import { _items } from "../../../mock/items"

// css
import "./home.css"
// import ProductList from "./product_list";
import Tittle from "../../component/tittle";
import { useDispatch, useSelector } from 'react-redux'
import ProductList from "./product_list/product_list";

export default function Home(props) {
    const dispatch = useDispatch()
    // const selector = useSelector()

    // const countVal = useSelector(state => {
    //     console.log(state, 'state')
    //     return state
    // })
    const { count, addCount } = props
    // console.log(count, 'countVal...')
    const [productList, setProductList] = useState(null)
    const [searchData, setSearchData] = useState(null)
    useEffect(() => {

        // console.log( "mock-data...")
        const url = _itemsUserData
        axios.get(url).then((res) => {
            const data = res.data;
            console.log(data, "mock-data....")
            // setProductList(data)
            // // console.olog(data)
        }).catch((err) => {
            console.log(err, 'error-data....')
            // setProductList(err)
        })
    }, [])

    // const onchaigeData = (e) => {
    //     const inputVal = e && e?.target?.value
    //     // const inputName = e && e?.target?.name
    //     // setSearchData({...searchData, [inputName]:inputVal})
    //     setSearchData(inputVal, "search....")
    //     console.log(inputVal, "inputvalue", typeof (searchData), "search....")

    // }
    // const onclickData = () => {
    //     console.log(productList, "data....")
    //     const filterData = productList.filter((row) => {
    //         if (row.name.toLowerCase().includes(searchData.toLowerCase())) {
    //             console.log(row, "row")
    //             return row
    //         }
    //     })
    //     console.log(filterData, "fff...")
    //     setProductList(filterData)
    // }
    // const recentList = productList.filter((row)=>{
    //             if(row.type=="recent"){

    //             }
    // })
    const addCountVal = () => {
        dispatch(addCount(1))
    }
    if (!productList) {
        return <div className="text-center">
            <h2>loading....</h2>
        </div>
    }
    return (
        <>
            <div className="sec-home row m-0 px-5 pb-4">
                <nav className="nave-bar col-2 ">
                    <h1 onClick={addCountVal}>Ttitle</h1>
                    {/* <Filterdata></Filterdata>* */}
                </nav>
                <div className="col-10">
                    {/* <SearchBare onchaigeData={onchaigeData} onclickData={onclickData}></SearchBare> */}
                    {
                        productList && productList.map((row) => {
                            return (
                                <>
                                    <div>
                                        <Tittle row={row}></Tittle>
                                        {/* <ProductList row={row.prodect.slice(0, 6)}></ProductList> */}
                                        <ProductList row={row.prodect.slice(0, 6)}></ProductList>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}