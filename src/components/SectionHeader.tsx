type Props = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
