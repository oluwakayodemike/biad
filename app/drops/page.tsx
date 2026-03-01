import { SiteHeader } from "@/components/site-header"
import { AllProducts } from "@/components/all-products"
import { SiteFooter } from "@/components/site-footer"

export default function DropsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <AllProducts />
      </main>
      <SiteFooter />
    </div>
  )
}
