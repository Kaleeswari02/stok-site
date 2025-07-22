export default function EarnSection() {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white relative overflow-hidden">
        
        {/* Left: Treadmill Image with Overlay */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center">
          {/* Green Overlay (blurred glow effect) */}
          <img
            src="/backgroundoverlay.png"
            alt="Glow Overlay"
            className="absolute  right-1 w-[10%] md:w-[75%] blur-xl opacity-90 z-0 pointer-events-none"
            style={{
                right: '4vw',
                bottom:'-6vh'
              }}
              
          />
  
          {/* Treadmill Image */}
          <img
            src="/earnsec.png"
            alt="Treadmill"
            className="relative z-10 rounded-[32px] w-[60%] md:w-[60%]"
          />
        </div>
  
        {/* Right: Text and Button */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-12 text-center md:text-left">
        <h2 className="text-[32px] md:text-[40px] font-bold flex flex-wrap items-center">
  {/* "Two ways to" with gradient */}
  <span className="bg-[linear-gradient(to_right,#14F195,#399FE9,#7928D2)] text-transparent bg-clip-text">
    Two ways to 
  </span>

  {/* Spacing + "earn" */}
  <span className="ml-2 flex items-center">
    {/* 'e' in gradient */}
    <span className="bg-[linear-gradient(to_right,#14F195,#399FE9,#7928D2)] text-transparent bg-clip-text">e</span>

    {/* 'a' in blackish violet */}
    <span className="text-[#2C154A]">a</span>

    {/* 'r' and 'n' in black */}
    <span className="text-black">r</span>
    <span className="text-black">n</span>
  </span>
</h2>




          <p className="mt-4 text-[#3B3B3B] text-[18px] leading-relaxed max-w-xl">
            Sportstech makes it easy to convert your workouts to earnings. It’s easy as downloading our app and going for a run. Want to earn more? Purchase one of our Fitness Miners, workout, and earn gamified rewards.
          </p>
  
          {/* Gradient Border Button */}
          <div className="mt-8 inline-block p-[2px] rounded-full bg-gradient-to-r from-[#00E599] via-[#3C82F4] to-[#5729F9]">
            <button className="bg-white text-[#3B3B3B] text-[18px] font-semibold px-6 py-3 rounded-full hover:bg-[#f5f5f5] transition">
              Learn more
            </button>
          </div>
        </div>
      </section>
    );
  }
  