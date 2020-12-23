import './App.css';
import LocalStorageService from './services/localStorage';
import PrivateRoutes from './containers/PrivateRoutes/PrivateRoutes';
import Clinic from './pages/Clinic'
import { useEffect, useState } from 'react';

function App() {
  const [role, setRole] = useState(LocalStorageService.getRole())

  useEffect(() => {

  })
  return (
    <div className="">
      <PrivateRoutes role={role} setRole={setRole}></PrivateRoutes>
      {/* <Clinic></Clinic> */}
    </div>
    
  );
}

export default App;
