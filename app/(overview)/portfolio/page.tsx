import PortfolioHero from "@/components/portfolio/portfolio-hero";
import CertificationsCarousel from "@/components/portfolio/certifications-carousel";
import { CertsFetchProvider } from "@/contexts/fetch-contexts/certs-fetch-context";

export default function page() {
  return (
    <div>
      <div>
        <PortfolioHero />
      </div>

      <div>
        <h1 className="text-center text-2xl font-semibold mb-4">
          Certifications
        </h1>

        <div>
          <CertsFetchProvider>
            <CertificationsCarousel />
          </CertsFetchProvider>
        </div>
      </div>
    </div>
  );
}
