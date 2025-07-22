import { 
  Search, 
  Megaphone, 
  BarChart3, 
  Palette, 
  Mail, 
  TrendingUp, 
  Laptop,
  FeatherIcon
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "We design digital presence with clarity and character. From voice to visuals, we create social platforms that feel like an extension of your brand - not a trend.",
    color: "text-pink-500"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Visibility isn’t a trend. It’s structure. We optimize content and performance with long-term discovery in mind - so your brand gets found by the right people, at the right time.",
    color: "text-blue-500"
  },
  
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description: "Beyond impressions. Beyond spend. We build campaigns that adapt, listen, and convert - guided by data, sharpened by experience.",
    color: "text-green-500"
  },
  {
    icon: FeatherIcon,
    title: "Content Creation",
    description: "We don’t create content for content’s sake. We tell stories with substance - words, visuals, films, formats - built for impact across every screen.",
    color: "text-purple-500"
  },
  {
    icon: Laptop,
    title: "Website Design & Development",
    description: "Your website is your digital centre of gravity. We design seamless, intuitive experiences that convert - clean UX, mobile-first, and always on brand.",
    color: "text-orange-500"
 }
  // ,
  // {
  //   icon: TrendingUp,
  //   title: "Growth Strategy",
  //   description: "Comprehensive growth plans tailored to your business goals and market opportunities.",
  //   color: "text-teal-500"
  // }
];

export const Services = () => {
  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Multiple Floating Bubbles with different animations - Sky Blue */}
        <div className="absolute top-1/6 left-1/5 w-4 h-4 bg-gradient-to-br from-sky-400/25 to-sky-300/18 rounded-full animate-bubble-1"></div>
        <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-gradient-to-br from-sky-300/30 to-sky-500/22 rounded-full animate-bubble-2"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-gradient-to-br from-sky-500/35 to-sky-400/25 rounded-full animate-bubble-3"></div>
        <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-gradient-to-br from-sky-400/25 to-sky-300/18 rounded-full animate-bubble-1" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-gradient-to-br from-sky-300/40 to-sky-500/30 rounded-full animate-bubble-2" style={{animationDelay: '1s'}}></div>
        
        {/* Additional scattered bubbles - 20 total */}
        <div className="absolute top-16 left-1/6 w-3 h-3 bg-gradient-to-br from-sky-500/22 to-sky-400/16 rounded-full animate-bubble-3" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 right-1/6 w-4 h-4 bg-gradient-to-br from-sky-300/28 to-sky-500/20 rounded-full animate-bubble-1" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/6 left-2/3 w-5 h-5 bg-gradient-to-br from-sky-400/26 to-sky-300/19 rounded-full animate-bubble-2" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 left-1/8 w-2 h-2 bg-gradient-to-br from-sky-500/32 to-sky-400/24 rounded-full animate-bubble-3" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-2/3 right-1/8 w-6 h-6 bg-gradient-to-br from-sky-300/24 to-sky-500/17 rounded-full animate-bubble-1" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-gradient-to-br from-sky-400/30 to-sky-300/22 rounded-full animate-bubble-2" style={{animationDelay: '4.5s'}}></div>
        <div className="absolute bottom-1/2 right-3/4 w-4 h-4 bg-gradient-to-br from-sky-500/28 to-sky-400/20 rounded-full animate-bubble-3" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-1/8 left-1/2 w-3 h-3 bg-gradient-to-br from-sky-400/22 to-sky-300/16 rounded-full animate-bubble-1" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-3/4 right-2/3 w-5 h-5 bg-gradient-to-br from-sky-300/27 to-sky-500/19 rounded-full animate-bubble-2" style={{animationDelay: '2.8s'}}></div>
        <div className="absolute top-5/6 left-1/3 w-2 h-2 bg-gradient-to-br from-sky-500/30 to-sky-400/22 rounded-full animate-bubble-3" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute bottom-1/8 right-1/5 w-4 h-4 bg-gradient-to-br from-sky-400/26 to-sky-300/18 rounded-full animate-bubble-1" style={{animationDelay: '3.2s'}}></div>
        <div className="absolute top-2/5 left-1/12 w-3 h-3 bg-gradient-to-br from-sky-300/25 to-sky-500/17 rounded-full animate-bubble-2" style={{animationDelay: '4.2s'}}></div>
        <div className="absolute bottom-3/5 right-1/12 w-6 h-6 bg-gradient-to-br from-sky-500/24 to-sky-400/16 rounded-full animate-bubble-3" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-4/5 left-5/6 w-2 h-2 bg-gradient-to-br from-sky-400/28 to-sky-300/20 rounded-full animate-bubble-1" style={{animationDelay: '2.3s'}}></div>
        <div className="absolute bottom-2/5 right-5/6 w-4 h-4 bg-gradient-to-br from-sky-300/26 to-sky-500/18 rounded-full animate-bubble-2" style={{animationDelay: '3.8s'}}></div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-60">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <path
              d="M100,300 Q300,200 500,300 T900,300"
              stroke="hsl(var(--primary) / 0.08)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M50,500 Q250,400 450,500 T850,500"
              stroke="hsl(var(--accent) / 0.06)"
              strokeWidth="1"
              fill="none"
              className="animate-bounce"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We create, plan, and build for digital platforms - with a sharp eye on relevance and a long view on growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card hover:bg-card/80 rounded-xl p-6 border border-border transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon with animation */}
              <div className="mb-4 relative">
                <div className="w-20 h-20 rounded-lg bg-accent/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <service.icon className={`w-12 h-12 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};