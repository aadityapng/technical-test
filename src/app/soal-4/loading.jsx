export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">Loading...</h2>
      <p className="text-gray-500 mt-2">Please wait a moment</p>
    </div>
  );
}
