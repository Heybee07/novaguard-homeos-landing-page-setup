
import { ArrowDown, Camera, Brain, Shield, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
            Protect Your Property Before Danger Reaches It.
          </h1>
          <h2 className="text-2xl md:text-3xl mb-12 text-shadow-lg font-light">
            The world's first mobile-powered AI Butler for live monitoring, event summaries, and instant alerts.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              onClick={() => scrollToSection('investors')}
            >
              Invest in the Future <ChevronRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
              onClick={() => scrollToSection('customers')}
            >
              Secure Your Property Now <ChevronRight className="ml-2" />
            </Button>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-8 h-8" />
          </div>
        </div>
      </section>

      {/* Value Proposition Strip */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Live Monitoring</h3>
                <p className="text-muted-foreground">Watch real-time feeds from any device, anywhere.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Event Summaries</h3>
                <p className="text-muted-foreground">Ask Nova AI Butler for daily, weekly, or monthly summaries of events.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-bold mb-2">Confirmed Alerts</h3>
                <p className="text-muted-foreground">Detect threats and alert nearest security teams — no false alarms.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section id="investors" className="py-24 gradient-dark text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            A Scalable Security Breakthrough You Can Own
          </h2>
          
          <div className="prose prose-lg prose-invert max-w-none mb-8">
            <p className="text-xl mb-6">
              NovaGuard HomeOS is a smart home and business security platform that:
            </p>
            <ul className="space-y-3 text-lg">
              <li>Monitors live WiFi/IP camera feeds</li>
              <li>Detects suspicious movement with AI vision</li>
              <li>Summarizes events via Nova AI Butler</li>
              <li>Sends confirmed alerts to security teams or emergency contacts</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Why Invest:</h3>
            <ul className="space-y-3 text-lg">
              <li>✓ Early access to a high-demand, scalable product</li>
              <li>✓ Mass-market appeal: homeowners, businesses, schools, estates</li>
              <li>✓ Proven AI-driven technology with low-cost hardware</li>
              <li>✓ Positioned for rapid valuation growth by Q1 2026</li>
            </ul>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-white text-secondary hover:bg-white/90 text-lg px-8 py-6"
              onClick={() => window.location.href = '/investment'}
            >
              Book a Call to Discuss Investment Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section id="customers" className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            Secure Your Property — Anywhere, Anytime
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <Camera className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Watch live camera feeds from your phone</span>
                </li>
                <li className="flex items-start">
                  <Brain className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>Ask the Nova AI Butler for daily, weekly, or monthly event summaries</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-6 h-6 text-success mr-3 mt-1 flex-shrink-0" />
                  <span>Detect suspicious movement and confirm threats before alerts are sent</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-6 h-6 text-warning mr-3 mt-1 flex-shrink-0" />
                  <span>Automatically notify nearest security agency or emergency contacts</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Who It's For:</h3>
              <ul className="space-y-2 text-lg">
                <li>• Homeowners</li>
                <li>• Estate / housing companies</li>
                <li>• Schools & business owners</li>
                <li>• Security agencies</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              onClick={() => window.location.href = '/demo'}
            >
              Book a Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={() => window.location.href = '/preorder'}
            >
              Preorder NovaGuard
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Debo Tech Start-up</h3>
            <p className="text-lg italic">"Your Future. Your Security. Your AI Butler."</p>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Debo Tech Start-up. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}