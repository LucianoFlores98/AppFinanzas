import { Sidebar } from './presentation/components/Layout/Sidebar';
import { DashboardPage } from './presentation/pages/DashboardPage';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <DashboardPage />
    </div>
  );
}

export default App;
