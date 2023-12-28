// import MeetingsStore from "../../stores/MeetingsStore";
// import ServicesTabs from "../servicesTabs/ServicesTabs";

// export default function BusinessAdmin() {

//     return (


//         <>
//             <ServicesTabs />
        
//         </>
//     )





// }

//מציג את הדף עם השירותים והתורים
// import { Outlet, Link } from "react-router-dom";
// import Meetings from "../meetings/Meetings";
// import ServicesTabs from "../servicesTabs/ServicesTabs";
// // import Services from "./Services";
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

// export default function BusinessAdmin() {
//     const [value, setValue] = React.useState('1');

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
//     return (
//         <>
//             <br />
//             <Box sx={{ width: '100%', typography: 'body1' }}>
//                 <TabContext value={value}>
//                     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                         <TabList onChange={handleChange} aria-label="lab API tabs example">
//                             <TabPanel value="1"><Link to='./services'>services</Link></TabPanel>
//                             <TabPanel value="2"><Link to='./meetings'>meetings</Link></TabPanel>
//                         </TabList>
//                     </Box>
//                     <Outlet/>
//                     {/* <TabPanel value="1"> <Outlet /></TabPanel> */}
//                     {/* <TabPanel value="2"> <Outlet /></TabPanel> */}

//                 </TabContext>
//             </Box>
//             {/* <br></br>
        
//         <br/>
//         outlet:
//         <br/> */}

//         </>
//     )
// }


import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Outlet, Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ServicesTabs from '../servicesTabs/ServicesTabs';
import Meetings from '../meetings/Meetings';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BusinessAdmin() {
  const [value, setValue] = React.useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <Box sx={{ width: '100%' }}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
      <Tab label="Services" {...a11yProps(0)} ></Tab>
      <Tab label="Meetings" {...a11yProps(1)} ></Tab>
    </Tabs>
  </Box>
  <Link to='./services'>
    <CustomTabPanel value={value} index={0}>
      <ServicesTabs />
      <Outlet />
    </CustomTabPanel>
  </Link>
  <Link to='./meetings'>
    <CustomTabPanel value={value} index={1}>
      <Meetings />
      <Outlet />
    </CustomTabPanel>
  </Link>
</Box>

  );
}
// return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Services" {...a11yProps(0)} />
//           <Tab label="Meetings" {...a11yProps(1)} />
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0}>
//         <Outlet/>
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         <Link to='./meetings'></Link>
//         <Outlet/>
//       </CustomTabPanel>
//     </Box>
//   );
  