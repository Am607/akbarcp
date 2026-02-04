import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    link,
}: {
    className?: string;
    title?: string | ReactNode;
    description?: string | ReactNode;
    header?: ReactNode;
    icon?: ReactNode;
    link?: string;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200  p-4 bg-white/5 border border-white/10 hover:bg-white/10 justify-between flex flex-col space-y-4 backdrop-blur-sm",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="flex items-center gap-2 mb-2">
                    {icon}
                    <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
                        {title}
                    </div>
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
                {link && (
                    <Link href={link} className="flex items-center text-xs text-indigo-400 mt-3 group-hover/bento:text-white transition-colors">
                        View Project <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                )}
            </div>
        </div>
    );
};
