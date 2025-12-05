import { Badge } from "@/components/ui/badge"

type SectionTitleProps = {
    icon: React.ElementType;
    label: string;
    title: string;
    subTitle: string;
    desc: string;
}

const SectionTitle = ({
    icon,
    label,
    title,
    subTitle,
    desc,
}: SectionTitleProps) => {
    const Icon = icon;

    return (
        <div className="mb-20 text-center">
            <Badge 
                variant="outline" 
                className="gap-2 px-4 py-2 bg-linear-to-r from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm"
            >
                <Icon className="size-4 text-primary" />
                <span className="text-sm font-medium text-primary">{label}</span>
            </Badge>

            <h2 className="h2 mt-6">
                <span className="bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {title}
                </span><br />
                <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">{subTitle}</span>
            </h2>

            <p className="max-w-3xl mx-auto text-base text-muted-foreground leading-relaxed md:text-xl">
                {desc}
            </p>
        </div>
    )
}

export default SectionTitle