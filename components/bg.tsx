export default async function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  "use cache";
  // Helpers for randomness
  const randomDelay = () => `${(Math.random() * 4).toFixed(2)}s`;
  const randomSpeed = () => `${(5 + Math.random() * 7).toFixed(2)}s`;
  const randomBool = () => Math.random() > 0.5;

  // Generate random animated lines (mix of vertical and horizontal)
  const animatedLines = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    isVertical: randomBool(),
    position: Math.random() * 90 + 5, // 5% to 95%
    speed: randomSpeed(),
    delay: randomDelay(),
  }));

  return (
    <div className="relative min-h-screen w-full bg-[#0b0b0b] text-gray-200 overflow-hidden">
      {/* STATIC GRID */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 100%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "100% 60px",
          }}
        />
      </div>

      {/* ░░ RANDOM ANIMATED LINES ░░ */}
      <div className="absolute inset-0 pointer-events-none">
        {animatedLines.map((line) =>
          line.isVertical ? (
            // Vertical line
            <div
              key={`line-${line.id}`}
              className="absolute top-0 h-full w-px bg-white/5 overflow-hidden"
              style={{
                left: `${line.position}%`,
              }}
            >
              <div
                className="v-light animate-vdrop"
                style={{
                  animationDuration: line.speed,
                  animationDelay: line.delay,
                }}
              />
            </div>
          ) : (
            // Horizontal line
            <div
              key={`line-${line.id}`}
              className="absolute left-0 w-full h-px bg-white/5 overflow-hidden"
              style={{
                top: `${line.position}%`,
              }}
            >
              <div
                className="h-light animate-hdrop"
                style={{
                  animationDuration: line.speed,
                  animationDelay: line.delay,
                }}
              />
            </div>
          ),
        )}
      </div>

      {/* CONTENT */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
