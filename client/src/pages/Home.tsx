import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-xl font-bold text-slate-900">SiteSee</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <div className="relative group">
                <button className="text-slate-600 hover:text-blue-600 font-medium py-2">Products</button>
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg border border-slate-100 py-2 hidden group-hover:block">
                <Link href="/products/nexdt" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-blue-600">NexDT</Link>
                <Link href="/products/bim" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-blue-600">BIM</Link>
                <Link href="/products/ieme" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-blue-600 font-bold bg-blue-50/50">EME Analysis</Link>
                <Link href="/products/iea" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-blue-600">IEA</Link>
                <Link href="/products/capture" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-blue-600">Capture</Link>
                  <Link href="/products/scalepoints" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-blue-600">ScalePoints</Link>               </div>
              </div>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Industries</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Company</a>
              <Button>Contact Us</Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4 px-4 space-y-4">
            <div className="space-y-2">
              <div className="font-medium text-slate-900 px-2">Products</div>
              <Link href="/products/nexdt" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-md">NexDT</Link>
              <Link href="/products/bim" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-md">BIM</Link>
              <Link href="/products/ieme" className="block px-4 py-2 text-blue-600 bg-blue-50 rounded-md font-medium">EME Analysis</Link>
              <Link href="/products/iea" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-md">IEA</Link>
              <Link href="/products/capture" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-md">Capture</Link>
              <Link href="/products/scalepoints" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-md">ScalePoints</Link>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <Button className="w-full">Contact Us</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Digital Twins for Telecom Infrastructure
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              SiteSee provides a unified platform for drone-based inspection, 3D modeling, and automated structural analysis.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/products/ieme">
                <Button size="lg" className="gap-2">
                  View EME Analysis <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 SiteSee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
