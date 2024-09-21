import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ContactMe() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button id="ContactMe" variant="contained" onClick={handleClickOpen}>
        Get in touch
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          // onSubmit: (event) => {
          //   event.preventDefault();
          //   const formData = new FormData(event.currentTarget);
          //   const formJson = Object.fromEntries((formData).entries());
          //   const email = formJson.email;
          //   console.log(email);
          //   handleClose();
          // },
        }}
      >
        <DialogTitle>Get in Touch</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Have a project or collaboration in mind? I'd love to hear from you!
          </DialogContentText>
          <DialogContentText>
            Contact me at <b>holmesjoli@gmail.com</b>.
          </DialogContentText>
          {/* <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
