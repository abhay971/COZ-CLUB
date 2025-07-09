import React from 'react';
import { useState } from 'react';
import { 
  Home, 
  User, 
  Settings, 
  FileText, 
  BarChart3, 
  MessageSquare, 
  Bell, 
  Search,
  X,
  ChevronDown,
  Calendar,
  Folder,
  Users,
  ChevronLeft,
  ChevronRight,
  Activity,
  Database,
  Star
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('dashboard');
  const [expandedItems, setExpandedItems] = useState({});

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/analytics' },
    { 
      id: 'projects', 
      label: 'Projects', 
      icon: Folder, 
      path: '/projects',
      submenu: [
        { id: 'active-projects', label: 'Active Projects', path: '/projects/active' },
        { id: 'completed', label: 'Completed', path: '/projects/completed' },
        { id: 'archived', label: 'Archived', path: '/projects/archived' }
      ]
    },
    { id: 'messages', label: 'Messages', icon: MessageSquare, path: '/messages', badge: '5' },
    { id: 'team', label: 'Team', icon: Users, path: '/team' },
    { id: 'calendar', label: 'Calendar', icon: Calendar, path: '/calendar' },
    { id: 'documents', label: 'Documents', icon: FileText, path: '/documents' },
    { id: 'activity', label: 'Activity', icon: Activity, path: '/activity' },
    { id: 'database', label: 'Database', icon: Database, path: '/database' },
    { id: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications', badge: '12' },
    { id: 'profile', label: 'Profile', icon: User, path: '/profile' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' }
  ];

  const MenuItem = ({ item, isSubmenu = false }) => {
    const Icon = item.icon;
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isExpanded = expandedItems[item.id];
    const isActive = activeItem === item.id;

    return (
      <div className="relative">
        <button
          onClick={() => {
            if (hasSubmenu) {
              toggleExpanded(item.id);
            } else {
              setActiveItem(item.id);
            }
          }}
          className={`
            w-full flex items-center justify-between text-left rounded-xl transition-all duration-200 group relative
            ${isActive 
              ? 'bg-gradient-to-r from-[#F37E3A] to-[#288EC2] text-white shadow-lg transform scale-[1.02]' 
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }
            ${isOpen ? 'px-4 py-3 mx-2' : 'px-3 py-3 mx-1 justify-center'}
            ${isSubmenu ? 'ml-8 py-2' : ''}
          `}
        >
          <div className="flex items-center space-x-3">
            {Icon && (
              <Icon 
                size={20} 
                className={`${isActive ? 'text-white' : 'text-gray-500 group-hover:text-[#F37E3A]'} transition-colors`}
              />
            )}
            {isOpen && (
              <>
                <span className="font-medium text-sm">{item.label}</span>
                {item.badge && (
                  <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full font-semibold">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </div>
          {hasSubmenu && isOpen && (
            <ChevronDown 
              size={16} 
              className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''} ${isActive ? 'text-white' : 'text-gray-400'}`}
            />
          )}
        </button>

        {hasSubmenu && isExpanded && isOpen && (
          <div className="mt-2 space-y-1 bg-gray-50 rounded-lg mx-2 p-2">
            {item.submenu.map((subItem) => (
              <button
                key={subItem.id}
                onClick={() => setActiveItem(subItem.id)}
                className={`
                  w-full flex items-center px-4 py-2 text-left rounded-lg transition-all duration-200 text-sm
                  ${activeItem === subItem.id 
                    ? 'bg-white text-[#F37E3A] shadow-sm font-medium' 
                    : 'text-gray-600 hover:bg-white hover:text-gray-900'
                  }
                `}
              >
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                {subItem.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`
        fixed left-0 bg-white shadow-xl z-40 
        transition-all duration-300 ease-in-out
        ${isOpen ? 'w-72' : 'w-18'}
        pt-[88px] sm:pt-[96px] lg:pt-[104px]
        h-screen border-r border-gray-100
      `}>
        {/* Toggle Button */}
        <div className="absolute -right-3 top-6 z-50">
          <button
            onClick={toggleSidebar}
            className="p-2 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 hover:shadow-xl"
          >
            {isOpen ? <ChevronLeft size={18} className="text-gray-600" /> : <ChevronRight size={18} className="text-gray-600" />}
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col h-full overflow-hidden">
          {/* Sidebar Header */}
          {/* {isOpen && (
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#F37E3A] to-[#288EC2] rounded-xl flex items-center justify-center shadow-lg">
                  <Star size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-800">Dashboard</h2>
                  <p className="text-xs text-gray-500">Welcome back</p>
                </div>
              </div>
            </div>
          )} */}

          {/* Collapsed Header */}
          {/* {!isOpen && (
            <div className="p-3 border-b border-gray-100">
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-gradient-to-r from-[#F37E3A] to-[#288EC2] rounded-xl flex items-center justify-center shadow-lg">
                  <Star size={20} className="text-white" />
                </div>
              </div>
            </div>
          )} */}

          {/* Search Bar */}
          {/* {isOpen && (
            <div className="p-4 border-b border-gray-100">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F37E3A] focus:border-transparent bg-gray-50 text-sm"
                />
              </div>
            </div>
          )} */}

          {/* Quick Stats */}
          {/* {isOpen && (
            <div className="p-4 border-b border-gray-100">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-[#F37E3A] to-[#d66a2f] rounded-lg p-3 text-white">
                  <div className="text-xl font-bold">24</div>
                  <div className="text-xs opacity-90">Projects</div>
                </div>
                <div className="bg-gradient-to-br from-[#288EC2] to-[#236f9a] rounded-lg p-3 text-white">
                  <div className="text-xl font-bold">12</div>
                  <div className="text-xs opacity-90">Tasks</div>
                </div>
              </div>
            </div>
          )} */}

          {/* Navigation Menu */}
          <nav className="flex-1 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </nav>

          {/* User Profile Section */}
          <div className="border-t border-gray-100 bg-gradient-to-r from-gray-50 to-gray-100">
            {isOpen ? (
              <div className="p-4">
                <div className="flex items-center space-x-3 bg-white rounded-xl p-3 shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6EBD49] to-[#288EC2] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">JD</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">John Doe</p>
                    <p className="text-xs text-gray-500">Premium Member</p>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Settings size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-3 flex justify-center">
                <div className="w-10 h-10 bg-gradient-to-r from-[#6EBD49] to-[#288EC2] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-semibold text-sm">JD</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
     
    </div>
  );
};

export default Sidebar;