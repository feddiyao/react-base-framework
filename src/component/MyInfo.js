import React from 'react'
import cssobj from '@/css/style.css'

export default  function MyInfo() {
    return (
    <div>
        <h1 className={cssobj.title}>Bob</h1>
        <p>this is a paragraph</p>
        <ul>
            <li>Tailand</li>
            <li>Japan</li>
            <li>Nordic</li>
        </ul>
    </div>
    )
}
