import { ArrowRight, Link, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Multiple Floating Bubbles with different animations - Sky Blue - 20 total */}
        <div className="absolute top-1/6 left-1/5 w-6 h-6 bg-gradient-to-br from-blue-400/25 to-blue-300/18 rounded-full animate-bubble-1"></div>
        <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-br from-blue-300/30 to-blue-500/22 rounded-full animate-bubble-2"></div>
        <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-gradient-to-br from-blue-500/35 to-blue-400/25 rounded-full animate-bubble-3"></div>
        <div className="absolute top-1/3 right-1/3 w-7 h-7 bg-gradient-to-br from-blue-400/25 to-blue-300/18 rounded-full animate-bubble-1" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-gradient-to-br from-blue-300/40 to-blue-500/30 rounded-full animate-bubble-2" style={{ animationDelay: '1s' }}></div>

        {/* Additional scattered bubbles */}
         <div className="absolute top-16 left-1/6 w-3 h-3 bg-gradient-to-br from-blue-500/22 to-blue-400/16 rounded-full animate-bubble-3" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 right-1/6 w-4 h-4 bg-gradient-to-br from-blue-300/28 to-blue-500/20 rounded-full animate-bubble-1" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/6 left-2/3 w-5 h-5 bg-gradient-to-br from-blue-400/26 to-blue-300/19 rounded-full animate-bubble-2" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 left-1/8 w-2 h-2 bg-gradient-to-br from-blue-500/32 to-blue-400/24 rounded-full animate-bubble-3" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-2/3 right-1/8 w-6 h-6 bg-gradient-to-br from-blue-300/24 to-blue-500/17 rounded-full animate-bubble-1" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-gradient-to-br from-blue-400/30 to-blue-300/22 rounded-full animate-bubble-2" style={{animationDelay: '4.5s'}}></div>
        <div className="absolute bottom-1/2 right-3/4 w-4 h-4 bg-gradient-to-br from-blue-500/28 to-blue-400/20 rounded-full animate-bubble-3" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-1/8 left-1/2 w-3 h-3 bg-gradient-to-br from-blue-400/22 to-blue-300/16 rounded-full animate-bubble-1" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-3/4 right-2/3 w-5 h-5 bg-gradient-to-br from-blue-300/27 to-blue-500/19 rounded-full animate-bubble-2" style={{animationDelay: '2.8s'}}></div>
        <div className="absolute top-5/6 left-1/3 w-2 h-2 bg-gradient-to-br from-blue-500/30 to-blue-400/22 rounded-full animate-bubble-3" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute bottom-1/8 right-1/5 w-4 h-4 bg-gradient-to-br from-blue-400/26 to-blue-300/18 rounded-full animate-bubble-1" style={{animationDelay: '3.2s'}}></div>
        <div className="absolute top-2/5 left-1/12 w-3 h-3 bg-gradient-to-br from-blue-300/25 to-blue-500/17 rounded-full animate-bubble-2" style={{animationDelay: '4.2s'}}></div>
        <div className="absolute bottom-3/5 right-1/12 w-6 h-6 bg-gradient-to-br from-blue-500/24 to-blue-400/16 rounded-full animate-bubble-3" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-4/5 left-5/6 w-2 h-2 bg-gradient-to-br from-blue-400/28 to-blue-300/20 rounded-full animate-bubble-1" style={{animationDelay: '2.3s'}}></div>
        <div className="absolute bottom-2/5 right-5/6 w-4 h-4 bg-gradient-to-br from-blue-300/26 to-blue-500/18 rounded-full animate-bubble-2" style={{animationDelay: '3.8s'}}></div>
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-8" viewBox="0 0 1000 1000">
            <path
              d="M100,200 Q300,100 500,200 T900,200"
              stroke="hsl(var(--primary) / 0.1)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M50,400 Q250,300 450,400 T850,400"
              stroke="hsl(var(--accent) / 0.08)"
              strokeWidth="1"
              fill="none"
              className="animate-bounce"
            />
            <path
              d="M200,600 Q400,500 600,600 T1000,600"
              stroke="hsl(var(--primary) / 0.12)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-accent-foreground mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-blue-900" />
              <span className="text-sm font-medium">Digital Marketing Excellence</span>
            </div>


            {/* Hero Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              <span className="text-blue-900">Strategic by Nature</span>
              <span className="text-sky-600">. Digital by Design</span>
            </h1>


            {/* Hero Subtitle */}
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl lg:max-w-none mx-auto leading-relaxed animate-fade-in">
              {/* NexSense delivers cutting-edge digital marketing solutions that drive growth, 
              enhance brand visibility, and create meaningful connections with your audience. */}
              Where brands go when they’re ready to think clearly, move intentionally, and grow with purpose.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in">
                <button className="group inline-flex items-center gap-2 px-8 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all duration-200 hover:scale-105">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <button className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-sky-100 transition-all duration-200 hover:scale-105">
  Learn More
</button>


              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Digital Marketing Dashboard"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary/15 to-accent/10 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/15 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
