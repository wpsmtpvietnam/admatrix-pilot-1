/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Workflow, 
  Zap, 
  Users, 
  Clock, 
  LayoutDashboard, 
  FileText, 
  MessagesSquare, 
  ChevronDown, 
  Star, 
  Gift, 
  Phone,
  BarChart3,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="mb-16 text-center px-4">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg max-w-2xl mx-auto text-slate-500 font-medium"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-16 h-1 bg-brand-accent/20 mx-auto mt-6 rounded-full"></div>
  </div>
);

const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
  <div className={`soft-card p-8 group hover:border-brand-accent/50 hover:shadow-md transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export default function App() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <div className="min-h-screen font-sans selection:bg-blue-50 selection:text-blue-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative pt-32 pb-40 lg:pt-48 lg:pb-56 overflow-hidden bg-slate-50/50">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 -z-10" />
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-white/10 backdrop-blur-md border-b border-slate-100">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                <Zap className="w-6 h-6 text-white" />
             </div>
             <span className="text-xl font-bold tracking-tight text-slate-900">AI PILOT</span>
          </div>
          <div className="hidden md:flex gap-8 meta-label">
            <a href="#" className="text-blue-600">Học Workshop</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Flow thực tế</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Team Blueprint</a>
          </div>
        </nav>

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 items-center gap-16">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 inline-flex"
              >
                <span className="meta-label px-4 py-2 bg-blue-50 border border-blue-100 text-blue-600 rounded-2xl">
                  🚀 Workshop Pilot Class 2024
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-8 leading-[1.2]"
              >
                Content chậm không phải vì bạn yếu – mà do <span className="text-blue-600">thiếu automation</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Dừng quy trình thủ công ngay lập tức. Thiết kế hệ thống automation content chuyên nghiệp chỉ trong 4 giờ huấn luyện tập trung.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center lg:justify-start items-center gap-6"
              >
                <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1">
                  Tham gia Pilot
                </button>
                <div className="flex items-center gap-4 py-3 px-5 bg-white rounded-2xl border border-slate-100">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-slate-600 tracking-tight">+50 học viên đã học</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-video bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600" 
                  alt="AI Automation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/5 transition-all">
                  <div className="w-20 h-20 rounded-3xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-blue-600 fill-current ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="bg-white py-12 relative z-10 -mt-20 mx-4 md:mx-auto max-w-6xl rounded-[2.5rem] shadow-xl border border-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, label: "4h thực hành", sub: "Tiết kiệm 80% thời gian" },
              { icon: Workflow, label: "Flow thực tế", sub: "Áp dụng được ngay" },
              { icon: LayoutDashboard, label: "Blueprint Team", sub: "Quy trình chuẩn" },
              { icon: BarChart3, label: "Case marketing", sub: "Thực chiến 100%" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm md:text-base">{item.label}</h3>
                <p className="text-xs text-slate-400 mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PAIN POINT & 4. CONSEQUENCE */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Tại sao quy trình của bạn vẫn đang dậm chân tại chỗ?">
            Thực trạng Content Marketing
          </SectionTitle>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-4">
              {[
                "Content làm chậm, luôn trễ deadline",
                "Quy quy trình rời rạc, không có hệ thống",
                "Viết đi viết lại nhiều lần vẫn không ưng",
                "Không thể scale được số lượng nội dung"
              ].map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="flex items-center gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <span className="text-slate-700 font-semibold">{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[3rem] overflow-hidden shadow-2xl relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=1200" 
                alt="Stressed Marketer" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-medium italic">"Mọi thứ dường như luôn ngoài tầm kiểm soát..."</p>
              </div>
            </motion.div>
          </div>

          <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-10">Hệ quả nghiêm trọng</h3>
                <ul className="space-y-8">
                  {[
                    { title: "Chi phí vận hành tăng cao", desc: "Thuê outsource hoặc nhân sự vận hành quy trình thủ công tốn kém, khó kiểm soát chất lượng." },
                    { title: "Team marketing quá tải", desc: "Nhân viên bị burn-out vì phải xử lý khối lượng công việc lặp đi lặp lại vô nghĩa." },
                    { title: "Chất lượng thiếu nhất quán", desc: "Output thất thường, lúc hay lúc dở, không giữ được tone & voice của thương hiệu." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-6">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                        <CheckCircle2 className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                        <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                  alt="Team Struggle" 
                  className="rounded-3xl opacity-80" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BIG IDEA */}
      <section className="py-32 bg-slate-50 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="meta-label text-blue-600 mb-6 block">The Transformation</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Content là một <span className="text-blue-600 italic">hệ thống</span> – không phải từng bài viết riêng lẻ
              </h2>
              <p className="text-slate-600 text-xl italic font-medium leading-relaxed mb-8">
                "Thay đổi tư duy từ người viết sang người thiết kế quy trình - Chìa khóa để đứng vững trong kỷ nguyên AI."
              </p>
              <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[3rem] overflow-hidden shadow-2xl rotate-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200" 
                alt="Systematic Content" 
                className="w-full h-[450px] object-cover" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. OUTCOME */}
      <section className="py-32 bg-slate-50/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <SectionTitle subtitle="Bạn sẽ nhận được gì sau 4 giờ thực hành chuyên sâu?">
                Giá trị thực tế mang về
              </SectionTitle>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Zap, title: "Automation Mindset", desc: "Biết chính xác bước nào trong quy trình nên và không nên dùng AI để tối ưu hóa nhân lực." },
                  { icon: Workflow, title: "Tạo Flow Content", desc: "Tự tay thiết kế pipeline từ ý tưởng đến bài viết đa kênh hoàn thiện chỉ trong vài phút." },
                  { icon: Cpu, title: "Prompt Marketing", desc: "Sở hữu bộ công thức prompt chuẩn dành riêng cho content team chuyên nghiệp." },
                  { icon: Users, title: "Blueprint cho Team", desc: "Có sẵn quy trình hệ thống để training lại cho đội ngũ hoặc chuyển giao cho khách hàng." }
                ].map((item, idx) => (
                  <Card key={idx}>
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-600/10 blur-3xl rounded-full" />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="Outcome Visual" 
                  className="relative rounded-[3rem] shadow-2xl border-4 border-white" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FLOW VISUAL */}
      <section className="py-32 bg-white text-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle subtitle="Cấu trúc quy trình tự động hóa Content Marketing đỉnh cao mà chúng ta sẽ xây dựng">
            Pipeline Visualizer
          </SectionTitle>
          
          <div className="max-w-5xl mx-auto mt-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-[4rem] left-20 right-20 h-[2px] bg-blue-50 z-0" />
              {[
                { label: "Input / Topic", icon: FileText },
                { label: "AI Analysis", icon: Cpu },
                { label: "Flow Generation", icon: Workflow },
                { label: "Multi-Platform Output", icon: LayoutDashboard }
              ].map((step, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  key={idx}
                  className="flex flex-col items-center gap-6 relative z-10 group"
                >
                  <div className="w-20 h-20 bg-white border-4 border-white shadow-xl rounded-2xl flex items-center justify-center group-hover:shadow-blue-100 group-hover:border-blue-50 transition-all">
                    <step.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="text-center pt-4">
                    <div className="text-blue-600 font-bold mb-1 text-xs">Bước 0{idx+1}</div>
                    <span className="font-bold text-slate-800 tracking-tight">{step.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-20 p-10 bg-slate-50 rounded-[2rem] border border-slate-100 text-center">
              <p className="text-slate-600 text-xl font-medium italic leading-relaxed max-w-3xl mx-auto">
                "Chúng ta không dùng AI để thay thế con người, <br/> chúng ta dùng AI để con người bớt làm việc của máy."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COURSE OVERVIEW & 9. SYLLABUS */}
      <section className="py-32 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-12">Thông tin Workshop</h2>
              <div className="space-y-8">
                {[
                  { icon: Clock, title: "4 Giờ tập trung", desc: "Workshop thực chiến 100% tại lớp" },
                  { icon: Users, title: "15-30 Học viên", desc: "Giới hạn số lượng để đảm bảo chất lượng" },
                  { icon: Zap, title: "70% Thực hành", desc: "Xây dựng hệ thống ngay trên dữ liệu của bạn" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 p-10 bg-slate-900 text-white rounded-[2rem] relative shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-[60px]" />
                <span className="meta-label text-blue-400 mb-4 block">Exclusive Bonus</span>
                <h4 className="text-2xl font-bold mb-4">Prompt Bank Marketing</h4>
                <p className="text-slate-400 mb-8 text-sm leading-relaxed">Tặng bộ thư viện 100+ prompt marketing thực chiến trị giá 1.500.000 VNĐ dành cho team content chuyên nghiệp.</p>
                <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all">
                  Đăng ký Pilot
                </button>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-12">Lộ trình <span className="text-blue-600">Syllabus</span></h2>
              <div className="space-y-4">
                {[
                  { time: "01", title: "Automation Mindset", content: "Phá bỏ rào cản cũ, hiểu bản chất của pipeline content và phân mảnh công việc thông minh." },
                  { time: "02", title: "Content Process Design", content: "Tự tay vẽ lại quy trình cho team marketing của chính bạn để tối ưu 80% thời gian." },
                  { time: "03", title: "Prompt Marketing Masterclass", content: "Công thức viết prompt chuẩn chỉnh để AI hiểu đúng tone & voice thương hiệu." },
                  { time: "04", title: "Building The Flow", content: "Lắp ghép các công cụ (ChatGPT, Claude, Automation Tools) để tạo ra máy sản xuất tự động." },
                  { time: "05", title: "QC & Optimize", content: "Học cách kiểm soát chất lượng đầu ra và tinh chỉnh để bộ máy AI ngày càng hiệu quả." }
                ].map((item, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx} 
                    className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-white transition-all group flex gap-8 items-start"
                  >
                    <span className="text-4xl font-bold text-slate-200 group-hover:text-blue-600 transition-colors leading-none">{item.time}</span>
                    <div>
                      <h4 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed text-sm">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. USE CASE DEMO */}
      <section className="py-32 bg-slate-900 text-white px-6">
        <div className="container mx-auto">
          <SectionTitle subtitle="Chỉ với 1 chủ đề (Input), hệ thống sẽ tự động sản xuất hàng loạt định dạng nảy lửa">
            <span className="text-white">1 Input ∞ Output</span>
          </SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: "Blog Content", icon: FileText, desc: "Bài viết 1500+ từ chuẩn SEO, chuẩn Insight khách hàng.", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643" },
              { type: "Social Series", icon: MessagesSquare, desc: "Trọn bộ chuỗi captions đa dạng cho FB, Instagram, TikTok.", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7" },
              { type: "Viral Script", icon: Play, desc: "Kịch bản ngắn hấp dẫn cho Reels, Shorts với Hook triệu view.", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4" },
              { type: "Slide Dàn Ý", icon: LayoutDashboard, desc: "Dàn ý chi tiết và slide thuyết trình chuyên nghiệp chỉ trong tích tắc.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all group overflow-hidden flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={item.type} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-100" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.type}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11, 12, 13 SPECIAL SECTIONS */}
      <section id="hands-on" className="py-32 bg-white px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-16 leading-tight">Tập trung <span className="text-blue-600">Thực chiến</span></h2>
              <div className="space-y-12">
                {[
                  { num: "01", title: "Hands-on Experience", desc: "Đừng chỉ nghe lý thuyết. Bạn mang project thực tế của mình tới, chúng ta sẽ cùng xây bộ flow tự động cho chính nó ngay tại lớp." },
                  { num: "02", title: "Brand Voice Control", desc: "Nỗi sợ AI viết bài giống nhau sẽ biến mất. Workshop dạy bạn cách 'huấn luyện' AI hiểu sâu về phong cách cá tính của Brand." },
                  { num: "03", title: "Team Blueprint", desc: "Mỗi nhóm sẽ được mentor trực tiếp vẽ ra flow vận hành để tối ưu hóa bộ máy nhân lực, chuyển từ thủ công sang hiệp lực với AI." }
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="shrink-0 w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {point.num}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h4>
                      <p className="text-slate-500 leading-relaxed text-sm">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative p-12 md:p-16 bg-blue-600 text-white rounded-[3rem] shadow-2xl overflow-hidden z-10"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
                <h3 className="text-3xl font-bold mb-8 leading-tight">
                  "Chúng ta đang xây dựng một xưởng sản xuất, <span className="text-blue-100">không phải</span> chỉ học prompt."
                </h3>
                <p className="text-blue-100 text-lg mb-12 opacity-80 italic">
                  Hệ thống này sẽ trở thành tài sản vô giá của doanh nghiệp bạn trong kỷ nguyên AI Marketing rực lửa này.
                </p>
                <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider">
                   <div className="w-12 h-[1px] bg-white/30"></div>
                   Pilot Class 2024
                </div>
              </motion.div>
              <div className="absolute -bottom-10 -right-10 w-full h-full bg-slate-100 rounded-[3rem] -z-10 overflow-hidden hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
                  alt="Workshop Session" 
                  className="w-full h-full object-cover opacity-60" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. PROOF / TESTIMONIALS */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Những gì học viên các khóa trước đã nói sau khi áp dụng flow content AI">
            Học viên nói gì?
          </SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { 
                text: "Giảm 50% thời gian làm content của cả team. Trước đây 3 người vật vã với 1 campaign, giờ 1 người kết hợp Flow AI là giải quyết xong trong 1 buổi sáng.",
                author: "Nguyễn Anh Tuấn",
                role: "Marketing Manager @ TechCorp"
               },
              { 
                text: "Khóa học thực tế nhất mình từng tham gia. Không có mấy lý thuyết suông sáo rỗng, tất cả tập trung vào việc lắp ghép công cụ và tinh chỉnh flow để áp dụng ngay.",
                author: "Lê Minh Thảo",
                role: "Content Leader @ CreativeHub"
               }
            ].map((item, idx) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={idx} 
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/20"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium italic">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={idx === 0 ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"} 
                    alt={item.author} 
                    className="w-12 h-12 rounded-xl object-cover" 
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{item.author}</h4>
                    <p className="text-slate-400 text-xs font-semibold">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. BONUS */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1600" alt="Bonus BG" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="meta-label text-blue-400 mb-4 block">Exclusive Bonus</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Đặc quyền dành riêng cho bạn</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Prompt Bank Marketing", desc: "Thư viện 100+ câu lệnh chuẩn cho marketing team.", icon: Gift },
              { title: "SOP Content AI", desc: "Quy trình vận hành chuẩn để chuyển giao cho nhân sự.", icon: Workflow },
              { title: "Blueprint Flow Canvas", desc: "Bản vẽ sơ đồ các flow thành công nhất để bạn tuỳ biến.", icon: LayoutDashboard },
              { title: "Checklist QC Content", desc: "Bảng kiểm soát chất lượng giúp bài viết AI thoát mác máy móc.", icon: CheckCircle2 }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 group hover:bg-white/10 transition-all"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. WHO SHOULD JOIN */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <SectionTitle subtitle="Dù bạn là một mình hay có cả team, automation vẫn là chìa khóa để dẫn đầu.">
            Khóa học này dành cho ai?
          </SectionTitle>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {[
              { label: "Content Marketers", icon: FileText, color: "text-blue-500" },
              { label: "Marketing Managers", icon: LayoutDashboard, color: "text-purple-500" },
              { label: "Business Owners", icon: Users, color: "text-red-500" },
              { label: "Freelancer Agency", icon: Zap, color: "text-amber-500" }
            ].map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="flex flex-col items-center gap-5 group"
              >
                <div className={`w-24 h-24 bg-slate-50 rounded-[2.5rem] flex items-center justify-center ${item.color} border border-slate-100 group-hover:scale-110 group-hover:bg-white group-hover:shadow-xl transition-all`}>
                  <item.icon className="w-10 h-10" />
                </div>
                <span className="font-bold text-lg text-slate-600 group-hover:text-slate-900 transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. PRICING */}
      <section id="pricing" className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle subtitle="Mức đầu tư đặc biệt dành riêng cho khoá học thử nghiệm">
            Mức đầu tư
          </SectionTitle>
          
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-blue-100/50 flex flex-col md:flex-row overflow-hidden border border-slate-100">
            <div className="flex-1 p-12 lg:p-16 border-b md:border-b-0 md:border-r border-slate-100">
              <span className="meta-label text-blue-600 mb-6 block">Early Bird Access</span>
              <div className="space-y-4 mb-10">
                <span className="text-slate-400 line-through text-2xl font-medium italic block">1.500.000 VNĐ</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-7xl font-bold text-slate-900">799</span>
                  <span className="text-2xl font-bold text-blue-600">.000 VNĐ</span>
                </div>
              </div>
              <ul className="space-y-4">
                {["4h Training chuyên sâu", "Prompt Marketing Bank", "Blueprint Team Flow", "Hỗ trợ 1-1 tại lớp"].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-600 uppercase tracking-tight">
                     <CheckCircle2 className="w-5 h-5 text-blue-600" /> {item}
                   </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 p-12 lg:p-16 flex flex-col justify-center bg-blue-50/30">
              <div className="flex items-center justify-center gap-3 mb-10 p-5 bg-white rounded-2xl border border-blue-100 text-blue-700 font-bold shadow-sm animate-pulse">
                <Clock className="w-6 h-6 text-blue-600" />
                Chỉ còn đúng 12/30 chỗ cuối cùng!
              </div>

              <button className="w-full py-6 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all transform hover:scale-[1.02] shadow-xl shadow-blue-200 mb-6">
                Giữ chỗ tham gia ngay
              </button>
              <p className="text-slate-400 text-xs text-center font-bold uppercase tracking-widest leading-relaxed">Áp dụng cho khóa Pilot 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* 21. FAQ */}
      <section className="py-32 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Giải đáp nhanh những băn khoăn của bạn trước khi bắt đầu">
            Câu hỏi thường gặp
          </SectionTitle>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Tôi là người mới bắt đầu với AI, có theo kịp không?", a: "Hoàn toàn được! Workshop thiết kế theo lối 'cầm tay chỉ việc', bắt đầu bằng mindset trước khi vào kỹ thuật." },
              { q: "Lớp học có cần mang laptop không?", a: "Rất cần thiết! Vì chúng ta học qua thực tế (Hands-on), bạn cần laptop để thiết kế quy trình ngay tại lớp." },
              { q: "Quy trình này có áp dụng được cho mọi ngành nghề?", a: "Đúng vậy! Đây là khung tư duy (Framework) có thể áp dụng cho mọi loại hình content." }
            ].map((faq, idx) => (
              <div key={idx} className="soft-card overflow-hidden">
                <button 
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-7 text-left hover:bg-white transition-colors"
                >
                  <span className="font-bold text-slate-800">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activeAccordion === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeAccordion === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-7 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 22. FINAL CTA */}
      <section className="py-40 bg-white text-slate-900 relative overflow-hidden border-t border-slate-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-16 max-w-4xl mx-auto leading-tight"
          >
            Sẵn sàng để "giải phóng" <br/> team marketing của bạn?
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="w-full md:w-auto px-16 py-7 bg-blue-600 text-white rounded-2xl font-bold text-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200">
              Đăng ký Pilot ngay
            </button>
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white"><Phone className="w-7 h-7" /></div>
              <div>
                <div className="text-xl font-bold text-slate-900">09xx xxx xxx</div>
                <p className="text-slate-500 text-sm font-medium">Tư vấn trực tiếp cho team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 23. FOOTER */}
      <footer className="py-24 bg-white text-slate-500 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 pb-20 mb-20 border-b border-slate-100">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-100">AI</div>
                <span className="text-slate-900 font-bold text-2xl tracking-tight uppercase leading-none">Automation <br/><span className="text-blue-600">Marketing</span></span>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-md font-medium italic">
                Dẫn đầu xu thế bằng các quy trình Content Automation thực chiến.
              </p>
              <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-900">
                <a href="#" className="hover:text-blue-600 transition-colors">Facebook</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Youtube</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Linkedin</a>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
              <div>
                <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-[10px]">Khoá học</h4>
                <ul className="space-y-4 font-bold text-xs uppercase tracking-tight">
                  <li><a href="#hero" className="hover:text-blue-600 transition-colors">Workshop Pilot</a></li>
                  <li><a href="#syllabus" className="hover:text-blue-600 transition-colors">Syllabus</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-[10px]">Hỗ trợ</h4>
                <ul className="space-y-4 font-bold text-xs uppercase tracking-tight">
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Câu hỏi FAQ</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Điều khoản</a></li>
                </ul>
              </div>
              <div className="border-l border-slate-100 pl-10">
                <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-[10px]">Contact</h4>
                <ul className="space-y-6 font-bold text-xs uppercase tracking-tight text-slate-800">
                  <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-blue-600" /> 09xx xxx xxx</li>
                  <li className="text-[10px] tracking-normal">contact@automation.ai</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-widest">
            <p>© 2026 AI AUTOMATION WORKSHOP. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-8">
              <span>TEAM AI ACADEMY</span>
              <span>MADE FOR CREATORS</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
