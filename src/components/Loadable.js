import React from 'react';

const Loadable=WrappedComponent=>props=>{
  return (
    <React.Suspense fallback={<></>} ><WrappedComponent {...props} /></React.Suspense>
  )
}
export default Loadable;