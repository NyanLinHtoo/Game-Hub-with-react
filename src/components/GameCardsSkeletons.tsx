const GameCardsSkeletons = () => {
  return (
    <div className="bg-slate-400 rounded-xl overflow-hidden border border-gray-200 shadow animate-pulse dark:border-gray-700">
      <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-t-xl"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-4 w-3/4"></div>
        <div className="flex justify-between p-4">
          <div className="flex space-x-2">
            <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
          <div className="w-10 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default GameCardsSkeletons;
