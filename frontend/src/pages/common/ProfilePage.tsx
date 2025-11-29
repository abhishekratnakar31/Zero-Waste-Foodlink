import { useState } from 'react';
import { User, MapPin, Phone, Mail, Building, Save, Loader2 } from 'lucide-react';

export default function ProfilePage() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1 234 567 890',
        address: '123 Main St, New York, NY',
        organization: 'Spicy Bites Restaurant'
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
    };

    return (
        <div className="p-6 md:p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Profile Settings</h1>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-3xl font-bold text-white">
                        {formData.name.charAt(0)}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white">{formData.name}</h2>
                        <p className="text-gray-400">{formData.organization}</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                <User size={16} /> Full Name
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                <Mail size={16} /> Email Address
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                <Phone size={16} /> Phone Number
                            </label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                <Building size={16} /> Organization Name
                            </label>
                            <input
                                type="text"
                                value={formData.organization}
                                onChange={e => setFormData({ ...formData, organization: e.target.value })}
                                className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <MapPin size={16} /> Address
                        </label>
                        <textarea
                            rows={3}
                            value={formData.address}
                            onChange={e => setFormData({ ...formData, address: e.target.value })}
                            className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                        />
                    </div>

                    <div className="pt-4 flex justify-end">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors flex items-center gap-2 disabled:opacity-50"
                        >
                            {loading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
