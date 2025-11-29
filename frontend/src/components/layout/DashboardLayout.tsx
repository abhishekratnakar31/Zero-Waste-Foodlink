import { useState } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    History,
    User,
    LogOut,
    Menu,
    X,
    ChefHat,
    HeartHandshake
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

export default function DashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Mock role detection based on current path or local storage
    // In a real app, this would come from an Auth Context
    const isRestaurant = location.pathname.includes('restaurant');
    const role = isRestaurant ? 'Restaurant' : 'NGO';

    const handleLogout = () => {
        navigate('/');
    };

    const navItems = [
        {
            label: 'Dashboard',
            icon: LayoutDashboard,
            path: isRestaurant ? '/restaurant-dashboard' : '/ngo-dashboard'
        },
        {
            label: 'History',
            icon: History,
            path: '/history'
        },
        {
            label: 'Profile',
            icon: User,
            path: '/profile'
        }
    ];

    return (
        <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-blue-500/30 flex">

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 border border-gray-800 rounded-lg text-white"
            >
                <Menu size={24} />
            </button>

            {/* Sidebar Backdrop (Mobile) */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSidebarOpen(false)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.aside
                className={cn(
                    "fixed lg:sticky top-0 left-0 h-screen w-72 bg-gray-900/50 backdrop-blur-xl border-r border-gray-800 z-50 lg:translate-x-0 transition-transform duration-300",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="p-6 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className={cn("p-2 rounded-lg", isRestaurant ? "bg-blue-500/10 text-blue-500" : "bg-purple-500/10 text-purple-500")}>
                                {isRestaurant ? <ChefHat size={24} /> : <HeartHandshake size={24} />}
                            </div>
                            <div>
                                <h1 className="font-bold text-lg leading-tight">FoodLink</h1>
                                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">{role} Portal</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="lg:hidden p-1 text-gray-400 hover:text-white"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-2 flex-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsSidebarOpen(false)}
                                className={({ isActive }) => cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                    isActive
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                )}
                            >
                                <item.icon size={20} />
                                <span className="font-medium">{item.label}</span>
                            </NavLink>
                        ))}
                    </nav>

                    {/* Logout */}
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors mt-auto"
                    >
                        <LogOut size={20} />
                        <span className="font-medium">Sign Out</span>
                    </button>
                </div>
            </motion.aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">
                <Outlet />
            </main>

        </div>
    );
}
