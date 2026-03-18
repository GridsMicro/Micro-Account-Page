import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-500/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-8">
          <div className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            {siteConfig.name}
          </div>
          <div className="space-x-4 hidden md:flex">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium hover:text-blue-400 transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href={siteConfig.links.app} className="hidden sm:inline-flex px-5 py-2.5 text-sm font-medium rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md transition-all text-white">
              เข้าสู่ระบบ
            </a>
            <a href={siteConfig.links.demo} className="px-5 py-2.5 text-sm font-bold rounded-full bg-blue-600 hover:bg-blue-500 transition-all text-white">
              ทดลอง Demo ฟรี
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-24 md:py-36 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            V1.0 Early Access ยุคใหม่แห่งการทำบัญชี
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            ระบบบัญชีออนไลน์ที่รวดเร็ว <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400">สำหรับธุรกิจยุคใหม่</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12">
            {siteConfig.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={siteConfig.links.app} className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 font-bold text-white shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:scale-105 transition-transform text-center flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              เริ่มสมัครใช้งาน
            </a>
            <a href={siteConfig.links.demo} className="px-8 py-4 rounded-full bg-slate-800/50 hover:bg-slate-800 border border-slate-700 font-bold text-white backdrop-blur-sm transition-all text-center flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              ดู Interactive Demo
            </a>
          </div>
        </section>

        {/* Dashboard Product Screenshot Showcase */}
        <section className="pb-24 flex justify-center">
           <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-slate-800/60 shadow-2xl shadow-blue-900/20 ring-1 ring-white/10 group">
             {/* If you place dashboard-mockup.png in /public/images, uncomment below */}
             <div className="aspect-[16/9] w-full bg-slate-900 flex flex-col items-center justify-center relative">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
               <img 
                 src="/images/dashboard-mockup.png" 
                 alt="Micro Account Dashboard Screenshot" 
                 className="object-cover w-full h-full opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070';
                 }}
               />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  {/* Decorative Play Icon for Demo effect */}
                  <div className="w-20 h-20 bg-blue-500/20 backdrop-blur-md rounded-full flex items-center justify-center border border-blue-400/30">
                     <svg className="w-8 h-8 text-blue-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                     </svg>
                  </div>
               </div>
             </div>
           </div>
        </section>

        {/* Features Previews */}
        <section id="features" className="py-24 border-t border-slate-800/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ฟีเจอร์การทำงานหลัก</h2>
            <p className="text-slate-400">ถูกพัฒนามาเพื่อให้การทำบัญชีเป็นเรื่องที่ง่ายและทรงพลังที่สุด</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.features.map((feature, idx) => (
              <div key={idx} className={`bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-md transition-colors group ${
                idx === 0 ? "hover:border-blue-500/50" : idx === 1 ? "hover:border-teal-500/50" : "hover:border-emerald-500/50"
              }`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                  idx === 0 ? "bg-blue-500/20 group-hover:bg-blue-500/30" : idx === 1 ? "bg-teal-500/20 group-hover:bg-teal-500/30" : "bg-emerald-500/20 group-hover:bg-emerald-500/30"
                }`}>
                  <div className={`w-6 h-6 rounded-lg transition-transform group-hover:scale-110 ${
                    idx === 0 ? "bg-blue-500" : idx === 1 ? "bg-teal-500" : "bg-emerald-500"
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security Info */}
        <section id="security" className="py-24 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
               <h2 className="text-3xl md:text-4xl font-bold mb-6">{siteConfig.securityContent.title}</h2>
               <div className="space-y-8">
                 {siteConfig.securityContent.items.map((sec, i) => (
                   <div key={i} className="flex gap-4 items-start">
                      <div className="w-10 h-10 shrink-0 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                        {/* Placeholder generic SVG icons for security */}
                        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">{sec.title}</h4>
                        <p className="text-slate-400">{sec.description}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="md:w-1/2 relative bg-slate-900 border border-slate-800 rounded-3xl p-8 overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500" />
               <h3 className="text-2xl font-bold text-white mb-8">มั่นใจได้ในระดับมาตรฐานโลก</h3>
               <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700">
                     <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                     <span className="text-sm font-medium">SSL Encryption Active</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700">
                     <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4-2.37V7z"/></svg>
                     <span className="text-sm font-medium">Daily Off-site Backups</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700">
                     <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.67-3.13 8.89-7 10.02-3.87-1.13-7-5.35-7-10.02V6.3l7-3.12zm-2 14.82l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 10z"/></svg>
                     <span className="text-sm font-medium">AES-256 Data Protection</span>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Testimonials / Case Studies */}
        <section className="py-24 border-t border-slate-800/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">สิ่งที่ลูกค้าพูดถึงเรา</h2>
            <p className="text-slate-400">ตัวอย่างประสบการณ์จากองค์กรและผู้ใช้งานจริง</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
             {siteConfig.testimonials.map((testi, i) => (
                <div key={i} className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-md">
                   <div className="text-blue-500 mb-6 font-serif text-5xl">"</div>
                   <p className="text-lg text-slate-300 mb-8 italic">{testi.quote}</p>
                   <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-400">
                        {testi.author.charAt(4)} 
                      </div>
                      <div>
                         <h5 className="font-bold text-white">{testi.author}</h5>
                         <p className="text-slate-400 text-sm">{testi.role}</p>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 border-t border-slate-800/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ราคาแพ็กเกจที่ชัดเจน</h2>
            <p className="text-slate-400">เลือกแพ็คเกจที่เหมาะสมกับขนาดและการเติบโตของธุรกิจคุณ ไม่มีค่าใช้จ่ายแอบแฝง</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-center">
             {siteConfig.pricing.map((plan, i) => (
               <div key={i} className={`relative bg-slate-900/80 border p-8 rounded-3xl backdrop-blur-md flex flex-col ${
                 plan.popular ? "border-blue-500 shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)] md:scale-105 z-10" : "border-slate-800"
               }`}>
                 {plan.popular && (
                   <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">
                     แนะนำที่สุด
                   </span>
                 )}
                 <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                 <p className="text-slate-400 text-sm mb-6 h-10">{plan.description}</p>
                 <div className="mb-6">
                   <span className="text-4xl font-extrabold">{plan.price}</span>
                   {plan.period && <span className="text-slate-400">{plan.period}</span>}
                 </div>
                 <ul className="space-y-4 mb-8 flex-1">
                   {plan.features.map((feature, j) => (
                     <li key={j} className="flex items-start gap-3 text-slate-300 text-sm">
                       <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                       </svg>
                       {feature}
                     </li>
                   ))}
                 </ul>
                 <a href={plan.href} className={`w-full py-3 rounded-full text-center font-bold transition-all ${
                   plan.popular ? "bg-blue-600 hover:bg-blue-500 text-white" : "bg-slate-800 hover:bg-slate-700 text-white"
                 }`}>
                   {plan.cta}
                 </a>
               </div>
             ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 border-t border-slate-800/50">
           <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 backdrop-blur-md flex flex-col md:flex-row gap-8 items-center justify-between">
              <div>
                 <h2 className="text-3xl font-bold mb-4">พร้อมเปลี่ยนระบบบัญชีของคุณแล้วหรือยัง?</h2>
                 <p className="text-slate-400 mb-8 max-w-xl">
                   ทีมงานผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษา แนะนำการย้ายระบบ หรือสอบถามรายละเอียดเชิงลึก
                 </p>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      {siteConfig.contact.email}
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                      {siteConfig.contact.phone}
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      {siteConfig.contact.address}
                    </div>
                 </div>
              </div>
              <div className="flex-shrink-0">
                 <a href={`mailto:${siteConfig.contact.email}`} className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-200 transition-colors inline-block text-center shadow-xl shadow-white/10">
                    ติดต่อฝ่ายสนับสนุน
                 </a>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">{siteConfig.name}</span>
            <span className="opacity-50">© {new Date().getFullYear()} {siteConfig.company} All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
