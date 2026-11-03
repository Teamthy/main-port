import Icon from "./Icon";

/** The site's forward arrow, drawn from Material Symbols. */
export default function ArrowIcon({ className = "" }: { className?: string }) {
  return <Icon name="arrow_forward" size={20} className={className} />;
}
