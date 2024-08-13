import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Navbar } from "@/Components/Navbar";
import HeroSection from "@/Components/Hero";
import { Button } from "@/Components/ui/button";
import { ModeToggle } from "@/Components/mode-toggle";
import { ThemeProvider } from "@/Components/theme-provider";
import BlogSection from "@/Components/BlogSection";
import WhyPerfectGrader from "@/Components/WhyPerfectGrader";
import Footer from "@/Components/Footer";
import BecomeTutor from "@/Components/BecomeTutor";
import GetStarted from "@/Components/ClientCTA";

export default function Welcome({ auth }: PageProps) {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 ">
                <Navbar auth={auth} />

                <HeroSection />
                <BlogSection />
                <GetStarted />
                <BecomeTutor />
                <WhyPerfectGrader />
                <Footer></Footer>
            </div>
            {/* <TemtComponent/> */}
        </ThemeProvider>
    );
}
