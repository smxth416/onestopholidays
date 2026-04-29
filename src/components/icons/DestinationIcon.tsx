type Props = {
  slug: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses: Record<
  NonNullable<Props["size"]>,
  { wrap: string; iconText: string }
> = {
  sm: { wrap: "w-9 h-9", iconText: "text-base" },
  md: { wrap: "w-10 h-10", iconText: "text-xl" },
  lg: { wrap: "w-14 h-14", iconText: "text-3xl" },
};

type IconDef = {
  iconName: string;
  bg: string;
  fg: string;
};

const iconBySlug: Record<string, IconDef> = {
  dubai: { iconName: "travel_explore", bg: "bg-blue-50", fg: "text-blue-600" },
  bali: { iconName: "hotel", bg: "bg-green-50", fg: "text-green-600" },
  "singapore-malaysia": { iconName: "public", bg: "bg-cyan-50", fg: "text-cyan-700" },
  vietnam: { iconName: "location_on", bg: "bg-purple-50", fg: "text-purple-700" },
  "euro-trio": { iconName: "history_edu", bg: "bg-indigo-50", fg: "text-indigo-700" },
  "sri-lanka": { iconName: "health_and_safety", bg: "bg-emerald-50", fg: "text-emerald-700" },
  "hong-kong-macau": { iconName: "rocket_launch", bg: "bg-rose-50", fg: "text-rose-700" },
  thailand: { iconName: "flight_takeoff", bg: "bg-amber-50", fg: "text-amber-700" },
  "thailand-highlights": { iconName: "explore", bg: "bg-orange-50", fg: "text-orange-700" },
  "spiritual-circuit": { iconName: "support_agent", bg: "bg-fuchsia-50", fg: "text-fuchsia-700" },
};

export const DestinationIcon = ({ slug, size = "md", className }: Props) => {
  const iconDef = iconBySlug[slug] ?? { iconName: "explore", bg: "bg-slate-50", fg: "text-slate-700" };
  const { wrap, iconText } = sizeClasses[size];

  return (
    <div
      className={[
        wrap,
        "rounded-full",
        "flex items-center justify-center",
        "flex-shrink-0",
        "flex-shrink-0",
        iconDef.bg,
        className ?? "",
      ].join(" ")}
    >
      <span className={["material-symbols-outlined", iconText, iconDef.fg].join(" ")}>
        {iconDef.iconName}
      </span>
    </div>
  );
};

