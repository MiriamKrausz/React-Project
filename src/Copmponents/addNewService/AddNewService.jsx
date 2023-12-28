import React, { useState, useEffect } from 'react';
import { TextField, Button, DialogActions, DialogTitle, Dialog } from '@mui/material';
// import { formatISO, parseISO } from 'date-fns';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import GlobalStore from '../../stores/GlobalStore';
// import Icon from '@mui/material/Icon';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import ServicesStore from '../../stores/ServicesStore';
import { observer } from 'mobx-react';
const AddNewService = (observer(() => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        imgService: ''
    }, []);
    const handleInputChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
    // const handleDateTimeChange = (dateTime) => {
    //     const formattedDateTime = dateTime.format('YYYY-MM-DDTHH:mm:ss');
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         dateTime: formattedDateTime,
    //     }));
    //     handleInputChange({ target: { name: 'dateTime', value: formattedDateTime } });
    // };
    // useEffect(() => {
    //     console.log(formData.clientEmail);
    //     console.log(formData.clientName);
    //     console.log(formData.clientPhone);
    //     console.log(formData.dateTime);
    //     console.log(service.name);
    //     console.log(service.id);
    //     MeetingsStore.addMeeting(formData)
    //     setFormData({
    //         clientName: '',
    //         clientPhone: '',
    //         clientEmail: '',
    //         dateTime: null,
    //     });

    //     handleClose();
    // }, [formData, service]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData.name);
        console.log(formData.description);
        console.log(formData.price);
        console.log(formData.imgService);
        // console.log(service.name);
        // console.log(service.id);

        ServicesStore.addService(formData);
        setFormData((prevData) => ({
            ...prevData,
            name: 'Sar',
            description: 'hjuytdgfc',
            price: '900',
            imgService: 'yfdgcv',
        }));
        handleClose();
    };
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
{/* <Button variant="outlined" href="#outlined-buttons" onClick={handleClickOpen}>
<AddCircleIcon/>

      </Button> */}
      <Button
                onClick={handleClickOpen}
                variant="contained"
                color="primary"
                startIcon={<AddCircleIcon/>}>
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
                <DialogTitle>Add a service</DialogTitle>
                <form onSubmit={handleSubmit} className="form">
                    {/* Service details */}
                    {/* <TextField
                        id="clientName_input"
                        label="Client Name"
                        variant="outlined"
                        className="inputs"
                        name="clientName"
                        value={formData.clientName}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        required
                    /> */}
                    {/* <TextField
                        id="name_input"
                        label="Name"
                        variant="outlined"
                        className="inputs"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        // required
                    />
                    <TextField
                        id="serviceDescription_input"
                        label="Service Description"
                        variant="outlined"
                        className="inputs"
                        name="serviceDescription"
                        value={formData.description}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        // required
                    />
                   <TextField
                        id="price_input"
                        label="Price Service"
                        variant="outlined"
                        className="inputs"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        // required
                    /> */}

                    <TextField
                        id="imgService_input"
                        label="Img Service"
                        variant="outlined"
                        className="inputs"
                        name="imgService"
                        value={formData.imgService}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        // required
                    />
                    <TextField
                        id="imgService_input"
                        label="Img Service"
                        variant="outlined"
                        className="inputs"
                        name="imgService"
                        value={formData.imgService}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        // required
                    /><TextField
                    id="imgService_input"
                    label="Img Service"
                    variant="outlined"
                    className="inputs"
                    name="imgService"
                    value={formData.imgService}
                    onChange={handleInputChange}
                    sx={{ mb: 3 }}
                    fullWidth
                    // required
                /><TextField
                id="imgService_input"
                label="Img Service"
                variant="outlined"
                className="inputs"
                name="imgService"
                value={formData.imgService}
                onChange={handleInputChange}
                sx={{ mb: 3 }}
                fullWidth
                // required
            />
  
                    {/* Submit button */}
                    <DialogActions>
                        <Button type="submit" variant="contained" color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}));

export default AddNewService;



