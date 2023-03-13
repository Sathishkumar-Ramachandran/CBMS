import React from "react";
import '../../styles/admingoogle.css'
import Accountsetup from '../../Components/google/Accountsetup.js';
import Campaignsetup from "../../Components/google/Campaignsetup.js";
import AdGroupForm from '../../Components/google/AdGroupsForm'
import BudgetForm from "../../Components/google/BudgetForm.js";
import OtherSetup from "../../Components/google/OtherSetup.js";
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