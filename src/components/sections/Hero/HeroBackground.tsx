export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Glow Azul */}
      <div
        className="
          absolute
          left-[-120px]
          top-[120px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-500/10
          blur-[130px]
        "
      />

      {/* Glow Roxo */}
      <div
        className="
          absolute
          right-[-120px]
          top-[80px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-violet-500/10
          blur-[130px]
        "
      />

      {/* Glow Verde */}
      <div
        className="
          absolute
          bottom-[-120px]
          left-1/2
          h-[380px]
          w-[380px]
          -translate-x-1/2
          rounded-full
          bg-emerald-400/10
          blur-[140px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />
    </div>
  );
}
