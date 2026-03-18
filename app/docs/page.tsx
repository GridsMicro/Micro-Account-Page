import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Documentation() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans px-6 py-24">
      <div className="max-w-4xl mx-auto bg-slate-900/50 border border-slate-800 p-8 md:p-12 rounded-3xl backdrop-blur-md">
        <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium mb-8 inline-block">
          &larr; กลับไปหน้าหลัก
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mb-8">เอกสารการใช้งาน คู่มือ (Documentation)</h1>
        
        <p className="text-slate-400 text-lg mb-12">
          ยินดีต้อนรับสู่ระบบ {siteConfig.name} ศูนย์รวมวิธีและคู่มือในการทำบัญชีด้วยระบบออนไลน์แบบง่ายที่สุดที่คุณจะหาได้
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">เริ่มต้นใช้งาน (Getting Started)</h3>
            <ul className="space-y-2 text-slate-400">
              <li>- วิธีตั้งค่าผังบัญชี</li>
              <li>- การสร้างใบแจ้งหนี้ใบแรก</li>
              <li>- การรับผู้มีสิทธิ์ใช้งานเข้าสู่ระบบ</li>
            </ul>
          </div>
          
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-teal-500/50 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">คู่มือขั้นสูง (Advanced Usage)</h3>
            <ul className="space-y-2 text-slate-400">
              <li>- การนำเข้าข้อมูลเดิมในรูปแบบ Excel / CSV</li>
              <li>- การเชื่อมต่อ API (เฉพาะ Enterprise)</li>
              <li>- คู่มือสำหรับนักบัญชีระดับผู้ชำนาญการ</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-blue-900/20 border border-blue-500/30 p-6 rounded-xl text-center">
          <p className="text-blue-300 font-medium mb-4">เนื้อหายังอยู่ในระหว่างการเรียบเรียง... 🚧</p>
          <p className="text-slate-400 mb-0">ต้องการคำอธิบายเพิ่มเติมหรือคู่มือเร่งด่วน? โทร. {siteConfig.contact.phone} หรืออีเมล {siteConfig.contact.email} ทีมซัพพอร์ตยินดีช่วยเหลือทันทีครับ</p>
        </div>
      </div>
    </main>
  );
}
