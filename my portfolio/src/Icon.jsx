const Icon = ({ icon, name }) => {
  return (
    <div class="flex  flex-col items-center justify-center h-20 w-20 md:h-32 md:w-32 mt-2 mb-1  shadow-lg border-2 rounded-3xl hover:h-24 hover:w-24 md:hover:h-34 md:hover:w-34 hover:rounded-xl transition-all duration-250 ease-in">
      {icon}
      <p class="text-md md:text-xl md:p-0 font-semibold">{name}</p>
    </div>
  );
};

export default Icon;
