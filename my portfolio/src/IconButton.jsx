const IconButton = ({ icon, url }) => {
  const openSite = (url) => {
    window.open(url);
  };
  return (
    <div
      onClick={() => openSite(url)}
      href={url}
      class="flex flex-col items-center justify-center h-32 w-32 mt-2 mb-1 shadow-lg border-2 rounded-3xl hover:rounded-xl hover:scale-y-105 hover:bg-blue-300 hover:text-blue-950  transition-all duration-200 cursor-pointer"
    >
      {icon}
      <p class="text-xl font-semibold">{name}</p>
    </div>
  );
};

export default IconButton;
