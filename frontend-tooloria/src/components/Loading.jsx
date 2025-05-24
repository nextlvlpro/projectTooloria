// app/loading.tsx
export default function Loading() {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-bg">
        {/* Spinner */}
        <div className="relative w-16 h-16 border-4 border-textMuted border-t-textAccent rounded-full animate-spin"></div>
  
        {/* Pulsating Dot */}
        <div className="mt-6 w-4 h-4 bg-textAccent rounded-full animate-pulse"></div>
  
        {/* Loading Text */}
        <p className="mt-6 text-textAccent text-lg font-semibold tracking-wide">
          Loading...
        </p>
      </div>
    );
  }
  