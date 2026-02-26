import { BrowserRouter as Router } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <AppRoutes />
      <SpeedInsights />
    </Router>
  );
}

export default App;
