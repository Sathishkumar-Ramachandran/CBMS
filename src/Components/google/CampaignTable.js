import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

function CampaignTable() {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        axios.get('/api/campaigns')
            .then(response => {
                setCampaigns(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Budget</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {campaigns.map(campaign => (
                    <TableRow key={campaign.id}>
                        <TableCell>{campaign.id}</TableCell>
                        <TableCell>{campaign.name}</TableCell>
                        <TableCell>{campaign.status}</TableCell>
                        <TableCell>{campaign.budget}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default CampaignTable;