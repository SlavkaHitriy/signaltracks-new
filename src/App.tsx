import { Navigate, Route, Routes } from 'react-router';

import { Machines } from '@pages/Machines';
import { Company } from '@pages/Company';
import { Reports } from '@pages/Reports';
import { Jobs } from '@pages/Jobs';
import { JobDetails } from '@pages/JobDetails';
import { MainLayout } from '@components/layouts/MainLayout';
import { Login } from '@pages/Login';
import { Settings } from '@pages/Settings';

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<MainLayout />}>
        <Route path="/machines" element={<Machines />} />
        <Route path="/company" element={<Company />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/machines" replace />} />
    </Routes>
  );
};
