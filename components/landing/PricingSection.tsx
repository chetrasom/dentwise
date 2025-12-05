// Node modules
import { SignUpButton } from "@clerk/nextjs";

// Components
import SectionTitle from "./SectionTitle";
import { Button } from "../ui/button";

// Assets
import { CircleAlertIcon, CheckCircleIcon  } from "lucide-react";

const PricingSection = () => {
    return (
        <section className="relative py-32 px-6 overflow-hidden bg-linear-to-b from-background via-muted/3 to-background">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-br from-background via-muted/5 to-primary/5">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_75%_50%_at_50%_50%,#000_50%,transparent_85%)] opacity-20"></div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.06),transparent_70%)]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <SectionTitle 
                    icon={CircleAlertIcon}
                    label={"Simple Pricing"}
                    title={"Choose your"}
                    subTitle={"AI dental plan"}
                    desc="Book appointments for free and upgrade for unlimited AI consultations. Perfect for ongoing dental care."
                />

                {/* Pricing Cards */}
                <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
                    {/* # Free plan */}
                    <div className="relative group">
                        <div className="relative bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
                        >
                            <div className="space-y-6">

                                <div className="space-y-3">
                                    <h3 className="h3">Free</h3>
                                    
                                    <div className="flex items-end gap-1">
                                        <span className="text-4xl font-bold">$0</span>
                                        <span className="text-muted-foreground mb-1">/month</span>
                                    </div>

                                    <p className="text-muted-foreground">Essential dental appointment booking.</p>
                                </div>

                                <SignUpButton mode="modal">
                                    <Button size={"lg"} className="w-full py-3 rounded-xl font-semibold bg-linear-to-r from-muted to-muted/80 text-foreground">
                                        Get Started Free
                                    </Button>
                                </SignUpButton>

                                <ul className="space-y-4">
                                    <li>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">Unlimited appointment booking</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">Find dentists in your area</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">Basic text chat support</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">Appointment reminders</span>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    {/* # Pro plan */}
                    <div className="relative group">
                        {/* Popular Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                            <div className="bg-linear-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                Most Popular
                            </div>
                        </div>

                        <div className="relative bg-linear-to-br from-card/95 to-card/70 backdrop-blur-xl rounded-3xl p-8 border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/20 scale-105"
                        >
                            <div className="space-y-6">

                                <div className="space-y-3">
                                    <h3 className="h3">AI Basic</h3>
                                    
                                    <div className="flex items-end gap-1">
                                        <span className="text-4xl font-bold">$9</span>
                                        <span className="text-muted-foreground mb-1">/month</span>
                                    </div>

                                    <p className="text-muted-foreground">AI consultations + appointment booking.</p>
                                </div>

                                <Button className="w-full py-3 bg-linear-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 text-primary-foreground rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                    Start AI Basic
                                </Button>

                                <ul className="space-y-4">
                                    <li>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">
                                                Everything in Free
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">
                                                10 AI voice calls per month
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">
                                                AI dental guidance & advice
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">
                                                Symptom assessment
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">
                                                Priority support
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">
                                                Call history & recording
                                            </span>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    {/* # Enterprise plan */}
                    <div className="relative group">
                        <div className="relative bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
                        >
                            <div className="space-y-6">

                                <div className="space-y-3">
                                    <h3 className="h3">AI Pro</h3>
                                    
                                    <div className="flex items-end gap-1">
                                        <span className="text-4xl font-bold">$19</span>
                                        <span className="text-muted-foreground mb-1">/month</span>
                                    </div>

                                    <p className="text-muted-foreground">Unlimited AI consultations</p>
                                </div>

                                <Button
                                    variant="outline"
                                    className="w-full py-3 border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 rounded-xl font-semibold transition-all duration-300"
                                >
                                    Upgrade to AI Pro
                                </Button>

                                <ul className="space-y-4">
                                    <li>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">Everything in AI Basic</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">Unlimited AI voice calls</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">Advanced AI dental analysis</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">Personalized care plans</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">24/7 priority AI support</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm">Detailed health reports</span>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PricingSection;