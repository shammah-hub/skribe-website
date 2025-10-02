"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Download, Bell, CreditCard, Shield, Zap, TrendingUp, Check, Star, Users, Lock, ArrowRight, Globe, BarChart3, DollarSign, Calendar, ChevronDown, Play } from "lucide-react";
import { useState } from "react";
import { image } from "framer-motion/client";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Homepage = () => {
  const [activePricing, setActivePricing] = useState("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-black text-white min-h-screen font-sans overflow-hidden relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff0000]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff0000]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#ff0000]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#ff0000]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-50 flex justify-between items-center px-6 md:px-12 py-6 backdrop-blur-sm"
      >
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#ff0000] to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-[#ff0000]/50">
            {/* <Sparkles className="w-6 h-6 text-white" /> */}
            <Image 
              width={20}
              height={20}
              className="w-6 h-6 text-white" 
              src={"/skribe2.png"} alt={"Skribe Logo"}
                          />
          </div>
          <span className="text-2xl font-bold bg-white bg-clip-text text-transparent">
            kribe
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-[#ff0000] transition-colors">Features</a>
          <a href="#pricing" className="hover:text-[#ff0000] transition-colors">Pricing</a>
          <a href="#how-it-works" className="hover:text-[#ff0000] transition-colors">How It Works</a>
          <a href="#testimonials" className="hover:text-[#ff0000] transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-[#ff0000] transition-colors">FAQ</a>
        </div>
        <button className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all border border-white/50 flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download
        </button>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-10 md:py-12 px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff0000]/10 border border-[#ff0000]/30 rounded-full mb-4 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-[#ff0000]" />
            <span className="text-sm text-white">Smart Subscription Banking</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-8xl font-black leading-tight mb-3"
          >
            <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Never Miss any
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#ff0000] via-red-400 to-[#ff0000] bg-clip-text text-transparent animate-pulse">
              Subscription
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              Again
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Track, manage, and pay for all your subscriptions in one beautiful place.
            Say goodbye to surprise charges and hello to financial clarity.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#ff0000] to-red-600 text-white font-bold rounded-full overflow-hidden shadow-2xl shadow-[#ff0000]/50 hover:shadow-[#ff0000]/80 transition-all transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Get Started Free
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-[#ff0000] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button className="group px-8 py-4 bg-white/5 backdrop-blur-md border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-[#ff0000]/40 transition-all transform hover:scale-105 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
  variants={scaleIn}
  className="mt-20 relative"
>
  <div className="absolute inset-0 bg-gradient-to-t from-[#ff0000]/30 to-transparent blur-3xl"></div>
  <div className="relative mx-auto w-full max-w-4xl bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
    <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded bg-[#ff0000]"></div>
        <div className="w-3 h-3 rounded bg-[#ff0000]/60"></div>
        <div className="w-3 h-3 rounded bg-[#ff0000]/30"></div>
      </div>
      <span className="ml-4 text-xs text-gray-500">dashboard.skribe.app</span>
    </div>
    <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-4">
      
        {[
  { name: "Netflix", image: "/netflix.png", amount: "₦5,500", color: "bg-[#ff0000]", next: "Dec 15" },
  { name: "Spotify", image: "/spotify.png", amount: "₦1,300", color: "bg-green-500", next: "Dec 10" },
  { name: "Adobe CC", image: "/adobe.png", amount: "₦16,000", color: "bg-purple-500", next: "Dec 20" },
  { name: "DStv", image: "/dstv.png", amount: "₦15,700", color: "bg-blue-500", next: "Dec 20" },

      ].map((sub, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + idx * 0.1 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#ff0000]/50 transition-all group cursor-pointer"
        >
          <div 
            className="w-12 h-12 rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-lg bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${sub.image})`, backgroundSize: '48px 48px' }}
          ></div>
          <h4 className="text-lg font-bold">{sub.name}</h4>
          <p className="text-2xl font-bold text-[#ff0000]">{sub.amount}</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-gray-400">Monthly</p>
            <p className="text-xs text-gray-500">Next: {sub.next}</p>
          </div>
        </motion.div>
      ))}
    </div>
              <div className="px-8 pb-8">
                <div className="bg-gradient-to-r from-[#ff0000]/20 to-red-500/20 rounded-2xl p-4 border border-[#ff0000]/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Total Monthly Spend</p>
                      <p className="text-3xl font-bold">₦50,000</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-[#ff0000]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="relative py-32 px-6" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent"
            >
              How Skribe Works
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-50 max-w-2xl mx-auto"
            >
              Get started in minutes and take control of your subscriptions
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              {
                step: "01",
                title: "Connect Your Bank",
                description: "Securely link your bank account with bank-level encryption",
                icon: Lock,
              },
              {
                step: "02",
                title: "Auto-Detection",
                description: "Our AI automatically finds all your recurring subscriptions",
                icon: Sparkles,
              },
              {
                step: "03",
                title: "Get Insights",
                description: "View spending patterns, upcoming charges, and save money",
                icon: BarChart3,
              },
              {
                step: "04",
                title: "Manage Everything",
                description: "Cancel, pause, or update subscriptions with one click",
                icon: Zap,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative text-center"
              >
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-gradient-to-r from-[#ff0000]/50 to-transparent -z-10"></div>
                )}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#ff0000] to-red-700 mb-6 shadow-2xl shadow-[#ff0000]/30">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-6xl font-black text-[#ffffff]/50 mb-2">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-100">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6" id="features">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-50 bg-clip-text text-transparent"
            >
              Powerful Features
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-100 max-w-2xl mx-auto"
            >
              Everything you need to take complete control over your subscriptions
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Sparkles,
                title: "Auto-Detect Subscriptions",
                description: "AI-powered detection automatically finds and tracks all your recurring payments across all accounts",
                color: "from-[#ff0000] to-red-600",
              },
              {
                icon: Bell,
                title: "Smart Alerts",
                description: "Get notified before charges hit, with customizable reminders for upcoming payments",
                color: "from-blue-500 to-purple-500",
              },
              {
                icon: CreditCard,
                title: "Virtual Cards",
                description: "Create disposable cards for each subscription with spending limits and automatic cancellation",
                color: "from-green-500 to-teal-500",
              },
              {
                icon: Shield,
                title: "Bank-Level Security",
                description: "Your data is encrypted end-to-end with 256-bit encryption and protected with industry-leading security",
                color: "from-[#ff0000] to-pink-500",
              },
              {
                icon: TrendingUp,
                title: "Spending Insights",
                description: "Visualize your subscription spending patterns with beautiful charts and get personalized recommendations",
                color: "from-purple-500 to-indigo-500",
              },
              {
                icon: Zap,
                title: "One-Click Cancellation",
                description: "Cancel any subscription directly from the app in seconds without calling customer service",
                color: "from-orange-500 to-[#ff0000]",
              },
              {
                icon: Calendar,
                title: "Renewal Calendar",
                description: "See all upcoming renewals in one place with a beautiful calendar view",
                color: "from-cyan-500 to-blue-500",
              },
              {
                icon: DollarSign,
                title: "Price Change Alerts",
                description: "Get notified instantly when a subscription changes its pricing or terms",
                color: "from-emerald-500 to-green-500",
              },
              {
                icon: Globe,
                title: "Multi-Currency Support",
                description: "Track subscriptions in any currency with automatic conversion and exchange rates",
                color: "from-pink-500 to-rose-500",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/30 hover:border-[#ff0000]/30 transition-all hover:transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl from-[#ff0000] to-red-700"></div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-100 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "5K+", label: "Active Users", subtext: "and growing daily" },
            { value: "₦2M+", label: "Money Saved", subtext: "for our users" },
            { value: "5K+", label: "Subscriptions", subtext: "tracked monthly" },
            { value: "4.9★", label: "User Rating", subtext: "on app stores" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              className="text-center p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-[#ff0000]/30 transition-all group"
            >
              <div className="text-5xl font-black bg-gradient-to-r from-[#ff0000] to-red-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-white font-bold mb-1">{stat.label}</div>
              <div className="text-gray-100 text-sm">{stat.subtext}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-32 px-6" id="pricing">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-50 bg-clip-text text-transparent"
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-100 max-w-2xl mx-auto mb-8"
            >
              Choose the plan that works best for you
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10"
            >
              <button
                onClick={() => setActivePricing("monthly")}
                className={`px-6 py-2 rounded-full transition-all ${
                  activePricing === "monthly"
                    ? "bg-[#ff0000] text-white shadow-lg"
                    : "text-gray-100 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActivePricing("yearly")}
                className={`px-6 py-2 rounded-full transition-all ${
                  activePricing === "yearly"
                    ? "bg-[#ff0000] text-white shadow-lg"
                    : "text-gray-100 hover:text-white"
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">Save 20%</span>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Basic",
                price: activePricing === "monthly" ? "$4.99" : "$47.99",
                period: activePricing === "monthly" ? "/month" : "/year",
                description: "Perfect for individuals just getting started",
                features: [
                  "Track up to 10 subscriptions",
                  "Basic spending insights",
                  "Email notifications",
                  "Mobile app access",
                  "Standard support",
                ],
                popular: false,
              },
              {
                name: "Pro",
                price: activePricing === "monthly" ? "$9.99" : "$95.99",
                period: activePricing === "monthly" ? "/month" : "/year",
                description: "Best for power users who want it all",
                features: [
                  "Unlimited subscriptions",
                  "Advanced analytics & insights",
                  "Virtual cards for each subscription",
                  "Priority notifications",
                  "One-click cancellation",
                  "Price change alerts",
                  "Multi-currency support",
                  "Priority support",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: activePricing === "monthly" ? "$19.99" : "$191.99",
                period: activePricing === "monthly" ? "/month" : "/year",
                description: "For teams and businesses",
                features: [
                  "Everything in Pro",
                  "Team management (up to 10 users)",
                  "Centralized billing",
                  "Custom spending limits",
                  "API access",
                  "Dedicated account manager",
                  "Custom integrations",
                  "24/7 phone support",
                ],
                popular: false,
              },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border transition-all hover:transform hover:-translate-y-2 ${
                  plan.popular
                    ? "border-[#ff0000] shadow-2xl shadow-[#ff0000]/20"
                    : "border-white/10 hover:border-[#ff0000]/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 bg-gradient-to-r from-[#ff0000] to-red-600 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-100 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-5xl font-black">{plan.price}</span>
                    <span className="text-white mb-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#ff0000] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-50">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-full font-bold transition-all transform hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#ff0000] to-red-600 text-white shadow-lg shadow-[#ff0000]/50 hover:shadow-[#ff0000]/80"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden"
          >
            <div className="p-8 border-b border-white/10">
              <h3 className="text-3xl font-bold text-center">Compare All Features</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-gray-100">Feature</th>
                    <th className="text-center p-6">Basic</th>
                    <th className="text-center p-6">Pro</th>
                    <th className="text-center p-6">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Subscription Tracking", basic: "10", pro: "Unlimited", enterprise: "Unlimited" },
                    { feature: "Spending Insights", basic: true, pro: true, enterprise: true },
                    { feature: "Virtual Cards", basic: false, pro: true, enterprise: true },
                    { feature: "Price Alerts", basic: false, pro: true, enterprise: true },
                    { feature: "One-Click Cancel", basic: false, pro: true, enterprise: true },
                    { feature: "Team Management", basic: false, pro: false, enterprise: true },
                    { feature: "API Access", basic: false, pro: false, enterprise: true },
                    { feature: "Priority Support", basic: false, pro: true, enterprise: true },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="p-6 text-gray-200">{row.feature}</td>
                      <td className="text-center p-6">
                        {typeof row.basic === "boolean" ? (
                          row.basic ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-gray-600">—</span>
                          )
                        ) : (
                          <span className="text-gray-50">{row.basic}</span>
                        )}
                      </td>
                      <td className="text-center p-6">
                        {typeof row.pro === "boolean" ? (
                          row.pro ? (
                            <Check className="w-5 h-5 text-[#ff0000] mx-auto" />
                          ) : (
                            <span className="text-black">—</span>
                          )
                        ) : (
                          <span className="text-[#ff0000] font-semibold">{row.pro}</span>
                        )}
                      </td>
                      <td className="text-center p-6">
                        {typeof row.enterprise === "boolean" ? (
                          row.enterprise ? (
                            <Check className="w-5 h-5 text-[#ff0000] mx-auto" />
                          ) : (
                            <span className="text-gray-600">—</span>
                          )
                        ) : (
                          <span className="text-[#ff0000] font-semibold">{row.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 px-6" id="testimonials">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-white to-gray-50 bg-clip-text text-transparent"
          >
            Loved by Thousands
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
  {[
    {
      quote: "Skribe saved me from unexpected Netflix debits. Finally have peace of mind with all my subscriptions in one place!",
      author: "Sarah Chen",
      image: "/a.jpg",
      role: "Product Designer",
      rating: 5,
      avatar: "from-[#ff0000] to-pink-500",
    },
    {
      quote: "The virtual card feature is genius. I have complete control over every subscription and can set spending limits easily.",
      author: "Marcus Rodriguez",
      image: "/b.jpg",
      role: "Software Engineer",
      rating: 5,
      avatar: "from-blue-500 to-purple-500",
    },
    {
      quote: "Beautiful design and actually useful. This app pays for itself in savings! Cancelled 5 subscriptions I forgot about.",
      author: "Emma Thompson",
      image: "/c.jpg",
      role: "Marketing Manager",
      rating: 5,
      avatar: "from-green-500 to-teal-500",
    },
    {
      quote: "As a freelancer with tons of tools, Skribe keeps me organized. The spending insights help me budget better.",
      author: "James Wilson",
      role: "Freelance Designer",
      image: "/d.jpg",
      rating: 5,
      avatar: "from-orange-500 to-[#ff0000]",
    },
    {
      quote: "The price change alerts saved me $40/month! Got notified when Adobe increased their price and switched plans.",
      author: "Lisa Park",
      role: "Photographer",
      image: "/e.jpg",
      rating: 5,
      avatar: "from-purple-500 to-pink-500",
    },
    {
      quote: "Managing our team's subscriptions was a nightmare. Skribe made it simple and we're saving money every month.",
      author: "David Kumar",
      role: "Startup Founder",
      image: "/r.jpg",
      rating: 5,
      avatar: "from-yellow-500 to-[#ff0000]",
    },
  ].map((testimonial, idx) => (
    <motion.div
      key={idx}
      variants={fadeInUp}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-[#ff0000]/50 transition-all"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#ff0000] text-[#ff0000]" />
        ))}
      </div>
      <p className="text-lg text-gray-100 mb-6 leading-relaxed italic">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-4">
        <div 
          className="w-12 h-12 rounded-full shadow-lg bg-center bg-cover"
          style={{ backgroundImage: `url(${testimonial.image})` }}
        ></div>
        <div>
          <h4 className="font-bold">{testimonial.author}</h4>
          <p className="text-sm text-white/70">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  ))}
</div>

          {/* Video Testimonial */}
          <motion.div
            variants={fadeInUp}
            className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
            <div className="relative z-10">
              <Image 
              width={20}
              height={20}
              className="w-20 h-20 mx-auto mb-6 text-[#ff0000]"
              src={"/skribe1.png"} alt={"Skribe Logo"}
                          />
              <h3 className="text-3xl font-bold mb-4">See Skribe in Action</h3>
              <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
                Watch how real users are saving money and taking control of their subscriptions
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-[#ff0000] to-red-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#ff0000]/50 transition-all transform hover:scale-105">
                App Download
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 px-6" id="faq">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-100"
            >
              Everything you need to know about Skribe
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {[
              {
                question: "How does Skribe detect my subscriptions?",
                answer: "Skribe uses advanced AI to analyze your bank transactions and automatically identify recurring payments. We detect patterns in payment amounts, merchant names, and billing cycles to find all your subscriptions without any manual input required.",
              },
              {
                question: "Is my financial data secure?",
                answer: "Absolutely. We use bank-level 256-bit encryption for all data transmission and storage. Your credentials are never stored on our servers - we use read-only access through secure banking APIs. We're also SOC 2 Type II certified and regularly audited by third-party security firms.",
              },
              
              {
                question: "What are virtual cards and how do they work?",
                answer: "Virtual cards are unique card numbers you can create for each subscription. You can set spending limits, pause or cancel cards instantly, and each card is isolated - so if one gets compromised, your other subscriptions remain safe. It's like having a separate credit card for every service.",
              },
              {
                question: "Do you support international subscriptions?",
                answer: "Yes! Skribe supports subscriptions in over 150 currencies. We automatically convert everything to your preferred currency and track exchange rate changes. You'll always know exactly how much you're spending, regardless of where the service is based.",
              },
              {
                question: "What happens if a subscription increases its price?",
                answer: "You'll get an instant notification before the new price takes effect. We'll show you the old price, new price, and give you options to either accept the change, negotiate a better deal, or cancel the subscription entirely - all within the app.",
              },
              {
                question: "Can I use Skribe for my business subscriptions?",
                answer: "Definitely! Our Pro and Enterprise plans are perfect for freelancers and businesses. You can track team subscriptions, set up approval workflows, generate expense reports, and even get tax-ready documentation for all your business software expenses.",
              },
              
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-[#ff0000]/30 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-bold pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#ff0000] flex-shrink-0 transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-100 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <p className="text-gray-100 mb-6">Still have questions?</p>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/20 hover:border-[#ff0000]/40 transition-all">
              Contact Support
            </button>
          </motion.div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-50 bg-clip-text text-transparent"
            >
              Works With Your Favorite Services
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-50 max-w-2xl mx-auto"
            >
              Skribe integrates seamlessly with thousands of services and platforms
            </motion.p>
          </motion.div>
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={staggerContainer}
  className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
>
  {[
    { name: "Netflix", color: "bg-[#ff0000]", image: "/netflix.png" },
    { name: "Spotify", color: "bg-green-500", image: "/spotify.png" },
    { name: "Adobe", color: "bg-red-600", image: "/adobe.png" },
    { name: "Amazon", color: "bg-orange-500", image: "/amazon.png" },
    { name: "Apple", color: "bg-gray-600", image: "/music.png" },
    { name: "Microsoft", color: "bg-blue-500", image: "/microsoft.png" },
    { name: "Google", color: "bg-blue-400", image: "/google.png" },
    { name: "Dropbox", color: "bg-blue-600", image: "/dropbox.png" },
    { name: "LinkedIn", color: "bg-blue-700", image: "/linkedin.png" },
    { name: "YouTube", color: "bg-[#ff0000]", image: "/youtube.png" },
    { name: "Disney+", color: "bg-blue-800", image: "/disney.png" },
    { name: "dstv", color: "bg-green-600", image: "/dstv.png" },
  ].map((service, idx) => (
    <motion.div
      key={idx}
      variants={scaleIn}
      className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#ff0000]/30 transition-all group cursor-pointer flex flex-col items-center justify-center"
    >
      <div 
        className="w-16 h-16 rounded-xl mb-4 group-hover:scale-110 transition-transform  bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${service.image})`, backgroundSize: '64px 64px' }}

      ></div>
      <span className="text-sm font-semibold text-gray-50 group-hover:text-white transition-colors">{service.name}</span>
    </motion.div>
  ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <p className="text-2xl text-gray-50 mb-6">Plus 1,000+ more services</p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#ff0000] to-red-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#ff0000]/50 transition-all transform hover:scale-105">
              See All Integrations
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative py-32 px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-[#ff0000] to-red-700 rounded-[3rem] p-16 overflow-hidden shadow-2xl shadow-[#ff0000]/30">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-700"></div>
            </div>
            <div className="relative z-10">
              
              
              <Image 
              width={20}
              height={20}
              className="w-16 h-16 mx-auto mb-6 p-2 bg-white flex justify-center items-center rounded-xl text-white animate-pulse" 
              src={"/skribe1.png"} alt={"Skribe Logo"}
                          />
                          


              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                Ready to Take Control?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Join thousands of users who've already saved money and gained peace of mind. Start your 14-day free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-10 py-5 bg-white text-[#ff0000] font-bold rounded-full shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105 text-lg flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-black text-white font-bold rounded-full hover:bg-black transition-all transform hover:scale-105 text-lg border-2 border-white/20">
                  Learn More
                </button>
              </div>
              <p className="text-white/90 text-sm mt-6">No credit card required • Cancel anytime • 14-day free trial</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#ff0000] to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                  
                  <Image 
              width={20}
              height={20}
              className="w-6 h-6 text-white"
              src={"/skribe2.png"} alt={"Skribe Logo"}
                          />
                </div>
                <span className="text-2xl font-bold">kribe</span>
              </div>
              <p className="text-gray-50 mb-6 max-w-sm">
                Smart subscription banking for the modern world. Take control of your recurring payments and never miss a charge again.
              </p>
              <div className="flex gap-4">
                <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff0000] transition-all">
                  <span className="text-sm text-white">𝕏</span>
                </button>
                <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff0000] transition-all">
                  <span className="text-sm text-white">in</span>
                </button>
                <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff0000] transition-all">
                  <span className="text-sm text-white">f</span>
                </button>
                <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff0000] transition-all">
                  <span className="text-sm text-white">ig</span>
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#ff0000]">Product</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors"></a></li>
                <li><a href="#" className="hover:text-white transition-colors"></a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#ff0000]">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#ff0000]">Support</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors"></a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-200">&copy; {new Date().getFullYear()} Skribe. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#ff0000] transition-colors">Status</a>
              <a href="#" className="hover:text-[#ff0000] transition-colors">Sitemap</a>
              <a href="#" className="hover:text-[#ff0000] transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Homepage;