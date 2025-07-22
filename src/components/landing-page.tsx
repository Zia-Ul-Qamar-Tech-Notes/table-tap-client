import {
  QrCode,
  Smartphone,
  Menu,
  Palette,
  Download,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Zap,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <div className="inline-flex items-center px-4 py-2 mb-8 text-sm bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full border border-indigo-200/50 shadow-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Launch Your Digital Menu in Minutes
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
              Transform Your Restaurant with
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Digital QR Menus
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Create stunning, mobile-friendly digital menus for your restaurant.
            Generate QR codes for each branch and let customers view your menu
            instantly - no app downloads required.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/25 transform hover:-translate-y-1 font-semibold">
              Start For Free
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <Link
              href="/pricing"
              className="text-lg text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              <button className="px-10 py-4 text-lg border-2 border-gray-300 rounded-2xl hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 font-semibold text-gray-700 hover:text-indigo-700">
                View Packages
              </button>
            </Link>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left text-white">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm mb-6">
                    <Zap className="w-4 h-4 mr-2" />
                    Live Demo
                  </div>
                  <h3 className="text-3xl font-bold mb-6">See it in action</h3>
                  <p className="text-indigo-100 mb-8 text-lg">
                    Scan this QR code with your phone to experience a live demo
                    menu
                  </p>
                  <div className="bg-white p-6 rounded-2xl inline-block shadow-xl">
                    <QrCode className="h-32 w-32 text-gray-900" />
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 border border-white/20">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full shadow-lg"></div>
                          <span className="font-bold text-gray-900 text-lg">
                            SteakAway
                          </span>
                        </div>
                        <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-400 text-white text-xs rounded-full font-semibold shadow-sm">
                          Live Menu
                        </span>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                          <div className="font-semibold text-gray-900">
                            Ribeye Steak
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            Fresh Steak with mozzarella, basil, and pesto
                          </div>
                          <div className="text-indigo-600 font-bold text-lg mt-2">
                            $18.99
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                          <div className="font-semibold text-gray-900">
                            Flat Iron Steak
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            Well Cooked Steak with garlic butter and herbs
                          </div>
                          <div className="text-indigo-600 font-bold text-lg mt-2">
                            $12.99
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Powerful Features
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
                Everything You Need to Go Digital
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed specifically for restaurant owners who
              want to modernize their menu experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: QrCode,
                title: "One QR Per Branch",
                description:
                  "Generate unique QR codes for each restaurant location. Perfect for multi-branch operations.",
                gradient: "from-indigo-500 to-purple-500",
                bgGradient: "from-indigo-50 to-purple-50",
              },
              {
                icon: Smartphone,
                title: "Mobile-First Design",
                description:
                  "Optimized for smartphones with fast loading times and intuitive navigation for your customers.",
                gradient: "from-emerald-500 to-teal-500",
                bgGradient: "from-emerald-50 to-teal-50",
              },
              {
                icon: Menu,
                title: "Easy Menu Builder",
                description:
                  "Create and organize your menu with categories, items, prices, and images in minutes.",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50",
              },
              {
                icon: Palette,
                title: "Brand Customization",
                description:
                  "Upload your logo and set brand colors to maintain consistent branding across all locations.",
                gradient: "from-orange-500 to-red-500",
                bgGradient: "from-orange-50 to-red-50",
              },
              {
                icon: Download,
                title: "Instant QR Download",
                description:
                  "Download high-quality QR codes ready for printing on table tents, posters, or stickers.",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description:
                  "SSL-secured hosting with 99.9% uptime. Your menu is always available when customers need it.",
                gradient: "from-teal-500 to-green-500",
                bgGradient: "from-teal-50 to-green-50",
              },
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300`}
                ></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
                Get Started in 3 Simple Steps
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Launch your digital menu in minutes, not hours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Setup Your Restaurant",
                description:
                  "Create your account, add restaurant details, and upload your logo",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                step: "2",
                title: "Build Your Menu",
                description:
                  "Add categories, menu items, prices, and mouth-watering photos",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                step: "3",
                title: "Generate QR & Go Live",
                description:
                  "Download your QR code, print it, and start serving digital menus instantly",
                gradient: "from-pink-500 to-red-500",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${item.gradient} text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">
                Why Restaurant Owners Choose Table Tap
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Reduce Printing Costs",
                    description:
                      "No more reprinting menus when prices change. Update instantly online.",
                  },
                  {
                    title: "Improve Customer Experience",
                    description:
                      "Fast, contactless menu access with beautiful mobile-friendly design.",
                  },
                  {
                    title: "Multi-Branch Management",
                    description:
                      "Manage all your restaurant locations from one central dashboard.",
                  },
                  {
                    title: "Real-Time Updates",
                    description:
                      "Change prices, add specials, or update items instantly across all branches.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-7 w-7 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-indigo-100 text-lg leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-8 text-center">
                  {[
                    { value: "99.9%", label: "Uptime" },
                    { value: "<3s", label: "Load Time" },
                    { value: "24/7", label: "Support" },
                    { value: "SSL", label: "Secured" },
                  ].map((stat, index) => (
                    <div key={index}>
                      <div className="text-4xl font-bold mb-2">
                        {stat.value}
                      </div>
                      <div className="text-indigo-200 text-lg">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
                Loved by Restaurant Owners
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers are saying
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Rodriguez",
                role: "Owner, Bella Vista Restaurant",
                avatar: "M",
                gradient: "from-indigo-500 to-purple-500",
                testimonial:
                  "Table Tap transformed our restaurant operations. Customers love the convenience and we save hundreds on printing costs every month.",
              },
              {
                name: "James Chen",
                role: "Manager, Golden Dragon Chain",
                avatar: "J",
                gradient: "from-emerald-500 to-teal-500",
                testimonial:
                  "Setup was incredibly easy. Within 30 minutes, all three of our locations had beautiful digital menus. Highly recommended!",
              },
              {
                name: "Sarah Johnson",
                role: "Owner, The Corner Café",
                avatar: "S",
                gradient: "from-purple-500 to-pink-500",
                testimonial:
                  "The mobile experience is fantastic. Our customers can easily browse the menu and the branding looks professional.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed italic">
                    `&#34;`{testimonial.testimonial}`&#34;`
                  </p>
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">Ready to Go Digital?</h2>
          <p className="text-xl mb-12 text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of restaurants already using Table Tap to deliver
            better customer experiences and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <button className="group inline-flex items-center px-10 py-4 bg-white text-indigo-600 hover:bg-gray-100 text-lg rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 font-bold">
              Start Free Trial
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-10 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-indigo-600 rounded-2xl transition-all duration-300 font-semibold">
              Schedule Demo
            </button>
          </div>
          <p className="text-sm text-indigo-200">
            No credit card required • Setup in minutes • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
