// Node modules
import { FC } from "react";

// Types
import type { Question } from "./WhatToAsk"

// Components
import { Badge } from "../ui/badge";

const QuestionCard: FC<Question> = ({
    icon: Icon,
    question,
    answer,
    features
}) => {
    return (
        <article className="relative group">
            <div className="bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center shrink-0">
                        <span aria-hidden={true}>
                            <Icon className="h-6 w-6 text-primary" />
                        </span>
                    </div>

                    {/* Ask question */}
                    <div className="flex-1 space-y-3">
                        <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                            <p className="font-semibold text-primary">
                                {question}
                            </p>
                        </div>

                        <div className="bg-muted/30 rounded-2xl p-4">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {answer}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
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
                    </div>
                </div>
            </div>
        </article>
    )
}

export default QuestionCard;