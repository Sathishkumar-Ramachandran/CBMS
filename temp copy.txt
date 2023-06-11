import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Button,
} from '@mui/material';
import '../../styles/Google/Ads.css';

const AdsTable = () => {
  const [ads, setAds] = useState([]);
  const [editingAdId, setEditingAdId] = useState(null);
  const [newAdHeadline, setNewAdHeadline] = useState('');
  const [newAdDescription, setNewAdDescription] = useState('');

  useEffect(() => {
    axios
      .get('/api/ads')
      .then((response) => {
        setAds(response.data.ads);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEditButtonClick = (adId) => {
    const adToEdit = ads.find((ad) => ad.id === adId);
    setEditingAdId(adId);
    setNewAdHeadline(adToEdit.headline);
    setNewAdDescription(adToEdit.description);
  };

  const handleCancelEditButtonClick = () => {
    setEditingAdId(null);
    setNewAdHeadline('');
    setNewAdDescription('');
  };

  const handleNewAdHeadlineChange = (event) => {
    setNewAdHeadline(event.target.value);
  };

  const handleNewAdDescriptionChange = (event) => {
    setNewAdDescription(event.target.value);
  };

  const handleSaveButtonClick = (adId) => {
    const editedAdIndex = ads.findIndex((ad) => ad.id === adId);
    const editedAd = {
      ...ads[editedAdIndex],
      headline: newAdHeadline,
      description: newAdDescription,
    };
    const newAds = [...ads];
    newAds.splice(editedAdIndex, 1, editedAd);
    setAds(newAds);
    setEditingAdId(null);
    setNewAdHeadline('');
    setNewAdDescription('');
  };

  const handleAddButtonClick = () => {
    const newAd = {
      id: ads.length + 1,
      headline: newAdHeadline,
      description: newAdDescription,
    };
    setAds([...ads, newAd]);
    setNewAdHeadline('');
    setNewAdDescription('');
  };

  return (
    <>
    <div className="table"><h1> Ads  Google </h1></div>
    <div >
    <TableContainer className="container-table" >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Final URLs</TableCell>
            <TableCell>Headline</TableCell>
            <TableCell>Description</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField
                className="editInput"
                value={newAdHeadline}
                onChange={handleNewAdHeadlineChange}
                placeholder="Enter new headline"
              />
            </TableCell>
            <TableCell>
              <TextField
                className="editInput"
                value={newAdDescription}
                onChange={handleNewAdDescriptionChange}
                placeholder="Enter new description"
              />
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                className="editButton"
                onClick={handleAddButtonClick}
                disabled={!newAdHeadline || !newAdDescription}
              >
                Add
              </Button>
            </TableCell>
          </TableRow>
          {ads.map            ((ad) =>
              ad.id === editingAdId ? (
                <TableRow key={ad.id}>
                  <TableCell>{ad.id}</TableCell>
                  <TableCell>{ad.final_urls}</TableCell>
                  <TableCell>
                    <TextField
                      className="editInput"
                      value={newAdHeadline}
                      onChange={handleNewAdHeadlineChange}
                      placeholder={ad.headline}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      className="editInput"
                      value={newAdDescription}
                      onChange={handleNewAdDescriptionChange}
                      placeholder={ad.description}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className="editButton"
                      onClick={() => handleSaveButtonClick(ad.id)}
                      disabled={!newAdHeadline || !newAdDescription}
                    >
                      Save
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      className="editButton"
                      onClick={handleCancelEditButtonClick}
                    >
                      Cancel
                    </Button>
                  </TableCell>
                </TableRow>
              ) : (
                <TableRow key={ad.id}>
                  <TableCell>{ad.id}</TableCell>
                  <TableCell>{ad.final_urls}</TableCell>
                  <TableCell>{ad.headline}</TableCell>
                  <TableCell>{ad.description}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className="editButton"
                      onClick={() => handleEditButtonClick(ad.id)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
};

export default AdsTable;
