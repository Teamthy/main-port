import Icon, { type IconName } from "./Icon";

/** Material Symbols for the three capability areas. */
const CAPABILITY_ICONS: Record<string, IconName> = {
  "red-team": "shield",
  platform: "deployed_code",
  verification: "fact_check",
};

export default function CapabilityIcon({ id, size = 40 }: { id: string; size?: number }) {
  return <Icon name={CAPABILITY_ICONS[id] ?? "hub"} size={size} />;
}
