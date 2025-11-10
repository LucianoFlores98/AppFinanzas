import { Sidebar } from './presentation/components/Layout/Sidebar';
import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from './presentation/pages/DashboardPage';
import TransactionsPage from './presentation/pages/TransactionsPage';
import BudgetsPage from './presentation/pages/BudgetsPage';
import ReportsPage from './presentation/pages/ReportsPage';
import SettingsPage from './presentation/pages/SettingsPage';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/budgets" element={<BudgetsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
