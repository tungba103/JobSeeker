import { createContext, useState } from 'react';

const PermissionContext = createContext();

const PermissionProvider = ({ childen }) => {
  const [permission, setPermission] = useState('viewer');

  const changePermission = (value) => {
    setPermission(value);
  };
  const value = {
    permission,
    changePermission,
  };

  return <PermissionContext.Provider value={value}>{childen}</PermissionContext.Provider>;
};

export { PermissionContext, PermissionProvider };
