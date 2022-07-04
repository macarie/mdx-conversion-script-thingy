export const Button = ({ children }) => (
  <button className="bg-red-900 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto">
    {children}
  </button>
)
