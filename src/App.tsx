import { Sidebar } from './presentation/components/Layout/Sidebar';
import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from './presentation/pages/DashboardPage';
import ServiciosPage from './presentation/pages/ServiciosPage';
import GastosTarjetaPage from './presentation/pages/GastosTarjetaPage';
import IngresosPage from './presentation/pages/IngresosPage';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/gastos-tarjeta" element={<GastosTarjetaPage />} />
        <Route path="/ingresos" element={<IngresosPage />} />
      </Routes>
    </div>
  );
}

export default App;
