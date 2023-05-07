import React from "react";
import '../../styles/admingoogle.css';
import AccountSetup from "../../Components/google/Accountsetup.js";
import Campaignsetup from "../../Components/google/Campaignsetup.js";
import AdGroups from '../../Components/google/AdGroupsSetup'
import GoogleBudget from "../../Components/google/GoogleBudget.js";
import OtherSetup from "../../Components/google/OtherSetup.js";
import { ImSearch } from "react-icons/im";
const Googleadmin = () => {
    
    return(
        <>
        <div className="admingoogle-searchBar">
            <input className="admingoogle-searchQueryInput" name="searchQueryInput" placeholder="Search...."  />
            <button className="admingoogle-searchQuerySubmit" type="submit" name="searchQuerySubmit"><ImSearch/></button>
        </div>
        <div>
            <AccountSetup/>
            <Campaignsetup/>
            <AdGroups/>
            <GoogleBudget/>
            <OtherSetup/>
        </div>
        </>
    )
}

export default Googleadmin;