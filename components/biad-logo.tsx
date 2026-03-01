import Image from "next/image"

export function BiadLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <Image
        src="/logo.svg"
        alt="BIAD LOGO"
        width={80}
        height={80}
        priority
        className="invert pointer-events-none"
      />
    </div>
  )
}
