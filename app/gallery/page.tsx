import { GalleryGrid, PageHero } from "@/components/DigiJavedStyle";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Selected work" title="Digital visuals for modern business growth." text="A closer look at the strategy, design, AI, marketing and development style behind DigiSparkX work." />
      <section className="section"><div className="shell"><GalleryGrid /></div></section>
    </>
  );
}
