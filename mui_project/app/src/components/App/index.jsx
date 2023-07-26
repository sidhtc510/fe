import "../../App.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import PrimarySearchAppBar from "../PrimarySearchAppBar";

function App() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "1px solid #000",
        borderRadius: "10px",
        boxShadow: 24,
        p: 4,
    };

    return (
        <Box sx={{ flexGrow: 1,  margin: "0 auto" }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <PrimarySearchAppBar />
                </Grid>
                <Grid item xs={4}>
                    4
                </Grid>
                <Grid item xs={8}>
                    <Button variant="contained" onClick={handleOpen}>
                        Open modal
                    </Button>
                    <Modal className="modalBG" open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                </Grid>
                <Grid item xs={12}>
                    12
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
