import { Link } from 'react-router-dom';

function SidebarItem({ item }) {
  return (
    <Link 
      to={item.path} 
      className="block px-4 py-2 hover:bg-blue-800 transition-colors"
    >
      {item.title}
    </Link>
  );
}

export default SidebarItem;
