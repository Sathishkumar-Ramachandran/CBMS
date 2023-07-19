import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { menuItem } from '../../Components/menuItem.js';
import '../../styles/Google/Google.css';
import CreateAdForm from '../../styles/Google/CreateAd.js';
import AdsTable from './Ads.js';

const GoogleNav = ({ children, showComp, setShowComp }) => {
  return (
    <div className='googlenav'>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={showComp}
        onChange={(event, newValue) => setShowComp(newValue)}
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {menuItem.map((item, index) => (
          <>
            {item?.submenu?.map((element, index2) => (
              <>
                {element?.options?.map((option, index3) => (
                  <Tab
                    key={index3}
                    label={
                      <div>
                        <div className=''>{option.icon}</div>
                        <div>{option.name}</div>
                      </div>
                    }
                    onClick={() => setShowComp(option.comp)}
                  />
                ))}
                <main>{children}</main>
              </>
            ))}
          </>
        ))}
      </Tabs>
    </div>
  );
};

const Google = () => {
  const [showComp, setShowComp] = useState(null);

  return (
    <>
      <div className='google-column'>
        <div className='subnavigation'>
          <GoogleNav setShowComp={setShowComp} showComp={showComp} />
        </div>
        <div className='showcomponent'>{showComp}</div>
      </div>
    </>
  );
};

export default Google;
