import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    ChefHat,
    HeartHandshake,
    Leaf,
    Users,
    Utensils
} from 'lucide-react';

export default function LandingPage() {
    const navigate = useNavigate();

    const handleNavigate = (mode: 'LOGIN' | 'SIGNUP', role?: 'RESTAURANT' | 'NGO') => {
        navigate('/auth', { state: { initialMode: mode, initialRole: role } });
    };

    return (
        <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-blue-500/30 overflow-hidden">

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center">
                            <Leaf size={16} className="text-white" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            FoodLink
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/how-it-works')}
                            className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            How It Works
                        </button>
                        <button
                            onClick={() => handleNavigate('SIGNUP')}
                            className="px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center justify-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 w-full h-full">
                    <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
                    <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-blue-300 mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Connecting Surplus to Scarcity
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
                            Turn Excess into <br />
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                                Impact.
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                            The intelligent platform connecting restaurants with surplus food to NGOs feeding the hungry.
                            <span className="text-gray-300 font-normal"> Zero waste, maximum impact.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button
                                onClick={() => handleNavigate('SIGNUP', 'RESTAURANT')}
                                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3 group hover:-translate-y-1"
                            >
                                <ChefHat size={20} />
                                I'm a Restaurant
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => handleNavigate('SIGNUP', 'NGO')}
                                className="w-full sm:w-auto px-8 py-4 bg-gray-800/50 hover:bg-gray-800 text-white border border-gray-700 hover:border-gray-600 rounded-2xl font-medium transition-all backdrop-blur-sm flex items-center justify-center gap-3 group hover:-translate-y-1"
                            >
                                <HeartHandshake size={20} />
                                I'm an NGO
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-0 w-full hidden md:block"
                >
                    <div className="max-w-7xl mx-auto px-6 flex justify-between text-sm text-gray-500 font-medium tracking-widest uppercase">
                        <span>Trusted by 500+ Partners</span>
                        <span>AI-Powered Matching</span>
                        <span>Real-time Tracking</span>
                    </div>
                </motion.div>
            </section>

            {/* Impact Section */}
            <section className="py-32 px-6 relative z-10 bg-black/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Utensils,
                                value: "50,000+",
                                label: "Meals Provided",
                                desc: "Fresh, nutritious food delivered to those in need.",
                                color: "text-orange-400",
                                bg: "bg-orange-500/10"
                            },
                            {
                                icon: Leaf,
                                value: "25 Tons",
                                label: "CO₂ Saved",
                                desc: "Preventing food waste from entering landfills.",
                                color: "text-emerald-400",
                                bg: "bg-emerald-500/10"
                            },
                            {
                                icon: Users,
                                value: "120+",
                                label: "NGO Partners",
                                desc: "A growing network of verified organizations.",
                                color: "text-blue-400",
                                bg: "bg-blue-500/10"
                            }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-3xl bg-gray-900/40 border border-gray-800 backdrop-blur-sm hover:bg-gray-800/60 transition-all group hover:border-gray-700"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <stat.icon size={28} />
                                </div>
                                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-lg font-semibold text-gray-300 mb-3">{stat.label}</div>
                                <p className="text-gray-400 leading-relaxed">{stat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>





            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/5 bg-black">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                        <Leaf size={16} />
                        <span>© 2024 Zero-Waste FoodLink</span>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                        <a href="#" className="hover:text-white transition-colors">About</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
