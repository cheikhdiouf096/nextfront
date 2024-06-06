// ExampleComponent.js
import React from 'react';
import { useUser } from '../userContext';

const ExampleComponent = () => {
  const { user } = useUser();

  return (
    <div>
      {user ? (
        <p>Bienvenue, {user.name}!</p>
      ) : (
        <p>Vous n'êtes pas connecté.</p>
      )}
    </div>
  );
};

export default ExampleComponent;
