import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans px-6 py-24">
      <div className="max-w-3xl mx-auto bg-slate-900/50 border border-slate-800 p-8 md:p-12 rounded-3xl backdrop-blur-md">
        <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium mb-8 inline-block">
          &larr; กลับไปหน้าหลัก
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mb-8">ข้อตกลงและเงื่อนไขการใช้บริการ (Terms of Service)</h1>
        <div className="prose prose-invert prose-slate text-slate-300 leading-relaxed space-y-6">
          <p>
            กรุณาอ่านและทำความเข้าใจข้อตกลงนี้ก่อนที่จะใช้บริการ {siteConfig.name} โดย {siteConfig.company} 
            การกระทำใดๆ บนระบบถือว่าผู้ใช้งานยอมรับเงื่อนไขทั้งหมดนี้
          </p>
          
          <h2 className="text-xl font-bold text-white mt-8 mb-4">1. การใช้บริการและการรับประกัน</h2>
          <p>ระบบบัญชี {siteConfig.name} พร้อมให้ใช้งาน "ตามที่เป็นอยู่" เราพยายามอย่างที่สุดเพื่อให้ระบบมีความพร้อมใช้งานสูงสุดและถูกต้อง 100% แต่ไม่รับประกันค่ายุติการทำงานในกรณีสุดวิสัย แต่จะมีการชดเชยเวลาใช้งานแทน</p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">2. การชำระเงินและภาษี (Pricing & Taxes)</h2>
          <p>ราคาแพ็กเกจที่คุณเลือกจะถูกเรียกเก็บเป็นรอบบิล (รายเดือน/รายปี) จะมีการต่ออายุอัตโนมัติหากไม่ยกเลิกล่วงหน้า ผู้ใช้จะได้รับใบกำกับภาษีเต็มรูปแบบเมื่อชำระเงินเสร็จสิ้น</p>
          
          <h2 className="text-xl font-bold text-white mt-8 mb-4">3. ความรับผิดชอบด้านข้อมูลบัญชี</h2>
          <p>ผู้ใช้งานรับรองความถูกต้องของข้อมูลที่เพิ่มลงไปในบัญชี บริษัทไม่มีส่วนรับผิดชอบต่อความผิดพลาดทางกฎหมายหรือภาษีที่เกิดจากเนื้อหาของผู้ใช้งานเอง หน้าที่เราคือการจัดการเครื่องมือเพื่อให้คำนวณและประมวลผลถูกหลักการบัญชี</p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">4. การระงับและการยกเลิกบัญชี</h2>
          <p>หากบัญชีนำไปใช้เพื่อผิดกฎหมาย เราขอสงวนสิทธิ์ในการระงับบริการโดยไม่ต้องแจ้งล่วงหน้า และบริษัทสงวนสิทธิ์ในการปรับปรุงแก้ไขเงื่อนไขใดๆ โดยจะแจ้งให้สมาชิกรับทราบผ่านทางอีเมล {siteConfig.contact.email} ไปยังผู้รับผิดชอบหลักของบัญชี</p>
        </div>
      </div>
    </main>
  );
}
