
import * as React from 'react';
import { observer } from "mobx-react"
import BusinessDetails from '../businessDetails/BusinessDetails'
import Footer from '../footer/Footer'
import GlobalStore from '../../stores/GlobalStore'
import Header from '../Header/Header'
import BusinessAdmin from '../businessAdmin/BusinessAdmin';
import Login from '../logIn/Login';
const Admin = observer(() => {
  return (
    <>
      <Header />
      {!GlobalStore.isLogin ? (
        <Login />
      ) : (
        <>
          <BusinessDetails />
          <BusinessAdmin />
        </>
      )}
      {/* {
        GlobalStore.isLogin && <Business />
      } */}
      <Footer />
    </>
  )
})

export default Admin


