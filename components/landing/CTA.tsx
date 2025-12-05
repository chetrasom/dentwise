// Node modules
import Image from "next/image";

// Components
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

// Assets
import { MicIcon, CalendarIcon } from "lucide-react";

const CTA = () => {
    return (
        <section className="relative py-20 px-6 overflow-hidden bg-linear-to-br from-muted/10 via-background to-muted/5">

            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_70%)]"></div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* LEFT */}
                    <div>
                        <div className="space-y-6">
                            {/* BADGE */}
                            <Badge 
                                variant="outline" 
                                className="gap-2 px-4 py-2 bg-linear-to-r from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm"
                            >
                                <div className="size-2 rounded-full bg-primary animate-pulse"></div>
                                <span className="text-sm font-medium text-primary capitalize">ready when you are</span>
                            </Badge>

                            {/* MAIN HEADING */}
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                <span className="bg-linear-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                                    Your dental health
                                </span>
                                <br />

                                <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                    journey starts here
                                </span>
                                <br />
                            </h2>

                            {/* PARAGRAPH */}
                            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed font-medium">
                                Join 1,200+ patients who trust our AI for instant guidance and personalized care.
                            </p>

                            {/* CALL-TO-ACTIONS */}
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Button size={"lg"} className="gap-2">
                                    <MicIcon className="size-5" />
                                    Start free chat
                                </Button>
                            
                                <Button 
                                    variant={"outline"}
                                    size={"lg"} 
                                    className="gap-2"
                                >
                                    <CalendarIcon className="size-5" />
                                    Book appointment
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Floating Badge */}
                            <div className="absolute -top-4 left-4 bg-linear-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg z-10">
                                <div className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                                    Available 24/7
                                </div>
                            </div>

                            {/* Main Image */}
                            <div className="relative">
                                {/* Subtle glow */}
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent rounded-2xl blur-xl scale-110"></div>

                                <Image
                                    src="/cta.png"
                                    alt="DentWise AI Assistant"
                                    width={300}
                                    height={300}
                                    className="relative w-80 h-auto drop-shadow-xl hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-linear-to-br from-primary/10 to-primary/5 rounded-full blur-lg"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CTA;