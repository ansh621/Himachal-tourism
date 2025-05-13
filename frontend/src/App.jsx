import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import NavigationBar from './assets/NavigationBar';
import { Nai } from './assets/Pages/Nai';
import Home from './assets/Pages/Home';
import './App.css';
import HowToReach from './assets/Pages/HowToReach';
import Himalyas from './assets/Pages/Himalyas';
import Cusine from './assets/Pages/Cusine';
import Destination from './assets/Pages/Destination';
import Accomodation from './assets/Pages/Accomodation';
import AccomodationResult from './assets/Pages/AccomodationResult';
import WannaList from './assets/Pages/WannaList';
import Populardest from './assets/Pages/Populardest';
import AI from './assets/Pages/AI';
import Cultureandheritage from './assets/Pages/Cultureandheritage';
import Culture from './assets/Pages/Culture';
import Heritage from './assets/Pages/Heritage';
import Adventures from './assets/Pages/Adventures';
import Florandfauna from './assets/Pages/Florandfauna';
import Unexplored from './assets/Pages/Unexplored';
import Spiritual from './assets/Pages/Spiritual';
import ChristianityInHimachal from './assets/Pages/ChristianityInHimachal';
import HinduismInHimachal from './assets/Pages/HinduismInHimachal';
import SikhismInHimachal from './assets/Pages/SikhismInHimachal';
import BuddhismInHimachal from './assets/Pages/BuddhismInHimachal';
import TermsAndConditions from './assets/Pages/TermsAndConditions';
import Policy from './assets/Pages/Policy';

const router = createBrowserRouter([
  {
    path: "/Home",
    element: (
      <>
        <NavigationBar /> <Home />
      </>
    ),
  },
  {
    path: "/NaiManzilNayiRahen",
    element: (
      <>
        <NavigationBar /> <Nai />
      </>
    ),
  },
  {
    path: "/HowToReach",
    element: (
      <>
        <NavigationBar /> <HowToReach />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <NavigationBar /> <Home />
      </>
    ),
  },
  {
    path: "/Himalyas",
    element: (
      <>
        <NavigationBar /> <Himalyas />
      </>
    ),
  },
  {
    path: "/Cuisine",
    element: (
      <>
        <NavigationBar /> <Cusine />
      </>
    ),
  },
  {
    path: "/Accomodation",
    element: (
      <>
        <NavigationBar /> <Accomodation />
      </>
    ),
  },
  {
    path: "/AccomodationResult",
    element: (
      <>
        <NavigationBar /> <AccomodationResult />
      </>
    ),
  },
  {
    path: "/WannaList",
    element: (
      <>
        <NavigationBar /> <WannaList />
      </>
    ),
  },
  {
    path: "/AI",
    element: (
      <>
        <NavigationBar /> <AI />
      </>
    ),
  }, {
    path: "/Destination",
    element: (
      <>
        <NavigationBar /><Destination />
      </>
    ),
  }, {
    path: "/Populardest",
    element: (
      <>
        <NavigationBar /><Populardest />
      </>
    )
  },
  {
    path: "/CultureandHeritage",
    element: (
      <>
      <NavigationBar /><Cultureandheritage/>
      </>
    )
  },
  {
    path: "/Culture",
    element: (
      <>
      <NavigationBar /><Culture/>
      </>
    )
  },
  {
    path: "/Heritage",
    element: (
      <>
      <NavigationBar /><Heritage/>
      </>
    )
  },
  {
    path: "/Adventures",
    element: (
      <>
      <NavigationBar /><Adventures/>
      </>
    )
  },
  {
    path: "/Florandfauna",
    element: (
      <>
      <NavigationBar /><Florandfauna/>
      </>
    )
  },
  {
    path: "/Unexplored",
    element: (
      <>
      <NavigationBar /><Unexplored/>
      </>
    )
  }, {
    path: "/Spiritual",
    element: (
      <>
      <NavigationBar /><Spiritual/>
      </>
    )
  }, {
    path: "/ChristianityInHimachal",
    element: (
      <>
      <NavigationBar /><ChristianityInHimachal/>
      </>
    )
  }, {
    path: "/HinduismInHimachal",
    element: (
      <>
      <NavigationBar /><HinduismInHimachal/>
      </>
    )
  }, {
    path: "/SikhismInHimachal",
    element: (
      <>
      <NavigationBar /><SikhismInHimachal/>
      </>
    )
  }, {
    path: "/BuddhismInHimachal",
    element: (
      <>
      <NavigationBar /><BuddhismInHimachal/>
      </>
    )
  }, {
    path: "/TermsAndConditions",
    element: (
      <>
      <NavigationBar /><TermsAndConditions/>
      </>
    )
  }, {
    path: "/Policy",
    element: (
      <>
      <NavigationBar /><Policy/>
      </>
    )
  }
]);

const App = () => {
  const scrollRef = useRef(null);


  return (
    <div className="h-screen w-full transition-all duration-800 ease-in-out">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
