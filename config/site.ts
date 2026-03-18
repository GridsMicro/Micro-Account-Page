export const siteConfig = {
  name: "Micro Account",
  description: "ระบบบัญชีออนไลน์ที่รวดเร็ว ปลอดภัย และใช้งานง่าย สำหรับธุรกิจยุคใหม่",
  company: "Microtronic Co., Ltd.",
  contact: {
    email: "support@microtronic.dev", // Using the domain of the user's microtronic.dev workspace
    phone: "+66 8 1234 5678",
    address: "อาคาร 123 ถนนสุขุมวิท เขตวัฒนา กรุงเทพมหานคร 10110",
  },
  links: {
    app: "https://micro-account.vercel.app/",
    github: "https://github.com/GridsMicro/Micro-Account",
    demo: "https://micro-account.vercel.app/", // Could point to an interactive demo path later
  },
  nav: [
    { name: "ฟีเจอร์การใช้งาน", href: "#features" },
    { name: "ราคาแพ็กเกจ", href: "#pricing" },
    { name: "ความปลอดภัย", href: "#security" },
    { name: "ติดต่อเรา", href: "#contact" },
  ],
  features: [
    {
      title: "บันทึกบัญชีง่ายและแม่นยำ",
      description: "รองรับระบบลงสมุดรายวันอัตโนมัติ (Double-entry) ช่วยลดข้อผิดพลาด ลดปัญหาการทำงานซ้ำซ้อน",
      iconType: "chart",
    },
    {
      title: "รายงานงบการเงินแบบเรียลไทม์",
      description: "ออกงบทดลอง งบดุล งบกำไรขาดทุนได้ทันทีโดยไม่ต้องรอสิ้นรอบบัญชี ช่วยให้ตัดสินใจทันท่วงที",
      iconType: "activity",
    },
    {
      title: "เชื่อมต่อบนคลาวด์ 100%",
      description: "ทำงานได้ทุกที่ทุกอุปกรณ์ หมดกังวลเรื่องข้อมูลหาย เพราะเราสำรองข้อมูลให้บนคลาวด์ที่ปลอดภัยตลอด 24 ชม.",
      iconType: "cloud",
    },
  ],
  pricing: [
    {
      name: "Starter",
      price: "ฟรี",
      description: "เหมาะสำหรับฟรีแลนซ์และธุรกิจเริ่มต้น",
      features: [
        "ผู้ใช้งาน 1 บัญชี",
        "บันทึกรายรับ-รายจ่ายพื้นฐาน",
        "ออกใบแจ้งหนี้/ใบเสร็จรับเงิน (50 ใบ/เดือน)",
        "พื้นที่จัดเก็บข้อมูล 1GB",
        "แบคอัพข้อมูลรายสัปดาห์",
      ],
      cta: "เริ่มต้นใช้งานฟรี",
      href: "https://micro-account.vercel.app/",
      popular: false,
    },
    {
      name: "Professional",
      price: "฿990",
      period: "/เดือน",
      description: "สำหรับธุรกิจขนาดเล็กและขนาดกลางที่ต้องการฟีเจอร์ครบ",
      features: [
        "ผู้ใช้งานสูงสุด 5 บัญชี",
        "ระบบบัญชีคู่ (Double-entry) เต็มรูปแบบ",
        "ออกเอกสารไม่จำกัดจำนวน",
        "รายงานทางบัญชีและภาษีฉบับเต็ม",
        "พื้นที่จัดเก็บข้อมูล 10GB",
        "แบคอัพข้อมูลรายวันและตั้งค่าสิทธิ์ผู้แต่ง",
      ],
      cta: "เริ่มทดลองใช้งานฟรี 14 วัน",
      href: "https://micro-account.vercel.app/",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "ติดต่อฝ่ายขาย",
      period: "",
      description: "โซลูชันออกแบบเฉพาะสำหรับองค์กร",
      features: [
        "ผู้ใช้งานไม่จำกัดจำนวน",
        "API เชื่อมต่อระบบ ERP อื่นๆ",
        "จัดการหลายบริษัท (Multi-company)",
        "พื้นที่จัดเก็บข้อมูลไม่จำกัด",
        "มีผู้ดูแล Account Manager ส่วนตัว 24/7",
      ],
      cta: "ติดต่อประเมินราคา",
      href: "#contact",
      popular: false,
    },
  ],
  securityContent: {
    title: "ความปลอดภัยที่เชื่อถือได้",
    items: [
      {
        title: "การเข้ารหัสระดับ 256-bit",
        description: "ข้อมูลทางบัญชีของคุณจะถูกเข้ารหัสระดับมาตรฐาน AES-256 ผ่านโปรโตคอลการเข้ารหัส SSL/TLS เพื่อป้องกันการเข้าถึงจากบุคคลภายนอก",
        iconType: "shield",
      },
      {
        title: "การสำรองข้อมูล (Automated Backups)",
        description: "ข้อมูลบัญชีของคุณถูกสำรองอัตโนมัติทั้งแบบรายวันและรายชั่วโมงแยกเซิร์ฟเวอร์ (Off-site Backups) หมดกังวลเรื่องรับมือกับภัยคุกคาม",
        iconType: "server",
      },
      {
        title: "ระบบกำหนดสิทธิ์การเข้าถึง (RBAC)",
        description: "จำกัดการเข้าถึงข้อมูลละเอียดอ่อน แบ่งบัญชีผู้ดูแล นักบัญชีและผู้ปฏิบัติงาน (Role-Based Access Control) ตามตำแหน่งหน้าที่",
        iconType: "lock",
      },
    ],
  },
  testimonials: [
    {
      quote: "ตั้งแต่เริ่มใช้ระบบ Micro Account การปิดงบบัญชีก็รวดเร็วขึ้นเยอะ ช่วยให้ทีมบริหารตัดสินใจจากตัวเลขปัจจุบันได้ทันที ขอแนะนำสำหรับเจ้าของกิจการยุคใหม่ครับ",
      author: "คุณสมพงษ์ ยอดประเสริฐ",
      role: "กรรมการผู้จัดการ, บริษัท อัลฟ่า เทรดเดอร์ จำกัด",
    },
    {
      quote: "เป็นซอฟต์แวร์บัญชีคนไทยที่เข้าใจระบบภาษีไทย ออกแบบมารองรับการหัก ณ ที่จ่าย และ VAT 7% ได้เป๊ะมากๆ การทำงานสะดวกขึ้นแบบเห็นได้ชัด",
      author: "คุณปราณี รักษาทอง",
      role: "หัวหน้าฝ่ายบัญชี, SME Solution Group",
    },
  ],
};
