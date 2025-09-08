 import React from 'react';
 import ReactDOM from 'react-dom/client';

// <-----EP-3------>

//React Element
const jsxHeading = (
  <span id="heading" className="h1tag">
    Namsate React skdnfkdfk lkmdvlkdf lkmdflvk by JSX
  </span>
);
//This is not a valid js, brower won't understand this,
//Parcel do this job for us, it transpile this jsx into readable code for browser

//React component
const Title = () => <h1>Title</h1>
const HeadingComponent = () => (
  <>
    <Title /> 
    {/* writing react Element inside react component */}
    <h1>{jsxHeading}</h1> 
    {/* component composition */}
    <div>Hi Functional component</div>
  </>
);


const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(jsxHeading);
root.render(<HeadingComponent />);