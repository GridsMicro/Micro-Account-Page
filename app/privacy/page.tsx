import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans px-6 py-24">
      <div className="max-w-3xl mx-auto bg-slate-900/50 border border-slate-800 p-8 md:p-12 rounded-3xl backdrop-blur-md">
        <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium mb-8 inline-block">
          &larr; กลับไปหน้าหลัก
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mb-8">นโยบายความเป็นส่วนตัว (Privacy Policy)</h1>
        <div className="prose prose-invert prose-slate text-slate-300 leading-relaxed space-y-6">
          <p>
            อัปเดตล่าสุด: {new Date().toLocaleDateString('th-TH', { dateStyle: 'long' })}
          </p>
          <p>
            ที่ <strong>{siteConfig.company}</strong> (ผู้ให้บริการ {siteConfig.name}) เราให้ความสำคัญกับความเป็นส่วนตัวของคุณอย่างสูงสุด เอกสารนี้จัดทำขึ้นเพื่ออธิบายถึงวิธีการที่เราเก็บรวบรวม ใช้งาน และปกป้องข้อมูลทางการเงินและข้อมูลส่วนบุคคลของคุณ
          </p>
          <h2 className="text-xl font-bold text-white mt-8 mb-4">1. ข้อมูลที่เราเก็บรวบรวม</h2>
          <p>เรามีการเก็บข้อมูลบัญชี รายข้ามธุรกรรม ข้อมูลส่วนบุคคล (เช่น อีเมลและหมายเลขโทรศัพท์) ตามที่จำเป็นต่อการใช้ระบบบัญชีของเราเท่านั้น</p>
          
          <h2 className="text-xl font-bold text-white mt-8 mb-4">2. การใช้งานข้อมูล</h2>
          <p>ข้อมูลทั้งหมดของคุณใช้เพื่ออำนวยความสะดวกในการจัดทำบัญชีของคุณเท่านั้น ทางเราไม่มีนโยบายการขายหรือนำข้อมูลไปแสวงหาผลกำไรแก่บุคคลที่สาม นอกจากเมื่อได้รับคำร้องขอจากกฎหมายที่เกี่ยวข้องอย่างเป็นทางการ</p>
          
          <h2 className="text-xl font-bold text-white mt-8 mb-4">3. การปกป้องและการเข้ารหัสข้อมูล</h2>
          <p>
            เรามีการใช้ <strong>AES-256 Encryption</strong> และการรับส่งข้อมูลผ่าน SSL/TLS เสมอ การเข้าถึงข้อมูลจากระบบเบื้องหลัง (Backend) ถูกจำกัดสิทธิ์ในระบบ <strong>Zero-Trust Architecture</strong>
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">4. การลบข้อมูลและระยะเวลาจัดเก็บ</h2>
          <p>ลูกค้ามีสิทธิ์ร้องขอให้ลบถอนข้อมูลบัญชีได้ 100% ผ่านทางฝ่ายบริการลูกค้า เมื่อยกเลิกบริการ ระบบจะทำลายข้อมูลอย่างถาวรภายใน 30 วัน</p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">5. ข้อมูลการติดต่อ</h2>
          <p>หากมีข้อสักถามเพิ่มเติมเกี่ยวกับนโยบาย ติดต่อเราได้ที่ {siteConfig.contact.email} หรือ โทร {siteConfig.contact.phone}</p>
        </div>
      </div>
    </main>
  );
}
