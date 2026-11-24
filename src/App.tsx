import { TiltedGridHero, type TiltedGridImage } from "@/components/ui/tilted-grid-hero";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import downloadImage from "../imagesforswap/download (50).jpg";
import onamSadhyaImage from "../imagesforswap/From Dh37 to Dh195, 13 Onam sadhyas to try in Dubai.jpg";
import buffetImage from "../imagesforswap/Indian Buffet On Stone Tabletop.jpg";
import glassDinnerImage from "../imagesforswap/Indian Dinner Spread In Glass.jpg";
import indianFoodImage from "../imagesforswap/Indian food.jpg";
import southIndianImage from "../imagesforswap/South Indian Food Photography for Antera Hyderabad - Suraj Ghosh.jpg";
import restaurantImage from "../imagesforswap/Thiru Kuppusamy Indian Restaurant_ Enjoy Authentic South Indian Flavours.jpg";

const IMAGES: TiltedGridImage[] = [
  { src: downloadImage, alt: "Indian food served on a traditional platter" },
  { src: onamSadhyaImage, alt: "Colorful South Indian Onam sadhya dishes" },
  { src: buffetImage, alt: "Indian buffet dishes on a stone tabletop" },
  { src: glassDinnerImage, alt: "Indian dinner spread served in glass dishes" },
  { src: indianFoodImage, alt: "Fresh Indian food arranged for a meal" },
  { src: southIndianImage, alt: "South Indian food photography" },
  { src: restaurantImage, alt: "Authentic South Indian restaurant food" },
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main id="hero" className="relative min-h-screen overflow-x-hidden bg-white p-2 text-slate-950 sm:p-4 lg:p-8">
      <Navbar className="!absolute !left-0 !right-0 !top-4">
        <NavBody>
          <NavbarLogo />
          <div className="relative z-20 flex items-center gap-3">
            <NavbarButton href="https://github.com/Emmanuel-devlab/waka-apk-downloads/releases/latest/download/waka-ai.apk" variant="primary">Download App</NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <NavbarButton href="https://github.com/Emmanuel-devlab/waka-apk-downloads/releases/latest/download/waka-ai.apk" variant="primary" className="w-full">
              Download App
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <TiltedGridHero
        images={IMAGES}
        speed={4}
        tileHeight={26}
        aspectRatio={16 / 9}
        gap={6}
        axis={64}
        curve={80}
        fade={12}
        className="relative isolate h-[calc(100svh-1rem)] min-h-[520px] w-full overflow-hidden rounded-lg border border-slate-200 bg-white sm:h-[420px] sm:min-h-[420px] lg:h-[min(760px,calc(100vh-4rem))] lg:min-h-[560px]"
      >
        <div className="relative z-10 flex h-full flex-col items-center pt-6 text-center sm:pt-10 lg:pt-16">
          <p className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 backdrop-blur-sm sm:text-[11px] sm:tracking-[0.24em]">
            Tilted grid hero
          </p>
          <div className="mt-12 px-4 sm:mt-14 lg:mt-24 lg:px-6">
            <h1 className="text-balance text-2xl font-medium tracking-[-0.05em] text-slate-950 sm:text-4xl md:text-5xl lg:text-7xl">
              Every calorie,
              <br />
              brought into focus.
            </h1>
          </div>
          <p className="absolute bottom-[15%] max-w-[220px] px-4 text-balance text-[10px] leading-4 text-slate-500 sm:bottom-8 sm:max-w-xs sm:text-xs sm:leading-5 lg:bottom-12 lg:max-w-md lg:text-sm lg:leading-6">
            Images curve in from one edge, flatten out at the centre, then fade away round the other.
          </p>
        </div>
      </TiltedGridHero>
    </main>
  );
}
