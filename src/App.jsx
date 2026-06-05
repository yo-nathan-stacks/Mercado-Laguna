import React from 'react';
import heroImage from './assets/hero.png';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Navigation */}
      <nav className="border-b border-stone-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-serif tracking-tight font-bold text-stone-800">MERCADO LAGUNA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">Shop All</a>
              <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">Grab + Go</a>
              <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">Gifts</a>
              <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors">Visit</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-stone-600 hover:text-stone-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
              <button className="p-2 text-stone-600 hover:text-stone-900 relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-stone-800 ring-2 ring-white"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-900/20 z-10"></div>
          <img 
            src={heroImage} 
            alt="Mercado Laguna Interior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Elevating Everyday <br />Life in Laguna
          </h1>
          <p className="text-xl text-stone-100 mb-10 max-w-xl">
            High-quality ingredients, thoughtful gifts, and artisanal goods curated for our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-white text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-stone-100 transition-colors">
              Order Online
            </button>
            <button className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white/30 transition-colors">
              Our Locations
            </button>
          </div>
        </div>
      </header>

      {/* Featured Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Curated for You</h2>
            <div className="h-1 w-20 bg-stone-800 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Grab + Go', desc: 'Freshly prepared meals and snacks for your day at the beach.', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800' },
              { title: 'Artisanal Pantry', desc: 'Hand-selected oils, spices, and specialty ingredients.', img: 'https://images.unsplash.com/photo-1562059390-a761a084768e?auto=format&fit=crop&q=80&w=800' },
              { title: 'Thoughtful Gifts', desc: 'Unique items for home and heart, curated from local makers.', img: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800' }
            ].map((cat, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden mb-6 bg-stone-100">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-serif mb-2">{cat.title}</h3>
                <p className="text-stone-600 mb-4">{cat.desc}</p>
                <a href="#" className="inline-block border-b border-stone-800 pb-1 text-sm font-medium hover:text-stone-500 hover:border-stone-500 transition-all">Shop Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-8 leading-tight">Visit Us in <br />Laguna Beach</h2>
              <div className="space-y-6 text-lg text-stone-700">
                <p>
                  <strong>Location:</strong><br />
                  912 North Coast Highway,<br />
                  Laguna Beach, CA 92651
                </p>
                <p>
                  <strong>Hours:</strong><br />
                  Monday – Friday: 9am – 7pm<br />
                  Saturday – Sunday: 10am – 6pm
                </p>
                <p>
                  <strong>Contact:</strong><br />
                  (949) 664-1008<br />
                  laguna@visitmercado.com
                </p>
              </div>
            </div>
            <div className="aspect-square bg-stone-200 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000" 
                alt="Store Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-serif tracking-tight font-bold text-white block mb-6">MERCADO LAGUNA</span>
              <p className="max-w-sm mb-8">
                Celebrating elevating everyday life with high-quality ingredients and thoughtful gifts since 2023.
              </p>
              <div className="flex space-x-4">
                {/* Social icons would go here */}
                <span className="hover:text-white cursor-pointer">Instagram</span>
                <span className="hover:text-white cursor-pointer">Facebook</span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-6">Explore</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white">Shop All</a></li>
                <li><a href="#" className="hover:text-white">Grab + Go</a></li>
                <li><a href="#" className="hover:text-white">Gifts</a></li>
                <li><a href="#" className="hover:text-white">Locations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-6">Support</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Shipping</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-sm text-center md:text-left">
            <p>&copy; 2026 Mercado Laguna. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


