import { Target, Users, Award, Zap, Flower2, Leaf } from "lucide-react";
import pic_2 from "../../public/pic_2.jpg"
import pic_3 from "../../public/pic_3.jpg"

const stats = [
  { icon: Users, number: "200+", label: "Happy Clients" },
  { icon: Target, number: "95%", label: "Success Rate" },
  { icon: Award, number: "50+", label: "Awards Won" },
  { icon: Zap, number: "24/7", label: "Support" }
];

export const About = () => {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Background Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Multiple Floating Bubbles with different animations - Sky Blue - 20 total */}
        <div className="absolute top-1/6 left-1/5 w-6 h-6 bg-gradient-to-br from-sky-400/25 to-sky-300/18 rounded-full animate-bubble-1"></div>
        <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-br from-sky-300/30 to-sky-500/22 rounded-full animate-bubble-2"></div>
        <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-gradient-to-br from-sky-500/35 to-sky-400/25 rounded-full animate-bubble-3"></div>
        <div className="absolute top-1/3 right-1/3 w-7 h-7 bg-gradient-to-br from-sky-400/25 to-sky-300/18 rounded-full animate-bubble-1" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-gradient-to-br from-sky-300/40 to-sky-500/30 rounded-full animate-bubble-2" style={{animationDelay: '1s'}}></div>
        
        {/* Additional scattered bubbles */}
        <div className="absolute top-16 left-1/6 w-5 h-5 bg-gradient-to-br from-sky-500/22 to-sky-400/16 rounded-full animate-bubble-3" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 right-1/6 w-6 h-6 bg-gradient-to-br from-sky-300/28 to-sky-500/20 rounded-full animate-bubble-1" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/6 left-2/3 w-7 h-7 bg-gradient-to-br from-sky-400/26 to-sky-300/19 rounded-full animate-bubble-2" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 left-1/8 w-3 h-3 bg-gradient-to-br from-sky-500/32 to-sky-400/24 rounded-full animate-bubble-3" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-2/3 right-1/8 w-8 h-8 bg-gradient-to-br from-sky-300/24 to-sky-500/17 rounded-full animate-bubble-1" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-gradient-to-br from-sky-400/30 to-sky-300/22 rounded-full animate-bubble-2" style={{animationDelay: '4.5s'}}></div>
        <div className="absolute bottom-1/2 right-3/4 w-6 h-6 bg-gradient-to-br from-sky-500/28 to-sky-400/20 rounded-full animate-bubble-3" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-1/8 left-1/2 w-5 h-5 bg-gradient-to-br from-sky-400/22 to-sky-300/16 rounded-full animate-bubble-1" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-3/4 right-2/3 w-7 h-7 bg-gradient-to-br from-sky-300/27 to-sky-500/19 rounded-full animate-bubble-2" style={{animationDelay: '2.8s'}}></div>
        <div className="absolute top-5/6 left-1/3 w-3 h-3 bg-gradient-to-br from-sky-500/30 to-sky-400/22 rounded-full animate-bubble-3" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute bottom-1/8 right-1/5 w-6 h-6 bg-gradient-to-br from-sky-400/26 to-sky-300/18 rounded-full animate-bubble-1" style={{animationDelay: '3.2s'}}></div>
        <div className="absolute top-2/5 left-1/12 w-4 h-4 bg-gradient-to-br from-sky-300/25 to-sky-500/17 rounded-full animate-bubble-2" style={{animationDelay: '4.2s'}}></div>
        <div className="absolute bottom-3/5 right-1/12 w-8 h-8 bg-gradient-to-br from-sky-500/24 to-sky-400/16 rounded-full animate-bubble-3" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-4/5 left-5/6 w-3 h-3 bg-gradient-to-br from-sky-400/28 to-sky-300/20 rounded-full animate-bubble-1" style={{animationDelay: '2.3s'}}></div>
        <div className="absolute bottom-2/5 right-5/6 w-5 h-5 bg-gradient-to-br from-sky-300/26 to-sky-500/18 rounded-full animate-bubble-2" style={{animationDelay: '3.8s'}}></div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-60">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <path
              d="M100,250 Q300,150 500,250 T900,250"
              stroke="hsl(var(--primary) / 0.08)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M50,450 Q250,350 450,450 T850,450"
              stroke="hsl(var(--accent) / 0.06)"
              strokeWidth="1"
              fill="none"
              className="animate-bounce"
            />
            <path
              d="M200,650 Q400,550 600,650 T1000,650"
              stroke="hsl(var(--primary) / 0.09)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <span className="text-blue-900">Who</span>
              <span className="text-sky-600"> We Are</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nexsense is a digital marketing studio shaped by clarity, guided by curiosity, and built for change.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We work with businesses who want more than momentum - they want meaning. With strategy as structure and storytelling as substance, we help brands show up with intention in the digital world.<br/>
From algorithm to audience, every move we make is deliberate. Not just what works - what matters.

            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group text-center p-4 rounded-lg hover:bg-sky-100 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-sky-600 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
              <img
                src={pic_3}
                alt="Team collaboration in modern office"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            </div>
            
            {/* Floating Animation Elements */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-accent/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-primary/15 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              <span className="text-blue-900">Our</span>
              <span className="text-sky-600"> Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What we believe shapes how we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-card hover:bg-card/80 rounded-xl p-6 border border-border transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="mb-4 relative">
                <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-sky-900 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-sky-600 transition-colors duration-200">
                Sense over noise
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Thoughtful &gt; trendy. Always.
              </p>
            </div>

            <div className="group bg-card hover:bg-card/80 rounded-xl p-6 border border-border transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="mb-4 relative">
                <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Award className="w-6 h-6 text-sky-900 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-sky-600 transition-colors duration-200">
                Quiet confidence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We let the work speak - no hype required.
              </p>
            </div>

            <div className="group bg-card hover:bg-card/80 rounded-xl p-6 border border-border transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="mb-4 relative">
                <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Target className="w-6 h-6 text-sky-900 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-sky-600 transition-colors duration-200">
                Precision, always
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every word, pixel, and metric has a reason.
              </p>
            </div>

            <div className="group bg-card hover:bg-card/80 rounded-xl p-6 border border-border transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="mb-4 relative">
                <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Leaf className="w-6 h-6 text-sky-900 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-sky-600 transition-colors duration-200">
                Adaptability as nature
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The digital world moves fast. So do we - with direction.
              </p>
            </div>

            <div className="group bg-card hover:bg-card/80 rounded-xl p-6 border border-border transition-all duration-300 hover:scale-105 hover:shadow-lg md:col-span-2 lg:col-span-1">
              <div className="mb-4 relative">
                <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Users className="w-6 h-6 text-sky-900 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-sky-600 transition-colors duration-200">
                Partnership over project
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We work with you, not for you. Your wins are ours too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
