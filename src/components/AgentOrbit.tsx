"use client";

const rings = [
  {
    radius: 90,
    duration: 25,
    agents: [
      { name: "Pulse", color: "#00B3C6" },
      { name: "Bolt", color: "#8b5cf6" },
    ],
  },
  {
    radius: 155,
    duration: 35,
    reverse: true,
    agents: [
      { name: "Hunter", color: "#00B3C6" },
      { name: "Sparky", color: "#8b5cf6" },
      { name: "Watch", color: "#00B3C6" },
    ],
  },
  {
    radius: 220,
    duration: 50,
    agents: [
      { name: "Mailer", color: "#00B3C6" },
      { name: "Tracker", color: "#8b5cf6" },
      { name: "Help", color: "#00B3C6" },
    ],
  },
];

export default function AgentOrbit() {
  return (
    <div className="relative h-[520px] w-[520px]">
      {/* Glow backdrop — larger and brighter */}
      <div
        className="absolute inset-[-60px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,179,198,0.12) 0%, rgba(0,179,198,0.04) 40%, transparent 70%)",
        }}
      />

      {/* Static orbit rings — more visible */}
      {rings.map((ring) => (
        <div
          key={ring.radius}
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: ring.radius * 2,
            height: ring.radius * 2,
            marginLeft: -ring.radius,
            marginTop: -ring.radius,
            border: "1px solid rgba(0,179,198,0.2)",
            boxShadow: "0 0 15px rgba(0,179,198,0.03)",
          }}
        />
      ))}

      {/* Central hub — bigger and brighter */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div
            className="absolute inset-0 rounded-full border border-[rgba(0,179,198,0.4)]"
            style={{ boxShadow: "0 0 30px rgba(0,179,198,0.15), inset 0 0 30px rgba(0,179,198,0.08)" }}
          />
          <div
            className="absolute inset-2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,179,198,0.35) 0%, rgba(0,179,198,0.08) 100%)",
            }}
          />
          <div
            className="h-4 w-4 rounded-full bg-[#00B3C6]"
            style={{ boxShadow: "0 0 20px rgba(0,179,198,0.6), 0 0 40px rgba(0,179,198,0.3)" }}
          />
        </div>
      </div>

      {/* Orbiting agents */}
      {rings.map((ring) =>
        ring.agents.map((agent, i) => {
          const dir = ring.reverse ? "reverse" : "normal";

          return (
            <div
              key={agent.name}
              className="absolute left-1/2 top-1/2"
              style={{
                width: ring.radius * 2,
                height: ring.radius * 2,
                marginLeft: -ring.radius,
                marginTop: -ring.radius,
                animation: `orbit-spin ${ring.duration}s linear infinite ${dir}`,
                animationDelay: `${-(ring.duration / ring.agents.length) * i}s`,
              }}
            >
              {/* Agent node — counter-rotate to stay upright */}
              <div
                className="absolute left-1/2 -translate-x-1/2"
                style={{
                  top: -6,
                  animation: `orbit-spin ${ring.duration}s linear infinite ${ring.reverse ? "normal" : "reverse"}`,
                  animationDelay: `${-(ring.duration / ring.agents.length) * i}s`,
                }}
              >
                {/* Dot — bigger with glow */}
                <div
                  className="mx-auto h-3.5 w-3.5 rounded-full"
                  style={{
                    background: agent.color,
                    boxShadow: `0 0 12px ${agent.color}80, 0 0 24px ${agent.color}30`,
                  }}
                />
                {/* Label — brighter */}
                <span
                  className="mt-1.5 block whitespace-nowrap text-center font-condensed text-[0.65rem] font-bold uppercase tracking-[0.15em]"
                  style={{ color: agent.color, opacity: 0.8 }}
                >
                  {agent.name}
                </span>
              </div>

              {/* Connection line to center — more visible */}
              <svg
                className="pointer-events-none absolute inset-0"
                viewBox={`0 0 ${ring.radius * 2} ${ring.radius * 2}`}
              >
                <line
                  x1={ring.radius}
                  y1={0}
                  x2={ring.radius}
                  y2={ring.radius}
                  stroke="#00B3C6"
                  strokeOpacity="0.12"
                  strokeWidth="1"
                />
              </svg>
            </div>
          );
        })
      )}
    </div>
  );
}
