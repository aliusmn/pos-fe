export default function DashboardPage() {
  return (
    <>
      <h2 className="text-xl font-semibold">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="bg-white shadow p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold">Total Orders</h3>
          <p className="text-3xl font-semibold">10</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold">Total Sales</h3>
          <p className="text-3xl font-semibold">$1000</p>
        </div>
      </div>
    </>
  );
}
