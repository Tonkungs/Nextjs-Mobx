import React from "react"
import { observer, inject } from 'mobx-react';

function countG(props) {

    const store = props.store;
    console.log('props', store);
    return (
        <div>
            {/* <h2>Total: {store.numOfGroceries()}</h2> */}
            <div className="list">
                {store.groceries.map((g, index) => {
                    return (
                        <li className="grocery"  key={g.index}>{g.name}</li>  
                    )
                })}
            </div>
            <button onClick={()=>{
                store.add({
                    index: Math.random(),
                    name:"test"
                })
            }}>เพิ่ม</button>
            <button onClick={()=>{
                store.delete()
            }}>ลบล่าสุด</button>
            <button onClick={()=>{
                store.totalAmount()
            }}>total</button>
        </div>
    )
}
export default inject('store')(observer(countG))