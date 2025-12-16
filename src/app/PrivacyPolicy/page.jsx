
"use client"
import { useState } from 'react';

import TermsContent from '@/components/TermsContent';
import PrivacyContent from '@/components/PrivacyContent';
import Sidebar from '@/components/Sidebar';

const Newpage = () => {

     const [activeTab, setActiveTab] = useState('terms');
    
      const handleTabChange = (tab) => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
    return(
         <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card text-primary py-8 shadow-medium sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-6">
        </div>
      </header>
      <div className="  mt-[50px] flex justify-center ">
      <div className="   bg-[#e4e2e2] p-2 rounded-full">
        <div className=" mx-auto  flex gap-2 md:gap-4">
          <button
            type="button"
            onClick={() => handleTabChange('terms')}
            className={`px-8  py-4   cursor-pointer text-sm md:text-base font-semibold transition-all duration-300 ${
              activeTab === 'terms'
                ? 'text-[#fff] rounded-full px-2 bg-[#28937F]'
                : 'text-muted-foreground border-transparent hover:text-primary hover:bg-secondary'
            }`}
          >
            Terms & Conditions
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('privacy')}
            className={`px-8  py-4  cursor-pointer text-sm md:text-base font-semibold transition-all duration-300 ${
              activeTab === 'privacy'
                ? 'text-[#fff] rounded-full px-2 bg-[#28937F]'
                : 'text-muted-foreground border-transparent hover:text-primary hover:bg-secondary'
            }`}
          >
            Privacy Policy
          </button>
        </div>
      </div></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
        {/* Sidebar - Hidden on mobile */}
        <div className="hidden lg:block">
          <Sidebar activeTab={activeTab} />
        </div>

        {/* Content */}
        <main className="bg-[#f3f3f3d2] rounded-xl p-6 md:p-12 shadow-soft">
          {activeTab === 'terms' ? <TermsContent /> : <PrivacyContent />}
        </main>
      </div>


    </div>
    )
}

export default Newpage;