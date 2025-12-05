import Image from "next/image";

// Components
import { Badge } from "@/components/ui/badge";

// Types
import type { Step } from "./HowItWorks";
type StepCardProps = {
    step: Step
}

const StepCard = ({ step }: StepCardProps) => {
    const { num, icon, title, desc, features } = step;

    return (
        <div className="relative group">
            <div className="relative py-8 px-6 bg-linear-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl
            hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                {/* Step number */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-linear-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                    {num}
                </div>

                {/* Icon */}
                <figure className="w-20 h-20 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                    <Image 
                        src={icon} 
                        alt={`img-${title}`} 
                        width={40} 
                        height={40} 
                        className="w-14" 
                    />
                </figure>

                {/* Title */}
                <h3 className="h3 text-center mb-4">{title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-center leading-relaxed mb-6">{desc}</p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 justify-center">
                    {features.map((item, i) => (
                        <Badge 
                            key={i}
                            variant="outline" 
                            className="px-3 py-1 bg-primary/10 text-primary text-xs"
                        >
                            <span>{item}</span>
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StepCard;