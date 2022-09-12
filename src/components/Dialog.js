import * as React from 'react';
import { useEffect } from "react"
import axios from "axios"
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { blue } from '@mui/material/colors';


const emails = [
  {title: "Pound sterling", symbol: "£", id: 1, acronym: "GBP"},
  {title: "Euro", symbol: "€", id: 2, acronym: "EUR"},
  {title: "Nigerian Naira", symbol: "₦", id: 3, acronym: "NGN"},
  {title: "Saudi Arabian riyal", symbol: "SR", id: 4, acronym: "SAR"},
  {title: "Indian rupee", symbol: "₹", id: 5, acronym: "INR"},
  {title: "United States dollar", symbol: "$", id: 6, acronym: "USD"},

]
function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);

    
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://exchangerate-api.p.rapidapi.com/rapid/latest/USD',
      headers: {
        'X-RapidAPI-Key': 'c0d2e70417msh3bde3b7dbe9e25ap12748ejsncd1fe394742c',
        'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

  },[])

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Choose a currency</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email.symbol)} key={email.id}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                {email.symbol}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email.title} />
          </ListItem>
        ))}

      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({selectedValue, setSelectedValue}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
 
  return (
    <div>
      
      <Button  variant="text" onClick={handleClickOpen} sx={{
         ml: 30,
         mb: 0,
         p: 0,
          }}>
        {selectedValue} {emails.find(email => email.symbol===selectedValue).acronym}
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
