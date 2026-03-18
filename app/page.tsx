import React from 'react';
import Link from 'next/link';

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
            Micro Account
          </div>
          <div className="space-x-4 hidden md:flex">
            <Link href="#features" className="text-sm font-medium hover:text-blue-400 transition-colors">ฟีเจอร์</Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-blue-400 transition-colors">ราคา</Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-400 transition-colors">ติดต่อเรา</Link>
          </div>
          <a href="https://micro-account.vercel.app/" className="px-5 py-2.5 text-sm font-medium rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md transition-all text-white">
            เข้าสู่ระบบ
          </a>
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
            จัดการบัญชีของคุณได้อย่างครบเครื่อง รวดเร็วและปลอดภัย ออกแบบมาเพื่อให้เจ้าของกิจการและนักบัญชีทำงานร่วมกันได้จากทุกที่ ทุกเวลา
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://micro-account.vercel.app/" className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 font-bold text-white shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:scale-105 transition-transform text-center">
              เริ่มต้นใช้งานฟรี
            </a>
            <a href="https://github.com/GridsMicro/Micro-Account" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-slate-800/50 hover:bg-slate-800 border border-slate-700 font-bold text-white backdrop-blur-sm transition-all text-center">
              ไปที่ GitHub
            </a>
          </div>
        </section>

        {/* Features Preview */}
        <section id="features" className="py-24 border-t border-slate-800/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ฟีเจอร์ที่ช่วยตอบโจทย์คุณ</h2>
            <p className="text-slate-400">ถูกพัฒนามาเพื่อให้การทำบัญชีเป็นเรื่องที่ง่ายและทรงพลังที่สุด</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-md hover:border-blue-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <div className="w-6 h-6 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">บันทึกบัญชีง่ายขึ้น</h3>
              <p className="text-slate-400">รองรับระบบสมุดรายวันอัตโนมัติ ช่วยลดข้อผิดพลาดจากการลงบัญชีซ้ำซ้อน</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-md hover:border-teal-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-6 group-hover:bg-teal-500/30 transition-colors">
                <div className="w-6 h-6 bg-teal-500 rounded-lg group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">ดูงบการเงินได้ทันที</h3>
              <p className="text-slate-400">ระบบสร้างรายงานทางการเงิน ไม่ว่าจะเป็นงบทดลองหรืองบดุลแบบเรียลไทม์</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-md hover:border-emerald-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors">
                <div className="w-6 h-6 bg-emerald-500 rounded-lg group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">ทำระบบออนไลน์สมบูรณ์</h3>
              <p className="text-slate-400">สำรองข้อมูลทั้งหมดไว้บนคลาวด์ ปลอดภัยและเรียกดูได้ทุกอุปกรณ์ตลอดเวลา</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
          <p>© 2026 Microtronic Co., Ltd. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
