import React from 'react'
import ReactDOM from 'react-dom'

// ReactDOM.render(
// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
// </ul>, document.getElementById('root'))

const myh1 = React.createElement('h1', {id: 'myh1'}, '这是一个大大的H1')

ReactDOM.render(myh1, document.getElementById('root'))
