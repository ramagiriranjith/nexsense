import { Heart, Instagram, Linkedin, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-border overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Bubbles - Sky Blue - 20 total */}
        <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-gradient-to-br from-sky-300/20 to-sky-400/15 rounded-full animate-bubble-1"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-gradient-to-br from-sky-400/25 to-sky-300/18 rounded-full animate-bubble-2"></div>
        <div className="absolute bottom-1/2 left-1/3 w-2 h-2 bg-gradient-to-br from-sky-500/30 to-sky-400/20 rounded-full animate-bubble-3"></div>
        <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-gradient-to-br from-sky-300/18 to-sky-500/12 rounded-full animate-bubble-1" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/6 w-3 h-3 bg-gradient-to-br from-sky-400/22 to-sky-300/16 rounded-full animate-bubble-2" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-4 h-4 bg-gradient-to-br from-sky-300/20 to-sky-500/15 rounded-full animate-bubble-3" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 left-2/3 w-2 h-2 bg-gradient-to-br from-sky-500/25 to-sky-400/18 rounded-full animate-bubble-1" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/6 right-1/2 w-3 h-3 bg-gradient-to-br from-sky-400/23 to-sky-300/17 rounded-full animate-bubble-2" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-3/4 left-1/8 w-4 h-4 bg-gradient-to-br from-sky-300/24 to-sky-500/16 rounded-full animate-bubble-3" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-1/8 right-1/8 w-2 h-2 bg-gradient-to-br from-sky-500/28 to-sky-400/20 rounded-full animate-bubble-1" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute bottom-2/3 left-3/4 w-5 h-5 bg-gradient-to-br from-sky-400/22 to-sky-300/15 rounded-full animate-bubble-2" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute top-3/4 right-3/4 w-3 h-3 bg-gradient-to-br from-sky-300/26 to-sky-500/18 rounded-full animate-bubble-3" style={{animationDelay: '4.2s'}}></div>
        <div className="absolute bottom-1/6 left-1/2 w-2 h-2 bg-gradient-to-br from-sky-500/24 to-sky-400/17 rounded-full animate-bubble-1" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-5/6 right-2/3 w-4 h-4 bg-gradient-to-br from-sky-400/20 to-sky-300/14 rounded-full animate-bubble-2" style={{animationDelay: '2.8s'}}></div>
        <div className="absolute bottom-1/8 left-7/8 w-3 h-3 bg-gradient-to-br from-sky-300/22 to-sky-500/16 rounded-full animate-bubble-3" style={{animationDelay: '3.8s'}}></div>
        <div className="absolute top-7/8 right-1/12 w-2 h-2 bg-gradient-to-br from-sky-500/26 to-sky-400/19 rounded-full animate-bubble-1" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute bottom-5/6 left-11/12 w-4 h-4 bg-gradient-to-br from-sky-400/24 to-sky-300/17 rounded-full animate-bubble-2" style={{animationDelay: '4.5s'}}></div>
        <div className="absolute top-2/5 right-4/5 w-3 h-3 bg-gradient-to-br from-sky-300/25 to-sky-500/18 rounded-full animate-bubble-3" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-3/5 left-4/5 w-2 h-2 bg-gradient-to-br from-sky-500/22 to-sky-400/15 rounded-full animate-bubble-1" style={{animationDelay: '3.2s'}}></div>
        <div className="absolute top-4/5 right-1/5 w-5 h-5 bg-gradient-to-br from-sky-400/26 to-sky-300/19 rounded-full animate-bubble-2" style={{animationDelay: '2.2s'}}></div>
        
        {/* Subtle animated lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1000 400">
            <path
              d="M100,150 Q300,100 500,150 T900,150"
              stroke="hsl(var(--primary) / 0.06)"
              strokeWidth="1"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M50,250 Q250,200 450,250 T850,250"
              stroke="hsl(var(--accent) / 0.05)"
              strokeWidth="1"
              fill="none"
              className="animate-bounce"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-sky-50 bg-clip-text text-transparent">
              NexSense
            </h1>
          
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              Where brands go when they’re ready to think clearly, move intentionally, and grow with purpose.
            </p>
            
            {/* Social Media Icons */}
            {/* <div className="flex items-center gap-4">
              <a href="#" className="group w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="group w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="group w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="group w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div> */}
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-blue-900 transition-colors duration-200 cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {["Social Media Marketing", "SEO", "Performance Marketing", "Content Creation", "Web Design"].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-blue-900 transition-colors duration-200 cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 min-w-[20px] text-blue-900" />
                <span>cmo@nsdigitalcorp.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 min-w-[20px] text-blue-900" />
                <span>+91 87905 55087</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 min-w-[20px] text-blue-900 mt-1" />
                <span>Financial District, Hyderabad,<br/> Telangana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 NexSense. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-muted-foreground text-sm mt-4 md:mt-0">
            Made with
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            for digital success
          </div>
        </div>
      </div>
    </footer>
  );
};
