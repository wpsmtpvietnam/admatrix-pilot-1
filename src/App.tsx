import React, { useState } from 'react';
import { 
  Play, CheckCircle2, Workflow, Zap, Users, Clock, 
  LayoutDashboard, FileText, ChevronDown, Star, Gift, Phone,
  Cpu, ArrowRight, XCircle, RefreshCw, Layers, MessagesSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SectionTitle = ({ children, subtitle, align = 'center' }: { children: React.ReactNode, subtitle?: string, align?: 'center' | 'left' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} px-4`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg md:text-xl text-slate-500 font-medium ${align === 'center' ? 'mx-auto' : ''} max-w-2xl`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen font-sans selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden antialiased">
      
      {/* 1. HERO SECTION & 2. QUICK BAR */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />
        
        <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex mb-6">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 rounded-full text-sm font-bold tracking-wide uppercase">
                  Workshop 4 Giờ - Cầm tay chỉ việc
                </span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                Biết AI không còn đủ – Bạn cần biết <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">dùng AI</span> để tiết kiệm 3-5h mỗi ngày
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed">
                Tham gia workshop thực chiến, chuyển đổi ngay quy trình làm việc thủ công sang hệ thống chạy tự động bằng sức mạnh của AI trong công việc và học tập.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
                <button className="px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl transition-all shadow-xl shadow-orange-500/20 transform hover:-translate-y-1">
                  Đăng ký ngay
                </button>
                <button className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md font-bold rounded-2xl transition-all border border-white/10">
                  Xem nội dung khóa học
                </button>
              </motion.div>
            </div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="lg:col-span-5 relative">
              <div className="relative rounded-[3rem] overflow-hidden bg-slate-800 border focus:outline-none border-slate-700 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" alt="AI Workspace" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                   <div className="flex bg-white/10 backdrop-blur-xl p-4 gap-4 rounded-2xl items-center border border-white/20">
                      <Zap className="w-10 h-10 text-orange-400" />
                      <div>
                        <div className="text-white font-bold text-lg">AI Automation Pilot</div>
                        <div className="text-slate-300 text-sm">Active Workspace</div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 2. SOCIAL PROOF QUICK BAR */}
        <div className="container mx-auto px-6 mt-20 relative z-20">
          <div className="bg-white rounded-[2rem] shadow-xl p-8 flex flex-wrap justify-center gap-6 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {[
              { label: "4 giờ thực hành", icon: Clock },
              { label: "70% hands-on", icon: Play },
              { label: "1 workflow cá nhân", icon: Workflow },
              { label: "1 bộ prompt mang về", icon: FileText }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 lg:pl-12 first:pl-0 pt-4 lg:pt-0 first:pt-0 w-full lg:w-auto justify-center">
                 <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6" />
                 </div>
                 <span className="font-bold text-slate-800 whitespace-nowrap text-lg">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PAIN POINT & 4. CONSEQUENCE (Bento Grid) */}
      <section className="py-32 bg-[#F1F5F9]">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Làm việc chăm chỉ là chưa đủ, nếu bạn làm sai phương pháp" align="center">
            Bạn có đang gặp vấn đề này?
          </SectionTitle>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* PAINS */}
            <div className="space-y-4">
              {[
                { title: "Biết ChatGPT nhưng dùng không hiệu quả", icon: XCircle },
                { title: "Mất thời gian dài chỉnh sửa output AI", icon: Clock },
                { title: "Không biết dùng tool nào cho việc nào", icon: Layers },
                { title: "Làm việc thủ công, AI không giúp được nhiều", icon: RefreshCw }
              ].map((item, i) => (
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} key={i} className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">{item.title}</h4>
                </motion.div>
              ))}
            </div>

            {/* CONSEQUENCES */}
            <div className="grid grid-rows-3 gap-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-slate-900 text-white rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-400/20 blur-3xl rounded-full" />
                <h3 className="text-2xl font-bold mb-2">Lãng phí thời gian</h3>
                <p className="text-slate-400">Mỗi ngày mất thêm 3-4 tiếng cho những việc máy móc có thể làm trong vài giây.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-orange-500 text-white rounded-3xl p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">Output thiếu chuyên nghiệp</h3>
                <p className="text-orange-100">Bài viết, báo cáo nghe rất "máy móc", thiếu tính cá nhân hoá và định vị thương hiệu.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-blue-600 text-white rounded-3xl p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">Tụt hậu so với đối thủ</h3>
                <p className="text-blue-100">Không bắt kịp những người khác đang dùng AI tốt hơn để scale x10 năng suất.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BIG IDEA & 6. OUTCOME */}
      <section className="py-32 bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
             <span className="meta-label mb-6 inline-block text-blue-600">The Ultimate Solution</span>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
               AI không phải là công cụ <br/> <span className="text-blue-600">mà là một trợ lý</span> nếu bạn biết dùng
             </h2>
             <p className="text-xl text-slate-600">Bạn sẽ học cách biến AI thành trợ lý cá nhân thay vì chỉ là công cụ tra cứu thông tin cơ bản.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {[
              { title: "Hiểu mindset dùng AI", desc: "Tư duy đúng đắn đóng vai trò tiền đề cho hiệu năng" },
              { title: "Làm chủ 4 Tool lõi", desc: "ChatGPT, Gemini, Gamma, NotebookLM" },
              { title: "Viết prompt chuẩn", desc: "Viết lệnh để AI sinh ra kết quả dùng được luôn" },
              { title: "Tạo workflow cá nhân", desc: "Tối ưu từng khâu nhỏ lẻ vào hệ thống lớn" }
            ].map((item, i) => (
               <motion.div key={i} whileHover={{ y: -10 }} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-blue-900/5 group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-6">
                     <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BEFORE / AFTER */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Sự khác biệt làm nên hiệu suất">Trải nghiệm Trước và Sau</SectionTitle>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-200 relative">
               <div className="absolute top-8 right-8 text-slate-300"><XCircle className="w-12 h-12" /></div>
               <span className="text-sm font-bold text-slate-400 tracking-widest uppercase block mb-4">Trước khi học</span>
               <h3 className="text-3xl font-bold text-slate-800 mb-6">Làm việc thủ công</h3>
               <ul className="space-y-4">
                 {['Tự viết từng đoạn email/báo cáo', 'Tìm kiếm ảnh, làm slide mất 3 ngày', 'Mới biết prompt: "Hãy viết cho tôi..."', 'Năng suất giới hạn bởi giới hạn vật lý'].map((e,i) => (
                   <li key={i} className="flex gap-4 items-start text-slate-600"><div className="w-6 h-6 rounded-full bg-slate-200 shrink-0" /> {e}</li>
                 ))}
               </ul>
            </div>
            {/* After */}
            <div className="p-10 rounded-[3rem] bg-blue-600 text-white relative shadow-2xl shadow-blue-600/30">
               <div className="absolute top-8 right-8 text-blue-300"><CheckCircle2 className="w-12 h-12" /></div>
               <span className="text-sm font-bold text-blue-300 tracking-widest uppercase block mb-4">Sau khoá học</span>
               <h3 className="text-3xl font-bold text-white mb-6">Có workflow AI tự động</h3>
               <ul className="space-y-4">
                 {['Lên dàn ý, nháp khung nhanh qua AI', 'Tự động style slide thiết kế bằng Gamma', 'Prompt chuẩn có sẵn cho từng task', 'Năng suất x10 khi kết hợp AI Agents'].map((e,i) => (
                   <li key={i} className="flex gap-4 items-start text-blue-50"><div className="w-6 h-6 rounded-full bg-blue-400 shrink-0 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-600"/></div> {e}</li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OVERVIEW & 9. SYLLABUS (Horizontal Timeline + List) */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Lộ trình và thông tin tổng quan của buổi học thử nghiệm">Hành trình 4 Giờ Thay Đổi</SectionTitle>
          
          {/* Overview badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-24">
             {[
               { icon: Clock, t: "4 tiếng offline" },
               { icon: Zap, t: "30% lý thuyết – 70% thực hành" },
               { icon: Users, t: "20 - 40 học viên" }
             ].map((b,i) => (
               <div key={i} className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-full">
                  <b.icon className="w-5 h-5 text-orange-400" />
                  <span className="font-bold tracking-tight">{b.t}</span>
               </div>
             ))}
          </div>

          {/* Timeline Process */}
          <div className="relative">
             <div className="hidden md:block absolute top-[50%] left-0 right-0 h-[2px] bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 -z-10" />
             <div className="grid md:grid-cols-5 gap-8">
               {[
                 { step: "01", t: "AI Mindset", d: "Thiết lập lại tư duy đúng" },
                 { step: "02", t: "Tool Map", d: "Bản đồ công cụ đỉnh cao" },
                 { step: "03", t: "Prompt", d: "Kỹ thuật ra lệnh chuẩn" },
                 { step: "04", t: "Use Case", d: "Tham khảo dự án thật" },
                 { step: "05", t: "Workflow", d: "Thực hành xây dựng flow" }
               ].map((c, i) => (
                 <div key={i} className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full bg-slate-800 border-[4px] border-slate-900 shadow-xl flex items-center justify-center font-bold text-xl group-hover:bg-blue-600 group-hover:scale-110 transition-all text-white mb-6">
                      {c.step}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{c.t}</h4>
                    <p className="text-slate-400 text-sm">{c.d}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* 10. DEMO OUTPUT (Mockups) */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
           <SectionTitle subtitle="Sản phẩm ứng dụng trực tiếp ngay tại lớp">Demo Output Kết Quả</SectionTitle>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: MessagesSquare, title: "Email & Chat", bg: "bg-blue-100/50" },
               { icon: FileText, title: "Báo cáo phân tích", bg: "bg-purple-100/50" },
               { icon: LayoutDashboard, title: "Slide trình bày", bg: "bg-orange-100/50" },
               { icon: Cpu, title: "Tóm tắt tài liệu", bg: "bg-green-100/50" }
             ].map((d, i) => (
                <div key={i} className={`${d.bg} p-8 rounded-3xl aspect-square flex flex-col items-center justify-center text-center gap-6 border border-white hover:shadow-xl transition-all`}>
                   <div className="w-20 h-20 bg-white shadow-sm rounded-3xl flex items-center justify-center text-slate-800">
                     <d.icon className="w-10 h-10" />
                   </div>
                   <h4 className="text-xl font-bold text-slate-900">{d.title}</h4>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* 11. HANDS-ON EXPERIENCE Highlight */}
      <section className="py-24 bg-orange-500 overflow-hidden relative">
         <div className="absolute inset-0 bg-white/10 opacity-30 mask-lines" />
         <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase leading-tight">
               Bạn sẽ không chỉ học <br/> <span className="text-orange-900">Bạn sẽ làm.</span>
            </h2>
         </div>
      </section>

      {/* 12. TESTIMONIAL & 13. BONUS MODULE */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Student Result */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-10">Phản hồi Học viên</h3>
              <div className="space-y-6">
                 {[
                   { quote: "Sau buổi học tôi tiết kiệm hoàn toàn 2h/ngày soạn thảo nội dung báo cáo.", n: "Người dùng Pilot" },
                   { quote: "Lần đầu tiên tôi thực sự hiểu bản chất và cách dùng AI đúng. Workflow quá tuyệt vời!", n: "CEO Tech Agency" }
                 ].map((t, i) => (
                    <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem]">
                       <div className="flex gap-1 mb-4">
                         {[...Array(5)].map((_,x) => <Star key={x} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                       </div>
                       <p className="italic text-slate-600 text-lg mb-6 leading-relaxed">"{t.quote}"</p>
                       <div className="font-bold text-slate-900">{t.n}</div>
                    </div>
                 ))}
              </div>
            </div>

            {/* Bonus */}
            <div className="p-12 bg-amber-50 border border-amber-100 rounded-[3rem]">
               <div className="flex items-center gap-4 mb-8">
                 <Gift className="w-10 h-10 text-orange-500" />
                 <h3 className="text-3xl font-bold text-slate-900">Quà Tặng Kèm</h3>
               </div>
               <p className="text-slate-600 mb-10">Bộ tài liệu và công cụ độc quyền để bạn tiếp tục phát triển sau khóa học.</p>
               <ul className="space-y-6">
                 {[
                   "Prompt pack (Bộ thư viện 100+ prompt)",
                   "Template báo cáo mẫu tự động",
                   "Checklist map công cụ AI mới nhất",
                   "Guideline kiểm tra chất lượng output AI"
                 ].map((b, i) => (
                   <li key={i} className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                         <CheckCircle2 className="w-5 h-5 text-orange-500" />
                      </div>
                      <span className="font-bold text-slate-800">{b}</span>
                   </li>
                 ))}
               </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 14. WHO SHOULD JOIN */}
      <section className="py-32 bg-slate-900 text-white border-b border-white/10">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Chương trình này thiết kế riêng cho nhóm đối tượng cụ thể đáp ứng nhu cầu tiết kiệm thời gian">Phân loại Đối Tượng</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem]">
                <h3 className="text-3xl font-bold mb-8 text-green-400">Nên tham gia</h3>
                <ul className="space-y-6">
                  {['Nhân viên văn phòng (Staff)', 'Sinh viên muốn bứt phá hiệu suất', 'Leader muốn quy trình hoá cho team'].map((e,i)=>(
                    <li key={i} className="flex gap-4 items-start text-lg"><CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" /> {e}</li>
                  ))}
                </ul>
             </div>
             <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem]">
                <h3 className="text-3xl font-bold mb-8 text-red-400">Không nên tham gia</h3>
                <ul className="space-y-6">
                  {['Người đã dùng AI thuần thục nâng cao', 'Chuyên gia prompt engineering', 'Developer AI (lớp này ko viết code)'].map((e,i)=>(
                    <li key={i} className="flex gap-4 items-start text-lg text-slate-400"><XCircle className="w-6 h-6 text-red-400 shrink-0" /> {e}</li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* 15, 16, 17. PRICING & URGENCY & CTA STRONG */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
           <div className="max-w-3xl mx-auto bg-white p-12 lg:p-20 rounded-[3.5rem] shadow-2xl text-center border border-slate-100">
             <span className="inline-block px-5 py-2 bg-red-100 text-red-600 font-bold rounded-full mb-8 animate-pulse text-sm">
                CHỈ NHẬN DUY NHẤT 30 SLOT OFFLINE
             </span>
             <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Mức đầu tư Giai đoạn Pilot</h2>
             <p className="text-slate-500 mb-10 text-lg">Entry product – Đầu tư siêu nhỏ, tạo ra kết quả x10</p>
             
             <div className="flex justify-center items-baseline gap-4 mb-10">
                <span className="text-7xl lg:text-8xl font-black text-slate-900">199k</span>
                <span className="text-3xl font-bold text-slate-400 line-through">- 499k</span>
             </div>

             <button className="w-full sm:w-auto px-16 py-6 bg-orange-500 text-white text-2xl font-bold rounded-2xl hover:bg-orange-600 shadow-xl shadow-orange-500/30 transition-transform transform hover:-translate-y-2 mb-6">
                Đăng ký Ngay Hôm Nay
             </button>
             <p className="text-slate-400 text-sm font-medium italic">Hỗ trợ thanh toán nhanh gọn, xuất VAT theo yêu cầu doanh nghiệp.</p>
           </div>
        </div>
      </section>

      {/* 18. FAQ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle>Câu hỏi thường gặp</SectionTitle>
          <div className="max-w-3xl mx-auto space-y-4">
             {[
               {q: "Có cần biết AI trước không?", a: "Không yêu cầu! Workshop hướng dẫn cho người từ số 0 biết cách thiết lập tư duy và thực hành."},
               {q: "Có cần thiết mang laptop không?", a: "Bat buộc. Học và thực hành trực tiếp tạo flow ngay trên lớp nên bạn cần chuẩn bị thiết bị."}
             ].map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                   <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex justify-between p-6 text-left hover:bg-slate-100 transition-colors">
                     <span className="font-bold text-slate-800 text-lg">{faq.q}</span>
                     <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                   </button>
                   <AnimatePresence>
                     {activeFaq === i && (
                       <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 text-slate-600 overflow-hidden">
                         {faq.a}
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 19. FINAL CTA + UPSALE */}
      <section className="py-32 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6">
           <h2 className="text-4xl md:text-5xl font-bold mb-6">Tiếp Bước Chuyên Sâu Cùng Team</h2>
           <p className="text-blue-200 text-xl max-w-2xl mx-auto mb-12">Sau khóa Pilot Basic, bạn hoàn toàn có thể chọn khóa học Automations Nâng Cao dành cho toàn hệ thống doanh nghiệp.</p>
           <button className="px-14 py-6 bg-white text-blue-600 font-bold rounded-2xl text-xl hover:bg-slate-50 transition-all shadow-xl">
              Giữ chỗ sớm ngay 
           </button>
        </div>
      </section>

      {/* 20. FOOTER */}
      <footer className="bg-slate-950 pt-24 pb-10 text-slate-400">
         <div className="container mx-auto px-6 border-b border-white/10 pb-16 mb-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl">AI</div>
               <div className="text-left">
                  <h4 className="text-white font-bold text-xl uppercase tracking-widest">Pilot Workshop</h4>
                  <p className="text-sm">2026 Edition</p>
               </div>
            </div>
            <div className="text-right">
               <h4 className="text-white font-bold mb-2">Liên hệ Hỗ Trợ Đội Nhóm</h4>
               <p className="flex items-center justify-center md:justify-end gap-2"><Phone className="w-4 h-4" /> 09xx xxx xxx</p>
               <p>hello@ai-automation.io</p>
            </div>
         </div>
         <div className="container mx-auto px-6 text-center text-sm font-medium tracking-widest uppercase text-slate-600">
            © 2026 Pilot AI Academy. Crafted for efficiency.
         </div>
      </footer>
    </div>
  );
}
