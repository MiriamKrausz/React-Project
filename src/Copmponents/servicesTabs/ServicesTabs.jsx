
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { observer } from 'mobx-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ServicesStore from '../../stores/ServicesStore';
import AddNewMeeting from '../addNewMeeting/AddNewMeeting';
import GlobalStore from '../../stores/GlobalStore';
import AddNewService from '../addNewService/addNewService';



const ServicesTabs = (observer(() => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            {/* <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}> */}
            {/* <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {Service.serviceData.map((item, index) => (
          <Tab label={item.name} {...a11yProps(index)} key={index} />
        )
        )}
      </Tabs> */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-evenly' }}>
                {ServicesStore.servicesList.map((item, index) => (
                    // <TabPanel value={value} index={index} key={index}>
                    <Card sx={{ maxWidth: 345 }} index={index} key={index}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.imgService}
                                alt={item.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {/* <Button size="small" color="primary"  
               onClick={() => setAddMeeting(true)
                create a meeting 
              </Button>
                >*/}
                            {!GlobalStore.isLogin && <AddNewMeeting service={item} />}
                        </CardActions>
                    </Card>
                    // </TabPanel>
                ))}
                {GlobalStore.isLogin && <AddNewService />}
            </div>
            {/* </Box> */}
        </>
    );
}
))
export default ServicesTabs