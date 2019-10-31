import React, { Suspense, lazy } from 'react'

const defaultFallback = <div>Loading...</div>

const AsyncComponent = ({ fallback = defaultFallback, pathCall, ...props }) => {
    const Component = lazy(pathCall)
    return (<Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>)    
}

export default AsyncComponent
