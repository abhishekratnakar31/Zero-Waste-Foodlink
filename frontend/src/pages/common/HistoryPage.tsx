import { useState } from 'react';
import { Search, Filter, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Donation } from '../../types/donation';
import { StatusBadge } from '../../components/StatusBadge';

// Mock Data (Expanded)
const mockHistory: Donation[] = [
    {
        id: "d1",
        restaurantName: "Spicy Bites",
        ngoName: "Hope Foundation",
        foodType: "Curry & Rice",
        quantityMeals: 20,
        status: "PENDING_NGO_CONFIRMATION",
        createdAt: new Date().toISOString(),
        impact: { co2SavedKg: 8.5 }
    },
    {
        id: "d2",
        restaurantName: "Green Salad Bar",
        ngoName: "Food Angels",
        foodType: "Mixed Greens",
        quantityMeals: 15,
        status: "ACCEPTED",
        createdAt: new Date(Date.now() - 3600000).toISOString(),
        impact: { co2SavedKg: 4.2 }
    },
    {
        id: "d3",
        restaurantName: "Bakery Delights",
        ngoName: "Community Kitchen",
        foodType: "Assorted Breads",
        quantityMeals: 50,
        status: "COLLECTED",
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        impact: { co2SavedKg: 15.0 }
    },
    {
        id: "d4",
        restaurantName: "Pizza Palace",
        ngoName: "Hope Foundation",
        foodType: "Pasta Trays",
        quantityMeals: 30,
        status: "COLLECTED",
        createdAt: new Date(Date.now() - 172800000).toISOString(),
        impact: { co2SavedKg: 12.8 }
    },
    {
        id: "d5",
        restaurantName: "Burger Joint",
        ngoName: "Food Angels",
        foodType: "Veggie Burgers",
        quantityMeals: 25,
        status: "REJECTED",
        createdAt: new Date(Date.now() - 259200000).toISOString(),
        impact: { co2SavedKg: 0 }
    }
];

export default function HistoryPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState<string>('ALL');

    const filteredDonations = mockHistory.filter(donation => {
        const matchesSearch =
            donation.foodType?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            donation.restaurantName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            donation.ngoName?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = filterStatus === 'ALL' || donation.status === filterStatus;

        return matchesSearch && matchesStatus;
    });

    return (
        <div className="p-6 md:p-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <h1 className="text-3xl font-bold text-white">Donation History</h1>

                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search donations..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full sm:w-64 bg-gray-900 border border-gray-800 text-white pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        />
                    </div>

                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="w-full sm:w-48 bg-gray-900 border border-gray-800 text-white pl-10 pr-8 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none cursor-pointer"
                        >
                            <option value="ALL">All Status</option>
                            <option value="PENDING_NGO_CONFIRMATION">Pending</option>
                            <option value="ACCEPTED">Accepted</option>
                            <option value="COLLECTED">Collected</option>
                            <option value="REJECTED">Rejected</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-800 text-gray-400 text-sm uppercase tracking-wider">
                                <th className="p-4 font-medium">Date</th>
                                <th className="p-4 font-medium">Food Type</th>
                                <th className="p-4 font-medium">Quantity</th>
                                <th className="p-4 font-medium">Organization</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium text-right">Impact</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                            <AnimatePresence>
                                {filteredDonations.map((donation) => (
                                    <motion.tr
                                        key={donation.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="group hover:bg-gray-800/50 transition-colors"
                                    >
                                        <td className="p-4 text-gray-300">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} className="text-gray-500" />
                                                {new Date(donation.createdAt).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="p-4 font-medium text-white">{donation.foodType}</td>
                                        <td className="p-4 text-gray-300">{donation.quantityMeals} meals</td>
                                        <td className="p-4 text-gray-300">
                                            {donation.restaurantName || donation.ngoName}
                                        </td>
                                        <td className="p-4">
                                            <StatusBadge status={donation.status} />
                                        </td>
                                        <td className="p-4 text-right font-medium text-emerald-400">
                                            {donation.impact?.co2SavedKg}kg CO₂
                                        </td>
                                    </motion.tr>
                                ))}
                            </AnimatePresence>
                        </tbody>
                    </table>
                </div>

                {filteredDonations.length === 0 && (
                    <div className="p-12 text-center text-gray-500">
                        No donations found matching your filters.
                    </div>
                )}
            </div>
        </div>
    );
}
