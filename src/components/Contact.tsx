import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Facebook, Youtube, MessageCircle } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Multiple Floating Bubbles */}
        <div className="absolute top-1/6 left-1/5 w-6 h-6 bg-gradient-to-br from-sky-400/25 to-sky-300/18 rounded-full animate-bubble-1"></div>
        <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-br from-sky-300/30 to-sky-500/22 rounded-full animate-bubble-2"></div>
        <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-gradient-to-br from-sky-500/35 to-sky-400/25 rounded-full animate-bubble-3"></div>
        <div className="absolute top-1/3 right-1/3 w-7 h-7 bg-gradient-to-br from-sky-400/25 to-sky-300/18 rounded-full animate-bubble-1" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-gradient-to-br from-sky-300/40 to-sky-500/30 rounded-full animate-bubble-2" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-16 left-1/6 w-5 h-5 bg-gradient-to-br from-sky-500/22 to-sky-400/16 rounded-full animate-bubble-3" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 right-1/6 w-6 h-6 bg-gradient-to-br from-sky-300/28 to-sky-500/20 rounded-full animate-bubble-1" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/6 left-2/3 w-7 h-7 bg-gradient-to-br from-sky-400/26 to-sky-300/19 rounded-full animate-bubble-2" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-3/4 left-1/8 w-3 h-3 bg-gradient-to-br from-sky-500/32 to-sky-400/24 rounded-full animate-bubble-3" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-2/3 right-1/8 w-8 h-8 bg-gradient-to-br from-sky-300/24 to-sky-500/17 rounded-full animate-bubble-1" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-gradient-to-br from-sky-400/30 to-sky-300/22 rounded-full animate-bubble-2" style={{ animationDelay: '4.5s' }}></div>
        <div className="absolute bottom-1/2 right-3/4 w-6 h-6 bg-gradient-to-br from-sky-500/28 to-sky-400/20 rounded-full animate-bubble-3" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-1/8 left-1/2 w-5 h-5 bg-gradient-to-br from-sky-400/22 to-sky-300/16 rounded-full animate-bubble-1" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-3/4 right-2/3 w-7 h-7 bg-gradient-to-br from-sky-300/27 to-sky-500/19 rounded-full animate-bubble-2" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute top-5/6 left-1/3 w-3 h-3 bg-gradient-to-br from-sky-500/30 to-sky-400/22 rounded-full animate-bubble-3" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute bottom-1/8 right-1/5 w-6 h-6 bg-gradient-to-br from-sky-400/26 to-sky-300/18 rounded-full animate-bubble-1" style={{ animationDelay: '3.2s' }}></div>
        <div className="absolute top-2/5 left-1/12 w-4 h-4 bg-gradient-to-br from-sky-300/25 to-sky-500/17 rounded-full animate-bubble-2" style={{ animationDelay: '4.2s' }}></div>
        <div className="absolute bottom-3/5 right-1/12 w-8 h-8 bg-gradient-to-br from-sky-500/24 to-sky-400/16 rounded-full animate-bubble-3" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-4/5 left-5/6 w-3 h-3 bg-gradient-to-br from-sky-400/28 to-sky-300/20 rounded-full animate-bubble-1" style={{ animationDelay: '2.3s' }}></div>
        <div className="absolute bottom-2/5 right-5/6 w-5 h-5 bg-gradient-to-br from-sky-300/26 to-sky-500/18 rounded-full animate-bubble-2" style={{ animationDelay: '3.8s' }}></div>

        {/* Animated background lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
          <circle cx="200" cy="200" r="2" fill="hsl(var(--primary))" className="animate-pulse">
            <animate attributeName="r" values="2;8;2" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="800" cy="300" r="3" fill="hsl(var(--accent))" className="animate-bounce">
            <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="700" r="2" fill="hsl(var(--primary))" className="animate-ping">
            <animate attributeName="r" values="2;10;2" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="500" r="3" fill="hsl(var(--accent))" className="animate-pulse">
            <animate attributeName="r" values="3;7;3" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="600" r="2" fill="hsl(var(--primary))" className="animate-bounce">
            <animate attributeName="r" values="2;9;2" dur="4.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to take your digital marketing to the next level? Let's discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="group flex items-start gap-4 p-6 rounded-xl hover:bg-card/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Email Us</h3>
                <p className="text-muted-foreground">hello@nexsense.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="group flex items-start gap-4 p-6 rounded-xl hover:bg-card/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Location */}
            <div className="group flex items-start gap-4 p-6 rounded-xl hover:bg-card/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Visit Us</h3>
                <p className="text-muted-foreground">123 Business Ave, Suite 100<br />City, State 12345</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="relative mt-8">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Stay in Touch</h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* Instagram */}
                  <a href="#" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg flex items-center justify-center animate-rotate-social" style={{ animationDelay: '0.5s' }}>
                      <Instagram className="w-10 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors flex-1">Instagram</span>
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center animate-rotate-social" style={{ animationDelay: '3s' }}>
                      <MessageCircle className="w-10 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors flex-1">WhatsApp</span>
                  </a>


                  {/* <a href="#" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center animate-rotate-social" style={{animationDelay: '0.5s'}}>
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors flex-1">LinkedIn</span>
                  </a>

                  
                   <a href="#" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center animate-rotate-social" style={{animationDelay: '1s'}}>
                      <Facebook className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors flex-1">Facebook</span>
                  </a>

                  
                  <a href="#" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center animate-rotate-social" style={{animationDelay: '1.5s'}}>
                      <Youtube className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors flex-1">YouTube</span>
                  </a>  */}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-card rounded-xl p-8 border border-border relative">
            <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-accent/15 rounded-full animate-bounce"></div>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="subject" value="New Contact Form Submission" />
              <input type="hidden" name="from_name" value="NexSense Website" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="group w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
