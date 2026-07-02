/* Typography */
font-family: "Inter", sans-serif (--font-sans)
font-family: "Anonymous Pro", monospace (--font-mono)

/* Section Labels */
className="font-mono text-sm uppercase text-[#1D1F2C] -tracking-[0.18px] mb-3"

/* H1 Headlines */
className="text-3xl lg:text-5xl font-normal -tracking-[2.88px] mb-6 text-black"

/* H2 Section Headlines */
className="text-3xl sm:text-5xl font-normal -tracking-[1.92px] text-black"

/* Body Text */
className="text-lg text-gray-700 leading-7 -tracking-[0.2px]"

/* Primary CTA Button (dark) */
className="group px-6 py-4.5 inline-flex gap-2 items-center bg-black text-sm
font-medium -tracking-[0.2px] leading-5 text-white rounded-full hover:bg-gray-900
transition-all duration-300"

/* Primary CTA Button (light) */
className="group px-6 py-4.5 inline-flex gap-2 items-center bg-white text-sm
font-medium -tracking-[0.2px] leading-5 text-black rounded-full hover:bg-gray-100
transition-all duration-300"

/* Outline Button */
className="px-6 py-4.5 inline-flex items-center border border-black text-sm
font-medium -tracking-[0.2px] leading-5 text-black rounded-full hover:bg-gray-50
transition font-mono uppercase"

/* Button Text */
className="font-mono uppercase"

/* Cards */
className="rounded-[20px] border border-[#E9E9EA] p-8"

/* Cards (dark) */
className="p-6 rounded-[20px] border border-[#1F1F1F] bg-neutral-950"

/* Dark Section Backgrounds */
className="bg-black rounded-4xl" or "bg-neutral-950"

/* Light Section Backgrounds */
className="bg-[#FBFBFB]"

/* Stats Numbers */
className="text-4xl lg:text-5xl font-semibold text-white -tracking-[1.92px] mb-2"

/* Stats Labels */
className="text-base text-white/60 font-mono"

/* Process Step Numbers */
className="font-mono text-4xl font-semibold text-gray-200 mb-6 block"

/* Form Inputs */
className="px-8 py-3 rounded-full border border-[#E9E9EA] focus:outline-none
focus:border-black focus:ring-2 focus:ring-offset-2 focus:ring-black/30 h-16
text-base w-full bg-white"

/* Textarea */
className="px-8 py-4 rounded-3xl border border-[#E9E9EA] focus:outline-none
focus:border-black focus:ring-2 focus:ring-offset-2 focus:ring-black/30 text-base
w-full bg-white resize-none"

/* Blog Category Tags */
className="font-mono text-xs uppercase text-[#1D1F2C] -tracking-[0.18px]"

/* Blog Content Tags */
className="px-4 py-2 rounded-full border border-[#E9E9EA] text-sm font-mono
text-[#1D1F2C]"

/* Image Rounding */
className="rounded-[20px]" (sections)
className="rounded-2xl" (project images)

/* Container Widths */
max-w-7xl (1280px) — content sections
max-w-[1440px] — full-width sections (CTA banners, images)
max-w-3xl — blog content, centered text

/* Section Padding */
className="py-20 sm:py-25" — standard sections
className="pt-15 lg:pt-30 lg:pb-20 pb-10" — page heroes

/* CTA Banner */
className="rounded-4xl bg-black px-6 sm:px-10 py-20 sm:py-25
text-center relative overflow-hidden"

/* CTA Banner Glow Effects */
className="absolute -top-40 -left-40 w-96 h-96 bg-gray-800
rounded-full opacity-30 blur-[100px]"
className="absolute -bottom-40 -right-40 w-96 h-96 bg-gray-700
rounded-full opacity-25 blur-[100px]"

/* Footer */
className="bg-neutral-950 pt-20 pb-10"
Border: className="border-t border-[#1F1F1F]"

/* Animations */
--animate-infinite-scroll: infinite-scroll 25s linear infinite
Image hover: scale: 1.05, duration: 0.4, ease: "easeOut"
Button arrow: group-hover:translate-x-1

/* Italic Emphasis Pattern */
Always wrap the LAST 1-3 words of headlines in:
<span className="italic">word(s)</span>
implement this styling strictly 
