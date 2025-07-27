const FloatingShapes = () => {
  const shapes = [
    { size: "w-20 h-20", top: "10%", left: "10%", delay: "0s", type: "cube" },
    { size: "w-16 h-16", top: "20%", right: "15%", delay: "2s", type: "sphere" },
    { size: "w-24 h-24", top: "60%", left: "5%", delay: "4s", type: "pyramid" },
    { size: "w-12 h-12", top: "70%", right: "10%", delay: "1s", type: "sphere" },
    { size: "w-28 h-28", top: "30%", left: "70%", delay: "3s", type: "cube" },
    { size: "w-14 h-14", top: "80%", left: "80%", delay: "5s", type: "pyramid" },
    { size: "w-18 h-18", top: "5%", left: "60%", delay: "6s", type: "sphere" },
    { size: "w-22 h-22", top: "85%", right: "30%", delay: "7s", type: "cube" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Theme-aware background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-cyan-50/20 dark:from-blue-950/40 dark:via-transparent dark:to-cyan-950/30"></div>
      
      {/* 3D Shapes */}
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`absolute ${shape.size} floating-shape opacity-40 dark:opacity-30`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            animationDelay: shape.delay,
          }}
        >
          <div className={`w-full h-full transition-all duration-500 ${
            shape.type === 'cube' ? 'gradient-primary rounded-lg shadow-lg glow-primary' :
            shape.type === 'sphere' ? 'bg-gradient-to-br from-accent to-accent-glow rounded-full shadow-lg glow-accent' :
            'gradient-primary rounded-lg transform rotate-45 shadow-lg glow-primary'
          }`}></div>
        </div>
      ))}
      
      {/* Enhanced particle effects - Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute transition-all duration-500"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            }}
          >
            {/* Star shape */}
            <div className="relative">
              <div className="w-1 h-1 bg-primary rounded-full opacity-60 dark:opacity-40"></div>
              <div className="absolute top-0 left-0 w-1 h-1 bg-accent rounded-full opacity-40 dark:opacity-30 animate-ping"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Floating geometric lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 dark:opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${50 + Math.random() * 100}px`,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)',
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 8}s`,
              animation: `float ${6 + Math.random() * 6}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingShapes;