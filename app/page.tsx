import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { RecentDrops } from "@/components/recent-drops"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <RecentDrops />
      </main>
      <SiteFooter />
    </div>
  )
}
