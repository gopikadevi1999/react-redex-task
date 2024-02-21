import React from 'react'
import Cart from './components/Cart'
import UserContextComponent from './utils/UserContextComponent'

export const UserContext = React.createContext()


function App() {


  return <>
   <UserContextComponent>
      <div className="container my-5">
        <Cart/>
      </div>
    </UserContextComponent>
  </>
}

export default App