// import React, {useState} from 'react';
// import { NavLink } from 'react-router-dom';
// import { menuItem } from '../../Components/menuItem.js';

// import '../../styles/Google/Google.css'
// import CreateAdForm from '../../styles/Google/CreateAd.js';
// import AdsTable from './Ads.js';
// import { BorderRight } from '@mui/icons-material';


// const GoogleNav = ( {children, setShowComp} ) => {
    
//     const comp = (option) => {
//       setShowComp(option.comp)
//       alert('clicked');
      
//     }
    
//     return(


//       <div className='googlenav'>
//           {menuItem.map((item, index) => {
//             return(
//             <ul>
//               {item?.submenu?.map((element, index2) => {
//                 return(
//                 <div>
                
//                   {element?.options?.map((option, index3) => {
//                     return(
//                       <div>
//                       {console.log(option)}
//                       <div className='googlenavtitle'>
                        
//                       </div>
                     
//                       { 
//                       <div className='googlenavoption'style={{display: "inline-block",}}>
//                       <h5
//                       onClick={() => {comp(option)} } key={index3} style={{cursor: "pointer",}} >
//                         <div className=''>{option.icon}</div>
//                         <div>{option.name}</div>
//                       </h5>
//                       </div>
//                     }
                        
//                       </div>
                      
//                     )
//                   })}
//                 <main>{children}</main>
                
//                 </div>
//           )})}
//             </ul>
            
//          ) })}
          
//           </div>
//         )}



// const Google = () => {
//   const [showComp, setShowComp] = useState();
//     return(
//         <>
//         <div className='google-column'>
//           <div className='subnavigation'>
//             <GoogleNav setShowComp={setShowComp}  />
//           </div>
//           <div className='showcomponent'>
//             {showComp}
//           </div>
//         </div>
//         </>
//     )
// }


// export default Google;






import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';



function LeftTabsExample() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
         
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;