import React from "react";
import { Link } from "react-router-dom";

import Accountsetup from './Accountsetup.js';
import Campaignsetup from "./Campaignsetup.js";
import AdGroupForm from './AdGroupsForm'
import BudgetForm from "./BudgetForm.js";
import OtherSetup from "./OtherSetup.js";

const Googleadmin = () => {
    
    return(
        <>
        
       <Accountsetup/>
       <Campaignsetup/>
       <AdGroupForm/>
       <BudgetForm/>
       <OtherSetup/>
        </>
    )
}

export default Googleadmin;