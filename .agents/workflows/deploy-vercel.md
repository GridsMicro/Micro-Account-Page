---
description: Deploy Next.js to Vercel
---

# Deploy Next.js Project to Vercel

ทำตามขั้นตอนด้านล่างเพื่อ Deploy โปรเจกต์โปรแกรมบัญชี (Micro-Account-Page) ขึ้นบน Vercel

1. **ติดตั้ง Vercel CLI (หากยังไม่มี)**
// turbo
2. ติดตั้งเครื่องมือ Vercel แบบ Global ผ่าน npm:
```bash
npm i -g vercel
```

3. **เตรียมพร้อมและเชื่อมต่อโปรเจกต์ (Link Project)**
   รันคำสั่ง `vercel` เพื่อล็อกอินและเชื่อมต่อกับโปรเจกต์ หากยังไม่ได้ล็อกอิน ระบบจะเด้งหน้าต่างเบราว์เซอร์ให้ทำการล็อกอิน
// turbo
4. ล็อกอินและเริ่มต้นเชื่อมโปรเจกต์
```bash
vercel
```

5. **ตั้งค่าระหว่างรันคำสั่ง `vercel`**
   - `Set up and deploy ...?` ตอบ **Y**
   - `Which scope do you want to deploy to?` เลือกบัญชีของคุณ
   - `Link to existing project?` ตอบ **N** (หากสร้างโปรเจกต์ใหม่เกี่ยงกับหน้าจอนี้)
   - `What's your project's name?` ใช้ชื่อเริ่มต้น `micro-account-page` หรือตั้งชื่อใหม่
   - `In which directory is your code located?` กด Enter (ใช้ค่า `.` ปัจจุบัน)
   - `Want to modify these settings?` ตอบ **N** 

6. **อัพเดต Production (Deploy to Production)**
   เมื่อเชื่อมต่อและทดสอบ Preview ผ่าน `vercel` สำเร็จแล้ว หากต้องการสร้างลิงก์สำหรับโปรดักชัน
// turbo
7. รันคำสั่งสำหรับ Deploy ขึ้น Production ทันที:
```bash
vercel --prod
```
