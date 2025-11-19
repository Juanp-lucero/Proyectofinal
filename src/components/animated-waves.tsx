"use client"

export function AnimatedWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -bottom-32 left-0 right-0 h-96 opacity-20">
        <svg className="absolute w-full h-full animate-wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="url(#wave-gradient-1)"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00fff7" />
              <stop offset="50%" stopColor="#a020f0" />
              <stop offset="100%" stopColor="#ff0080" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute -bottom-24 left-0 right-0 h-96 opacity-15">
        <svg className="absolute w-full h-full animate-wave-slow" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="url(#wave-gradient-2)"
            d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff0080" />
              <stop offset="50%" stopColor="#a020f0" />
              <stop offset="100%" stopColor="#00fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute -bottom-16 left-0 right-0 h-96 opacity-10">
        <svg className="absolute w-full h-full animate-wave-reverse" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="url(#wave-gradient-3)"
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,213.3C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a020f0" />
              <stop offset="50%" stopColor="#00fff7" />
              <stop offset="100%" stopColor="#ff0080" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}