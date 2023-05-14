import React, { useState } from 'react';
import axios from 'axios';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { Padding } from '@mui/icons-material';

const CreateGoogleAdsAccountForm = () => {
  const [managerAccountId, setManagerAccountId] = useState('');
  const [newCustomerEmail, setNewCustomerEmail] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [currencyCode, setCurrencyCode] = useState('');
  const [paymentsAccountResourceName, setPaymentsAccountResourceName] = useState('');
  const [paymentsProfileId, setPaymentsProfileId] = useState('');
  const [taxId, setTaxId] = useState('');
  const [conversionTrackingId, setConversionTrackingId] = useState('');
  const [crossAccountConversionTrackingId, setCrossAccountConversionTrackingId] = useState('');
  const [trackingUrlTemplate, setTrackingUrlTemplate] = useState('');
  const [finalUrlSuffix, setFinalUrlSuffix] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/create_google_ads_account', {
        manager_account_id: managerAccountId,
        new_customer_email: newCustomerEmail,
        time_zone: timeZone,
        currency_code: currencyCode,
        payments_account_resource_name: paymentsAccountResourceName,
        payments_profile_id: paymentsProfileId,
        tax_id: taxId,
        conversion_tracking_id: conversionTrackingId,
        cross_account_conversion_tracking_id: crossAccountConversionTrackingId,
        tracking_url_template: trackingUrlTemplate,
        final_url_suffix: finalUrlSuffix,
      });
      console.log(response.data);
      // Do something with the new customer account ID
    } catch (error) {
      console.error(error);
      setError('An error occurred while creating the Google Ads account. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Manager Account ID"
        value={managerAccountId}
        onChange={(event) => setManagerAccountId(event.target.value)}
        sx={{m: 3}}
      />
      <TextField
        label="New Customer Email"
        value={newCustomerEmail}
        onChange={(event) => setNewCustomerEmail(event.target.value)}
        sx={{m: 3}}
      />
      <TextField
        label="Time Zone"
        value={timeZone}
        onChange={(event) => setTimeZone(event.target.value)}
        sx={{m: 3}}
      />
      <TextField
        label="Currency Code"
        value={currencyCode}
        onChange={(event) => setCurrencyCode(event.target.value)}
        sx={{m: 3}}
      />
      <TextField
        label="Payments Account Resource Name"
        value={paymentsAccountResourceName}
        onChange={(event) => setPaymentsAccountResourceName(event.target.value)}
        sx={{m: 3}}
      />
      <TextField
        label="Payments Profile ID"
        value={paymentsProfileId}
        onChange={(event) => setPaymentsProfileId(event.target.value)}
        sx={{m: 3}}
      />
      <TextField
        label="Tax ID"
        value={taxId}
        onChange={(event) => setTaxId(event.target.value)}
        sx={{m: 3}}
      />
      <TextField
        label="Conversion Tracking ID"
        value={conversionTrackingId}
        onChange={(event) => setConversionTrackingId(event.target.value)}
        sx={{m: 3}}
      />
      <TextField
        label="Cross-Account Conversion Tracking ID"
        value={crossAccountConversionTrackingId}
        onChange={(event) => setCrossAccountConversionTrackingId(event.target.value)}
        sx={{m: 3}}
      />
      <TextField
        label="Tracking URL Template"
        value         onChange={(event) => setTrackingUrlTemplate(event.target.value)}
        sx={{m: 3}}
        />
        <TextField
          label="Final URL Suffix"
          value={finalUrlSuffix}
          onChange={(event) => setFinalUrlSuffix(event.target.value)}
          sx={{m: 3}}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button variant="contained" color="primary" type="submit"  sx={{m: 3}}>
          Create Google Ads Account
        </Button>
      </form>
    );
  };
  
  export default CreateGoogleAdsAccountForm;
  
