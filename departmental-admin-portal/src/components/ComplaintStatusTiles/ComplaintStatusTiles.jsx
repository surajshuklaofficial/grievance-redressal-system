const Tile = ({ color, text }) => (
    <div
      className={`h-56 w-56 rounded-md ${color} flex flex-col justify-center items-center text-white font-semibold shadow-md`}
      style={{ background: `linear-gradient(0deg, ${color} 0%, ${color} 100%)` }}
    >
      {text}
      <p>No of Complaints: 12344</p>
    </div>
  );
  
  const ComplaintStatusTiles = () => {
    return (
      <div className="m-6 flex gap-6">
        <Tile color="bg-[#d85217]" text="Received" />
        <Tile color="bg-[#17a2b8]" text="In Progress" />
        <Tile color="bg-[#28a745]" text="Closed" />
      </div>
    );
  };
  
  export default ComplaintStatusTiles;
  