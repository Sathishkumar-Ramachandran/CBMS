
import React from 'react'
import '../styles/Main.css';
import Linechart from './Charts/Linechart';
import PieRechart from './Charts/PieRechart';
import Dashboardtable from './Charts/Dashboardtable'
const Main = () => {
  return (
    <>
    <div className="cardContainer">
<div className="card1" style={{background:"#cee5d0"}}>
<h2></h2>
<p></p>
</div>
<div className="card2">
<h2></h2>
<p></p>
</div>
</div>

<div className='card-total'>
<div className="card" >
<h2>Double Engine</h2>
<p></p>
</div>
<div className="card">
<h2>Double Engine</h2>
<p></p>
</div>
<div className="card">
<h2>Double Engine</h2>
<p></p>
</div>
</div>
<div className='chart-main'>
<PieRechart className='piechart'/>
<Linechart/>
</div>
{/* <Dashboardtable/> */}
</>


  )
}

export default Main;

