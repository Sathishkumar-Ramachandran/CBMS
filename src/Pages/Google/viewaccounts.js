import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import axios from "axios";

const AccountDialog = ({ account, open, handleClose }) => {
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{account.name}</DialogTitle>
        <DialogContent>

          <Typography>ID: {account.id}</Typography>
          <Typography>Email: {account.email}</Typography>
          <Typography>Country: {account.country}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  };

const AccountTable = ({ accounts, loading }) => {
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
  
    const handleOpenDialog = async (account) => {
        try {
          const response = await axios.get(`/accounts/${account.id}`);
          setSelectedAccount(response.data);
          setDialogOpen(true);
        } catch (error) {
          console.error(error);
        }
      };
    
  
    const handleCloseDialog = () => {
      setDialogOpen(false);
    };
  
    if (loading) {
      return <CircularProgress />;
    }
  
    return (
      <>
        <TableContainer component={Paper}>
          <Table aria-label="accounts table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell component="th" scope="row">
                    {account.id}
                  </TableCell>
                  <TableCell>{account.name}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      onClick={() => handleOpenDialog(account)}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {selectedAccount && (
          <AccountDialog
            account={selectedAccount}
            open={dialogOpen}
            handleClose={handleCloseDialog}
          />
        )}
      </>
    );
  };

const Viewaccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/accounts");
        setAccounts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Accounts</h1>
      <AccountTable accounts={accounts} loading={loading} />
    </div>
  );
};

export default Viewaccounts;

