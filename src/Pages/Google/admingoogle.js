import React from "react";
import '../../styles/admingoogle.css'
import Accountsetup from './Accountsetup.js';
import Campaignsetup from "./Campaignsetup.js";
import AdGroupForm from './AdGroupsForm'
import BudgetForm from "./BudgetForm.js";
import OtherSetup from "./OtherSetup.js";
import { ImSearch } from "react-icons/im";
const Googleadmin = () => {
    
    return(
        <>
        <div className="admingoogle-searchBar">
    <input className="admingoogle-searchQueryInput" name="searchQueryInput" placeholder="Search...."  />
    <button className="admingoogle-searchQuerySubmit" type="submit" name="searchQuerySubmit"><ImSearch/></button>
    </div>
       <Accountsetup/>
       <Campaignsetup/>
       <AdGroupForm/>
       <BudgetForm/>
       <OtherSetup/>
        </>
    )
}

export default Googleadmin;