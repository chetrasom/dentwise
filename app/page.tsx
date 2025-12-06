// Node modules
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// Components
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import WhatToAsk from "@/components/landing/WhatToAsk";
import PricingSection from "@/components/landing/PricingSection";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Homepage = async () => {
    const user = await currentUser();

    // redirect auth user to dashboard
    if (user) redirect("/dashboard");

    return (
        <div className="bg-background min-h-screen">
            <Header />
            <Hero />
            <HowItWorks />
            <WhatToAsk />
            <PricingSection />
            <CTA />
            <Footer />
        </div>
    )
}

export default Homepage;