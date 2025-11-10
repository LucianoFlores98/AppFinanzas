import { TransactionsTable } from '../components/Dashboard/TransactionsTable';
import { mockTransactions } from '../../infrastructure/data/mockData';

export const GastosTarjetaPage = () => {
  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="p-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-gray-900">Gastos Tarjeta</h1>
        </div>

        <div className="mt-6">
          <TransactionsTable transactions={mockTransactions} />
        </div>
      </div>
    </div>
  );
};

export default GastosTarjetaPage;
