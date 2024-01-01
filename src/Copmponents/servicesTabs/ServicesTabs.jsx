
import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import ServicesStore from '../../stores/ServicesStore';
import AddNewMeeting from '../addNewMeeting/AddNewMeeting';
import GlobalStore from '../../stores/GlobalStore';
import AddNewService from '../addNewService/addNewService';
const ServicesTabs = observer(() => {
    useEffect(() => {
        ServicesStore.getServices();
    }, []);
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-evenly' }}>
                {ServicesStore.serviceArr.map((item, index) => (
                    <Card sx={{ width: 345, height:500, position: 'relative' }} index={index} key={index} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                image={item.imgService}
                                alt={item.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                    {item.description}
                                </Typography>
                                <Typography variant="h7" color="text.secondary">
                                    price: {item.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {!GlobalStore.isLogin && <AddNewMeeting service={item} />}
                        </CardActions>
                    </Card>
                ))}
                {GlobalStore.isLogin && <AddNewService />}
            </div>
        </>
    );
}
)
export default ServicesTabs