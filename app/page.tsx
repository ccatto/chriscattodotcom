'use client'

import Header from '@/app/components/Header/Header';
import Home from '@/app/components/Home/Home';
import Footer from '@/app/components/Footer/Footer';

// import Nav from './components/Nav/Nav';
// import { useState } from 'react'

export default function Page() {
  return (
    <>
      <Header/>
      <main className="flex min-h-screen flex-col p-6">
        <Home />
      </main>
      <Footer/>
    </>
  );
}
