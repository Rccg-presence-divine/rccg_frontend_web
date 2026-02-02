import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export default function DoveAnimation() {
  const { scrollYProgress } = useScroll();

  // Shadow expansion based on scroll - more intense progression
  const shadowScale = useTransform(scrollYProgress, [0, 1], [1, 25]);
  const shadowOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.3, 0.6, 1],
    [0.15, 0.25, 0.4, 0.5, 0.6]
  );

  // Rays appear right after leaving hero section (starts at ~3% scroll)
  const rayOpacity = useTransform(
    scrollYProgress,
    [0, 0.03, 0.08, 0.5, 1],
    [0, 0, 0.4, 0.5, 0.6]
  );

  // Ray length grows progressively with scroll (starts early)
  const rayLengthProgress = useTransform(scrollYProgress, [0.03, 1], [0, 1]);

  // Dove position - stays centered at top
  const doveY = useTransform(scrollYProgress, [0, 1], [80, 120]);
  const doveScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.9, 1]);

  // 7 rays evenly distributed at 45° spread (from -45° to +45°)
  const rayAngles = [-45, -30, -15, 0, 15, 30, 45];

  return (
    <>
      {/* Background layer for rays and shadow - z-[-1] to stay behind all sections */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        {/* Expanding Shadow Effect from hero */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            opacity: shadowOpacity,
            y: 80,
          }}
        >
          <motion.div
            style={{
              scale: shadowScale,
            }}
          >
            {/* Main shadow - radial gradient expanding downward */}
            <div
              className="relative w-[400px] h-[800px]"
              style={{
                background: `radial-gradient(ellipse 100% 120% at 50% 0%, 
                  hsl(45, 90%, 55% / 0.4) 0%, 
                  hsl(45, 85%, 50% / 0.25) 20%,
                  hsl(45, 80%, 45% / 0.15) 40%,
                  hsl(45, 75%, 40% / 0.08) 60%,
                  transparent 80%)`,
                filter: "blur(40px)",
                transform: "translateX(-50%)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* 5 Light Rays at 45° angles - drawn progressively with scroll */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            y: 80,
            opacity: rayOpacity,
          }}
        >
          <svg
            width="100vw"
            height="100vh"
            viewBox="0 0 1200 1800"
            className="absolute top-0 left-1/2 -translate-x-1/2"
            style={{ overflow: "visible", maxWidth: "100vw" }}
            preserveAspectRatio="xMidYMin slice"
          >
            <defs>
              <linearGradient
                id="rayGradientBg"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="hsl(45, 90%, 55%)"
                  stopOpacity="0.6"
                />
                <stop
                  offset="30%"
                  stopColor="hsl(45, 85%, 50%)"
                  stopOpacity="0.4"
                />
                <stop
                  offset="60%"
                  stopColor="hsl(45, 80%, 45%)"
                  stopOpacity="0.2"
                />
                <stop
                  offset="100%"
                  stopColor="hsl(45, 75%, 40%)"
                  stopOpacity="0"
                />
              </linearGradient>
              <filter
                id="rayGlowBg"
                x="-100%"
                y="-20%"
                width="300%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Shadow filter for depth */}
              <filter
                id="rayShadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="4"
                  stdDeviation="6"
                  floodColor="hsl(45, 80%, 40%)"
                  floodOpacity="0.3"
                />
              </filter>
            </defs>

            {/* 5 rays emanating from center point at 45° angles */}
            {rayAngles.map((angle, i) => (
              <ProgressiveRay
                key={i}
                angle={angle}
                rayLengthProgress={rayLengthProgress}
              />
            ))}
          </svg>
        </motion.div>
      </div>

      {/* Dove Silhouette - slightly higher z-index but still subtle */}
      <motion.div
        className="fixed left-1/2 z-10 pointer-events-none"
        style={{
          top: doveY,
          translateX: "-50%",
          scale: doveScale,
        }}
      >
        <motion.div
          className="relative"
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Dove SVG - Silhouette style */}
          <svg
            width="50"
            height="50"
            viewBox="0 0 100 100"
            className="drop-shadow-lg"
            style={{ opacity: 0.9 }}
          >
            {/* Glow behind dove */}
            <defs>
              <radialGradient id="doveGlow" cx="50%" cy="50%" r="50%">
                <stop
                  offset="0%"
                  stopColor="hsl(45, 80%, 55%)"
                  stopOpacity="0.4"
                />
                <stop
                  offset="100%"
                  stopColor="hsl(45, 80%, 55%)"
                  stopOpacity="0"
                />
              </radialGradient>
              <filter
                id="softGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Glow circle */}
            <circle cx="50" cy="50" r="40" fill="url(#doveGlow)" />

            {/* Dove body - golden silhouette */}
            <g filter="url(#softGlow)" fill="hsl(45, 80%, 55%)">
              {/* Body */}
              <ellipse cx="50" cy="55" rx="16" ry="10" />

              {/* Head */}
              <circle cx="63" cy="48" r="9" />

              {/* Beak */}
              <polygon points="72,48 78,50 72,52" fill="hsl(45, 90%, 45%)" />

              {/* Left wing - gentle animation */}
              <motion.path
                d="M34,50 Q18,36 22,26 Q30,30 40,42 Q44,48 34,50"
                animate={{
                  d: [
                    "M34,50 Q18,36 22,26 Q30,30 40,42 Q44,48 34,50",
                    "M34,50 Q22,40 26,34 Q32,36 40,44 Q44,48 34,50",
                    "M34,50 Q18,36 22,26 Q30,30 40,42 Q44,48 34,50",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Right wing */}
              <motion.path
                d="M42,45 Q30,30 35,20 Q44,24 50,36 Q52,42 42,45"
                animate={{
                  d: [
                    "M42,45 Q30,30 35,20 Q44,24 50,36 Q52,42 42,45",
                    "M42,45 Q34,34 38,28 Q44,30 50,38 Q52,42 42,45",
                    "M42,45 Q30,30 35,20 Q44,24 50,36 Q52,42 42,45",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Tail */}
              <path d="M34,55 Q26,60 20,68 Q28,64 36,57" />
            </g>
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
}

// Component for individual progressive ray with fixed 45° angle
interface ProgressiveRayProps {
  angle: number;
  rayLengthProgress: MotionValue<number>;
}

function ProgressiveRay({ angle, rayLengthProgress }: ProgressiveRayProps) {
  const maxLength = 1800;

  // Calculate dynamic length based on scroll
  const currentLength = useTransform(
    rayLengthProgress,
    (progress: number) => progress * maxLength
  );

  // Calculate end coordinates based on fixed angle
  const endX = useTransform(currentLength, (length: number) => {
    const radians = (angle * Math.PI) / 180;
    return 600 + Math.sin(radians) * length;
  });

  const endY = useTransform(currentLength, (length: number) => {
    const radians = (angle * Math.PI) / 180;
    return Math.cos(radians) * length;
  });

  return (
    <g>
      {/* Shadow ray - offset slightly for depth effect */}
      <motion.line
        x1="600"
        y1="0"
        x2={endX}
        y2={endY}
        stroke="hsl(45, 70%, 35%)"
        strokeWidth="12"
        strokeOpacity="0.15"
        filter="url(#rayShadow)"
        strokeLinecap="round"
        style={{ transform: "translate(2px, 4px)" }}
      />
      {/* Main ray line - wider and softer */}
      <motion.line
        x1="600"
        y1="0"
        x2={endX}
        y2={endY}
        stroke="url(#rayGradientBg)"
        strokeWidth="6"
        filter="url(#rayGlowBg)"
        strokeLinecap="round"
      />
      {/* Inner brighter line */}
      <motion.line
        x1="600"
        y1="0"
        x2={endX}
        y2={endY}
        stroke="hsl(45, 95%, 70%)"
        strokeWidth="2"
        strokeOpacity="0.5"
        strokeLinecap="round"
      />
    </g>
  );
}
