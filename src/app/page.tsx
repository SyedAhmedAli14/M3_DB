import BlogSection from "@/components/sections/blogSection/FeaturedBlogSection";
import ContactSection from "@/components/sections/contactSection/ContactSection";
import HomeSection from "@/components/sections/homeSection/HomeSection";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
