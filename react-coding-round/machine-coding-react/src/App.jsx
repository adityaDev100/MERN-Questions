///******HOC******/////
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import withAuthorization from '../components/HOC/HocComponent';
import Setting from '../components/HOC/Setting';
import Report from '../components/HOC/Report';
import Unauthorized from '../components/HOC/Unauthorized';
import OperatorScreen from '../components/HOC/OperatorScreen';

const AuthorizedSettings = withAuthorization(Setting, ['admin']);
const AuthorizedReports = withAuthorization(Report, ['admin', 'supervisor']);
const AuthorizedOperatorScreen = withAuthorization(OperatorScreen,['operator']) 

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/settings" style={{ marginRight: '10px' }}>Settings</Link>
          <Link to="/reports" style={{ marginRight: '10px' }}>Reports</Link>
          <Link to="/operatorScreen">Operator Screen</Link>
      </nav>
      <Routes>
        <Route path="/settings" element={<AuthorizedSettings />} />
        <Route path="/reports" element={<AuthorizedReports />} />
        <Route path="/operatorScreen" element={<AuthorizedOperatorScreen />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
}

export default App;



/////******CUSTOM HOOK******/////
// import React from 'react'
// import UseLocalStorageCustomHook from '../components/CustomHook/useLocalStorage/Index.jsx'
// import UseToggleCustomHook from '../components/CustomHook/useToggle/Index.jsx'

// export default function App() {
//   return (
//     <>
//     {/* <UseLocalStorageCustomHook/> */}
//     <UseToggleCustomHook/>
//     </>
//   )
// }
