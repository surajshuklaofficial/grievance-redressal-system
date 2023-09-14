import { USERLOGO } from '../../assets';

const Sidebar = ({ setSidebar, sidebar }) => {
  const sidebarStyle = {
    transform: sidebar ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 2s ease-in-out',
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 w-80 bg-[#181818] text-white overflow-y-auto py-4 px-8" style={sidebarStyle}>
      <div className="flex items-center gap-4" onClick={() => setSidebar(prevState => !prevState)}>
        <img className="w-9" src={USERLOGO} alt="User Logo" />
        <h3 className="text-lg font-semibold">Grievance Admin Portal</h3>
      </div>
      {/* Add sidebar content here */}
    </div>
  );
};

export default Sidebar;
