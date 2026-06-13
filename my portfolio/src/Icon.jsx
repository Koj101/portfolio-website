const Icon = ({ icon, name }) => {
  return (
    <div class="flex flex-col items-center justify-center h-32 w-32 mt-2 mb-1 shadow-lg border-2 rounded-3xl  hover:h-36 hover:w-36 hover:rounded-xl transition-all duration-200">
      {icon}
      <p class="text-xl font-semibold">{name}</p>
    </div>
  );
};

export default Icon;
