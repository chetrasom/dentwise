// Node modules
import { SignUpButton } from "@clerk/nextjs";

// Components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Assets
import { ArrowRightIcon, ZapIcon } from "lucide-react";
import StepCard from "./StepCard";

// Constants
export type Step = {
    num: number;
    icon: string;
    title: string;
    desc: string;
    features: string[];
}

const stepsData: Step[] = [
    {
        num: 1,
        icon: "/audio.png",
        title: "Ask Questions",
        desc: "Chat with our AI assistant about any dental concerns. Get instant answers about symptoms, treatments, and oral health tips.",
        features: ['24/7 Available', 'Instant Response'],
    },
    {
        num: 2,
        icon: "/brain.png",
        title: "Get Expert Advice",
        desc: "Receive personalized recommendations based on thousands of dental cases. Our AI provides professional-grade insights.",
        features: ['AI-Powered', 'Personalized'],
    },
    {
        num: 3,
        icon: "/calendar.png",
        title: "Book & Get Care",
        desc: "Schedule with verified dentists and receive comprehensive follow-up care. Track your progress seamlessly.",
        features: ['Verified Doctors', 'Follow-up Care'],
    }
];

const HowItWorks = () => {
    return (
        <section className='relative max-w-7xl mx-auto py-32 px-6 outline-hidden z-10'>
            {/* Header */}
            <div className="mb-20 text-center">
                {/* BADGE */}
                <Badge 
                    variant="outline" 
                    className="gap-2 px-4 py-2 bg-linear-to-r from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm"
                >
                    <ZapIcon className="size-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Simple Process</span>
                </Badge>

                {/* Heading-title */}
                <h2 className="h2 mt-6">
                    <span className="bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Three steps to
                    </span><br />
                    <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">better dental health 2026</span>
                </h2>

                <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
                    Our streamlined process makes dental care accessible, convenient, and stress-free for everyone.
                </p>
            </div>

            {/* STEPS CARD */}
            <div className="relative">
                {/* CONNECTION HORIZONTAL LINE */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2 hidden lg:block"></div>

                {/* CARD */}
                <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
                    {stepsData.map((step) => {
                        return <StepCard key={step.num} step={step} />
                    })}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-16">
                    <SignUpButton mode="modal">
                        <Button size={"lg"} className="gap-2">
                            <ArrowRightIcon className="size-5" />
                            Get started now
                        </Button>
                    </SignUpButton>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;