const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Primary animated gradient */}
      <div className="absolute inset-0 animated-gradient-bg" />
      
      {/* Mesh overlay for depth */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, hsla(337, 69%, 25%, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, hsla(244, 47%, 30%, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, hsla(337, 54%, 20%, 0.2) 0%, transparent 60%)
          `,
        }}
      />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
