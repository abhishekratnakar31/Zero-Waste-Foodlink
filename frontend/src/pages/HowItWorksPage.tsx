import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Leaf } from 'lucide-react';

export default function HowItWorksPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-blue-500/30 overflow-hidden">

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center">
                            <Leaf size={16} className="text-white" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            FoodLink
                        </span>
                    </div>
                    <button
                        onClick={() => navigate('/')}
                        className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </button>
                </div>
            </nav>

            {/* Content */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden min-h-screen flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />
                <div className="max-w-7xl mx-auto relative z-10 w-full">
                    <div className="text-center mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                        >
                            How It Works
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 max-w-2xl mx-auto text-xl"
                        >
                            Seamlessly connecting surplus to scarcity through technology.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-12">
                            {[
                                {
                                    step: "01",
                                    title: "Restaurant Posts Donation",
                                    desc: "Quickly list surplus food details. Our AI suggests shelf life and packaging tips."
                                },
                                {
                                    step: "02",
                                    title: "Instant Notification",
                                    desc: "Nearby NGOs get real-time alerts based on food type and quantity needed."
                                },
                                {
                                    step: "03",
                                    title: "Pickup & Distribution",
                                    desc: "NGO accepts and collects the food. Impact stats are updated instantly."
                                }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.2) }}
                                    viewport={{ once: true }}
                                    className="flex gap-6"
                                >
                                    <div className="text-5xl font-bold text-gray-800 font-mono">{step.step}</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-lg">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
                            <div className="relative bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl">
                                {/* Abstract UI Representation */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-40 h-5 bg-gray-800 rounded-full" />
                                        <div className="w-10 h-10 bg-blue-500/20 rounded-full" />
                                    </div>
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className="flex items-center gap-4 p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50">
                                            <div className="w-12 h-12 rounded-xl bg-gray-700" />
                                            <div className="flex-1 space-y-3">
                                                <div className="w-32 h-4 bg-gray-700 rounded-full" />
                                                <div className="w-20 h-3 bg-gray-800 rounded-full" />
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-emerald-500/20" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
