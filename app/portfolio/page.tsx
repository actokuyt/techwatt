import PortfolioHero from "@/components/portfolio/portfolio-hero";
import Certifications from "@/components/portfolio/certifications";

export default function page() {
    return(
        <div>
            <div>
            <PortfolioHero />
            </div>

            <div>
                <h1 className="text-center text-2xl font-semibold mb-4" >Certifications</h1>

                <div>
                    <Certifications />
                </div>
            </div>
        </div>
    )
}