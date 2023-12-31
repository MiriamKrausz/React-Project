
import React, { useState, useEffect } from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { TextField, Button, DialogActions, DialogTitle, Dialog } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ServicesStore from '../../stores/ServicesStore';
import { observer } from 'mobx-react';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Swal from 'sweetalert2';
const AddNewService = observer(() => {
    const [count, setCount] = useState(0);
    const [serviceData, setServiceData] = useState({
        id: count,
        name: '',
        description: '',
        price: '',
        duration: '',
        imgService: '../../assets/images/אבחונים2.jpg'
    });
    // const VisuallyHiddenInput = styled('input')({
    //     clip: 'rect(0 0 0 0)',
    //     clipPath: 'inset(50%)',
    //     height: 1,
    //     overflow: 'hidden',
    //     position: 'absolute',
    //     bottom: 0,
    //     left: 0,
    //     whiteSpace: 'nowrap',
    //     width: 1,
    // });
    const handleInputChange = (e) => {
        setServiceData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
    const added = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Service addede successfully",
            showConfirmButton: false,
            timer: 1500
        });
    };
    const handleInCreaseId = (i) => {
        setFormService((prevService) => ({
            ...prevService,
            id: i,
        }))

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        added(),
            ServicesStore.addService(serviceData)
        setServiceData((prevData) => ({
            ...prevData,
            id: count,
            name: '',
            description: '',
            price: '',
            duration: '',
            imgService: ''

        }));
        setCount((prevId) => prevId + 1);
        handleClose();
    };
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button
                onClick={handleClickOpen}
                variant="contained"
                color="primary"
                startIcon={<AddCircleIcon />}>
                Add a service
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="xs"
                fullWidth
                aria-labelledby="form-dialog-title"
                PaperProps={{ sx: { p: 4 } }}
            >
                <DialogTitle>new service</DialogTitle>
                <form onSubmit={handleSubmit} className="form">
                    {/* Service details */}

                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        className="inputs"
                        name="name"
                        value={serviceData.name}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        required
                    />
                    <TextField
                        id="description"
                        label="Description"
                        variant="outlined"
                        className="inputs"
                        name="description"
                        value={serviceData.description}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        required
                    />
                    <TextField
                        id="price"
                        label="Price"
                        variant="outlined"
                        className="inputs"
                        name="price"
                        value={serviceData.price}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        required
                    />
                    <TextField
                        id="Duration"
                        label="Duration"
                        variant="outlined"
                        className="duration"
                        name="duration"
                        value={serviceData.duration}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        required
                    />
                    {/* <TextField
                        id="imgService"
                        label="Image Service"
                        variant="outlined"
                        className="inputs"
                        name="imgService"
                        value={serviceData.imgService}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                    /> */}
                    {/* <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} >
                        Upload image
                        <VisuallyHiddenInput VisuallyHiddenInput type="file" onChange={handleFileChange} />
                    </Button> */}
                    <DialogActions>
                        <Button type="submit" variant="contained" color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
});

export default AddNewService;



