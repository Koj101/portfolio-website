const Icon = ({ icon }) => {
  return (
    <div class="relative flex items-center justify-center  h-12 w-12 mt-2 mb-2 shadow-lg border-2 bg-emerald-800 text-cyan-300 hover:bg-green-300 hover:text-cyan-950 rounded-3xl hover:rounded-xl transition-all duration-200 cursor-pointer">
      {icon}
    </div>
  );
};

export default Icon;
