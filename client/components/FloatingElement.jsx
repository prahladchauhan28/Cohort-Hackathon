
const FloatingElement = () => {
  return (
   <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 border-2 border-s8ul-green/30 rotate-45 animate-pulse" />
      <div
        className="absolute top-40 right-20 w-6 h-6 border-2 border-s8ul-green/40 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-1/4 w-3 h-3 bg-s8ul-green/50 rotate-12 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-s8ul-green/10 to-transparent rounded-full blur-xl animate-pulse" />
      <div
        className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-lg animate-pulse"
        style={{ animationDelay: "3s" }}
      />
    </div>
  )
}

export default FloatingElement
