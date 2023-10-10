import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
    TextField,
  } from "@mui/material";
  import { TransitionProps } from "@mui/material/transitions";
  import { enqueueSnackbar } from "notistack";
  import React, { useState } from "react";
  import { BsArrowRightShort } from "react-icons/bs";
  
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  const HireMeDialog = () => {
    const [isDialogOpen, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleSubmit = () => {
      handleClose();
      enqueueSnackbar("Message sent!", { variant: "success" });
    };
  
    return (
      <div>
        <Button
          sx={{
            mt: "2.5rem",
          }}
          className="bg-gradient-to-b from-gradient-primary group to-[#0052d6]"
          onClick={handleOpen}
        >
          Hire Me
          <BsArrowRightShort className="arrows ml-1 text-2xl" />
        </Button>
        <Dialog
          open={isDialogOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          maxWidth={"xs"}
        >
          <DialogTitle>Contact Form</DialogTitle>
          <DialogContent className="flex flex-col gap-4">
            <DialogContentText>
            Please complete the contact form.
            </DialogContentText>
            <form>
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="filled"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="filled"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                variant="filled"
                margin="normal"
                required
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button
              onClick={handleSubmit}
              className="bg-gradient-to-l from-gradient-primary to-[#0052d6]"
            >
              Sent
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
  
  export { HireMeDialog };