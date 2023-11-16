
import { useState } from 'react'


import './add-item.css'

export default function Additem(props) {
    const { quantity } = props;
    const [isAdd, setIsAdd] = useState(false)
    const [count, setCount] = useState(0)
    const addButton = () => {
        setIsAdd(true)
        setCount(1)
    }
    const decButton = () => {
        if (count == 1) {

            setIsAdd(false)
            setCount(0)

        } else {
            setCount(count - 1)
        }
    }
    const increment = () => {
        // console.log('innn')
        const val = count + 1;
        // console.log(val, 'val...')
        if (val <= quantity) {
            setCount(val)
        } else {
            alert('no...qty')
        }
    }
    return (
        <>
            <div className='add-item'>
                <div className='col-12 p-0 text-center'>
                    {
                        isAdd ?
                            <div className='row m-0  py-1 bg-success align-items-center bg-success text-white border-0'>
                                <div className='px-1 col-4 ' onClick={decButton}>-</div>

                                <div className='p-0 col-4 text-center'> {count}</div>

                                <div className='px-1 col-4' onClick={increment}>+</div>
                            </div>
                            :
                            <div className='px-3 py-1 bg-success text-white border-0' onClick={addButton} >ADD</div>
                    }
                </div>
            </div>
        </>
    )
}