import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import SEO from '../components/layout/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="Play Free Online Games | JoyFun.space"
        description="Play the best free online games at JoyFun.space. No downloads, no installations - just instant fun in your browser!"
        canonicalUrl="https://joyfun.space"
      />
      
      <Layout>
        <div className="mx-auto max-w-6xl px-4 py-8">
          {/* Hero Section */}
          <section className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-apple-dark mb-6">
              Play Awesome Online Games
            </h1>
            <p className="text-xl text-apple-gray-700 mb-8 max-w-3xl mx-auto">
              Welcome to JoyFun.space, your destination for free online games. Play instantly in your browser without downloads or installations!
            </p>
            <Link href="/games">
              <a className="btn-primary text-lg px-8 py-3">
                Browse All Games
              </a>
            </Link>
          </section>
          
          {/* Featured Game - Monster Survivors */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-apple-dark mb-4">Featured Game</h2>
              <p className="text-lg text-apple-gray-600">Check out our most popular game this week!</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4 flex">
                    <span className="bg-apple-blue-100 text-apple-blue-600 px-3 py-1 rounded-full text-sm">
                      Action
                    </span>
                    <span className="bg-apple-green-100 text-apple-green-600 px-3 py-1 rounded-full text-sm ml-2">
                      Survival
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-apple-dark mb-4">Monster Survivors</h3>
                  <p className="text-apple-gray-700 mb-6">
                    Battle endless waves of monsters in this action-packed survival game! Collect power-ups, upgrade your abilities, and see how long you can survive.
                  </p>
                  <Link href="/games/monster-survivors">
                    <a className="btn-primary inline-block self-start">
                      Play Now
                    </a>
                  </Link>
                </div>
                <div className="bg-apple-gray-200 h-64 md:h-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-apple-blue-700 to-apple-purple opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-20 w-20 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Why Choose Us */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-apple-dark mb-4">Why Choose JoyFun.space ?</h2>
              <p className="text-lg text-apple-gray-600 max-w-3xl mx-auto">
                We provide the best online gaming experience with carefully selected games for all types of players.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-apple-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-apple-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-apple-dark mb-2">Instant Play</h3>
                <p className="text-apple-gray-600">
                  No downloads, no waiting. Play directly in your browser across all your devices.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-apple-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-apple-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-apple-dark mb-2">Always Free</h3>
                <p className="text-apple-gray-600">
                  All our games are 100% free to play. No hidden costs or subscriptions required.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-apple-purple w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-apple-dark mb-2">Quality Selection</h3>
                <p className="text-apple-gray-600">
                  We carefully curate all games to ensure you get only the best gaming experience.
                </p>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="bg-gradient-to-r from-apple-blue-600 to-apple-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Playing?</h2>
            <p className="text-lg text-apple-blue-100 mb-8 max-w-2xl mx-auto">
              Jump into Monster Survivors now or explore our collection of free online games. New games added regularly!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/games/monster-survivors">
                <a className="bg-white text-apple-blue-700 hover:bg-apple-blue-50 font-semibold py-3 px-6 rounded-md transition">
                  Play Monster Survivors
                </a>
              </Link>
              <Link href="/games">
                <a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-apple-blue-700 font-semibold py-3 px-6 rounded-md transition">
                  Browse All Games
                </a>
              </Link>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
} 