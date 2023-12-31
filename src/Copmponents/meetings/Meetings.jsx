
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { useEffect, useState } from 'react';
// import { observer } from 'mobx-react';
// import CardMedia from '@mui/material/CardMedia';
// import { Button, CardActionArea, CardActions } from '@mui/material';
// import MeetingsStore from '../../stores/MeetingsStore';

// const Meetings = observer(() => {

//     const card = (
//         MeetingsStore.meetingseArr.map((item, index) => (
//             <React.Fragment>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     {item}
//                 </Typography>
//             </React.Fragment>
//         ))
//     );
//     useEffect(() => {
//         MeetingsStore.getMeetings();
//     }, []);
//     return (
//         <>
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-evenly' }}>
//                 {MeetingsStore.meetingseArr.map((item, index) => (
//                     // <TabPanel value={value} index={index} key={index}>
//                     <Card sx={{ maxWidth: 345 }} index={index} key={index}>
//                         <CardActionArea>
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="div">
//                                     {item}
//                                 </Typography>
//                             </CardContent>
//                         </CardActionArea>
//                         <CardActions>

//                         </CardActions>
//                     </Card>

//                 ))}
//             </div>

//         </>
//     );
// }
// )
// export default Meetings

// import * as React from 'react';
import { useEffect, useState } from 'react';
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
import MeetingsStore from '../../stores/MeetingsStore';




const Meetings = observer(() => {
    const [value, setValue] = useState(0);
    // useState(()=>{
    //     ServicesStore.getServices();
    // })
    useEffect(() => {
        MeetingsStore.getMeetings();
    }, []);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-evenly' }}>
                {MeetingsStore.meetingseArr.map((item, index) => (
                    <Card sx={{ maxWidth: 345 }} index={index} key={index}>
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                {item.name}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {item.id}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {item.clientName}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {item.clientPhone}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {item.dateTime}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {/* <Button size="small" color="primary"  
               onClick={() => setAddMeeting(true)
                create a meeting 
              </Button>
                >*/}

                        </CardActions>
                    </Card>
                    // </TabPanel>
                ))}

            </div>
            {/* </Box> */}
        </>
    );
}
)
export default Meetings