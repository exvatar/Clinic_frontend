import './App.css';
import LocalStorageService from './services/localStorage';
import PrivateRoutes from './containers/PrivateRoutes/PrivateRoutes';
import { useEffect, useState } from 'react';

function App() {
  const [role, setRole] = useState(LocalStorageService.getRole())

  useEffect(() => {

  })
  return (
    <div className="">
      <PrivateRoutes role={role} setRole={setRole}></PrivateRoutes>
    </div>
    
  );
}

export default App;
