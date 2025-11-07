import { cn } from "@/lib/utils";

interface AdSpaceProps {
  size?: "small" | "medium" | "large" | "banner";
  className?: string;
}

export const AdSpace = ({ size = "medium", className }: AdSpaceProps) => {
  const sizeClasses = {
    small: "h-32",
    medium: "h-64",
    large: "h-96",
    banner: "h-24",
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="text-xs text-muted-foreground mb-2 text-center">
        Advertisement
      </div>
      <div
        className={cn(
          "w-full rounded-lg border border-border bg-muted/30 flex items-center justify-center transition-colors hover:bg-muted/50",
          sizeClasses[size]
        )}
      >
        <div className="text-center px-4">
          <div className="text-muted-foreground text-sm font-medium mb-1">
            Ad Space
          </div>
          <div className="text-muted-foreground/60 text-xs">
            {size === "banner" ? "728 x 90" : size === "small" ? "300 x 250" : size === "medium" ? "336 x 280" : "300 x 600"}
          </div>
        </div>
      </div>
    </div>
  );
};
