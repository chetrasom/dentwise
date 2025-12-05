import Image from "next/image";

// Components
import SectionTitle from "./SectionTitle";
import QuestionCard from "./QuestionCard";

// Assets
import { MessageCircleIcon, MessageSquareIcon } from "lucide-react";

// Types
export type Question = {
    id: number;
    icon: React.ElementType;
    question: string;
    answer: string;
    features: string[];
}

// Constants
const questionsData: Question[] = [
    {
        id: 1,
        icon: MessageSquareIcon,
        question: `"My tooth hurts when I bite down"`,
        answer: `Get immediate advice on pain management, possible causes, and when to see a dentist urgently`,
        features: ["Instant Response", "Pain Relief"]
    },
    {
        id: 2,
        icon: MessageSquareIcon,
        question: `"How much does teeth whitening cost?"`,
        answer: `Compare treatment options, pricing ranges, and find the best whitening solution for your budget.`,
        features: ["Cost Analysis", "Treatment Options"]
    },
    {
        id: 3,
        icon: MessageSquareIcon,
        question: `"When should I replace my filling?"`,
        answer: `Learn about filling lifespan, warning signs of wear, and replacement timing guidance`,
        features: ["Preventive Care", "Maintenance"]
    }
];

const WhatToAsk = () => {
    return (
        <section className="bg-primary/10 relative py-32 px-6 overflow-hidden bg-linear-to-b from-background to-muted/20">
            <div className="relative z-10 max-w-7xl mx-auto">

                <SectionTitle 
                    icon={MessageCircleIcon}
                    label="AI-Powered Conversation"
                    title="Ask about"
                    subTitle="anything dental"
                    desc="From simple questions to complex concerns, our AI delivers expert-level guidance trained
                on thousands of real dental cases."
                />

                <div className="grid gap-16 items-start lg:grid-cols-2">
                    {/* LEFT */}
                    <div>
                        <h3 className="h3 mb-8">Common questions our AI answers:</h3>

                        {/* Chat bubble 1 */}
                        {questionsData.map((question) => (
                            <QuestionCard
                                key={question.id}
                                id={question.id}
                                icon={question.icon}
                                question={question.question}
                                answer={question.answer}
                                features={question.features}
                            />
                        ))}
                    </div>

                    {/* RIGHT */}
                    <div className="border border-border/50 rounded-3xl p-8 bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl hover:border-primary/30 transition-all duration-500"
                    >
                        <div className="h-full flex items-center justify-center">
                            <Image
                                src="/confused.png"
                                alt="AI Assistant"
                                width={500}
                                height={500}
                                className="w-full h-auto max-w-lg object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatToAsk;