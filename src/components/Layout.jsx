import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import styled from '@emotion/styled'


export const Layout = () => {
  return (
    <Back >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Back>
  );
};
const Back = styled.div`
/* background-color: palegoldenrod; */
   /* background-image: url(/src/components/image/pexels-alex-andrews-821754.jpeg);
  background-repeat: no-repeat;
    /* background-position: center; */
    /* background-size: 100%; */ 
  
    margin: 0 auto;
    padding: 0 16px;
    
`

