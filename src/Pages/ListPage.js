import React from 'react';
import Component from './Component';
import jsonData from './data.json'
import './component.css'

const data = JSON.parse(JSON.stringify(jsonData));





export default function ListPage() {
    return (
        <div className="row p-4 listPage">
            {data.map((temp,index) => {
                return <Component data={temp} />
            }) }
            
        </div>
    )
}
