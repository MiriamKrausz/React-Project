import { Outlet } from 'react-router-dom'
import { observer } from "mobx-react"
import { AdminPanelSettingsSharp } from '@mui/icons-material'
import Footer from '../footer/Footer'
import GlobalStore from '../../stores/GlobalStore'
import Login from '../logIn/LogIn'
import Header from '../Header/Header'
import BusinessDetails from '../businessDetails/BusinessDetails'
import BusinessAdmin from '../businessAdmin/BusinessAdmin'
// import EditDetails from '../editDetails/EditDetails'
import './Admin.css'
const Admin = (observer(() => {
  return (
    <>
      <Header />
      {!GlobalStore.isLogin ?
        <Login /> :
        <BusinessDetails/>      
      }
       {/* <BusinessAdmin /> */}


      {
        GlobalStore.isLogin && <BusinessAdmin/>
      }
      <Footer />
    </>
  )
}))

export default Admin