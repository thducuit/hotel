import React from 'react';
import Loadable from 'react-loadable';

function Loading() {
  return <div>Loading...</div>;
}


const HomeScreen = Loadable({
    loader: () => import('./pages/HomeScreen.jsx'),
    loading: Loading,
});

const AboutScreen = Loadable({
    loader: () => import('./pages/AboutScreen.jsx'),
    loading: Loading,
});

const StoreScreen = Loadable({
    loader: () => import('./pages/StoreScreen.jsx'),
    loading: Loading,
});

const routes = [
    { path: '/', exact: true, name: 'Dashboard', component: HomeScreen, icon:"home" },
    { path: '/about', name: 'About', component: AboutScreen, icon:"signal" },
    { name: 'About2', icon:"signal", children: [
            { path: '/store', name: 'Store', component: StoreScreen }
        ]
    },
];
  
export default routes;
  