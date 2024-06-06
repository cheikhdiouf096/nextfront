

'use client'

import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);




// "use client"
// import React, { createContext, useState, useContext, useEffect } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Récupérer les informations de l'utilisateur à partir du localStorage
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const saveUser = (userData) => {
//     setUser(userData);
//     localStorage.setItem('user', JSON.stringify(userData));
//   };

//   const clearUser = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   return (
//     <UserContext.Provider value={{ user, saveUser, clearUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => useContext(UserContext);
