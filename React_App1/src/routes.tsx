import * as React from "react";

// Pre Loading
const Comp1Promise = import('./comp1');
const Comp1 = React.lazy(() => Comp1Promise);
// const Comp1 = React.lazy(() => import('./comp1'));

const Comp2Promise = import('./comp2');
const Comp2 = React.lazy(() => Comp2Promise);
// const Comp2 = React.lazy(() => import('./comp2'));

const routes = [
    {
      path: "/comp1",
      component: Comp1,
    },
    {
        path: "/comp2",
        component: Comp2,
      },
  ];
  
  export default routes;