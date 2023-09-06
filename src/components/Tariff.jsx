import React from 'react'
import EmsTariff from './Tariffs/EmsTariff'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from '@chakra-ui/react';
import UmsTariff from './Tariffs/UmsTariff';
const Tariff = () => {  
  return (
    <div>
       <Link to="/ems"><Button>Ems</Button></Link>
       <Link to="/ums"><Button>Ums</Button></Link>
       <Link to="/fms"><Button>Fms</Button></Link>
       <Link to="/cod"><Button>Cod</Button></Link>
       <Link to="/sdd"><Button>Same Day Delivery</Button></Link>
       <Link to="/umson"><Button>Ums OverNight</Button></Link>
       <Link to="/fmo"><Button>Fax money order</Button></Link>
       <Link to="/umo"><Button>Urgent money order</Button></Link>
       <Link to="/emo"><Button>Electronic money order</Button></Link>
    </div>
  )
}

export default Tariff