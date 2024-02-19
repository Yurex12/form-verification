import { Toaster } from 'react-hot-toast';

import { ReactElement } from 'react';
import MenuTab from './components/MenuTab';
import { Login } from './components/Login';
import { LoginHook } from './components/LoginHook';
import { LoginZod } from './components/LoginZod';

export type Tabs = ReactElement[];

function App() {
  const tabs: Tabs = [<Login />, <LoginZod />, <LoginHook />];

  return (
    <>
      <div className='flex flex-col mt-4 space-y-10'>
        <MenuTab tabs={tabs} />
      </div>

      <Toaster
        position='top-center'
        toastOptions={{
          duration: 5000,
          style: {
            color: '#363636',
            backgroundColor: '#fff',
          },
        }}
      />
    </>
  );
}

export default App;

{
  /* <div className='flex flex-col space-y-1.5'>
<Label htmlFor='username'>Username</Label>
<Input
  type='text'
  id='username'
  placeholder='Enter your username'
/>
</div>
<div className='flex flex-col space-y-1.5'>
<Label htmlFor='age'>Age</Label>
<Input type='number' id='age' placeholder='Enter your age' />
</div> */
}
