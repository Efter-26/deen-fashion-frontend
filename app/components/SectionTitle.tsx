type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-6">
      <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
      {subtitle ? (
        <p className="text-sm text-neutral-600 mt-1">{subtitle}</p>
      ) : null}
    </div>
  );
}


