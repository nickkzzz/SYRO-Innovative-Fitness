interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function Heading({
  title,
  subtitle,
  center = false,
}: HeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {subtitle && (
        <span
          className="
            inline-block
            uppercase
            tracking-[0.3em]
            text-sm
            text-[var(--primary)]
            font-semibold
            mb-4
          "
        >
          {subtitle}
        </span>
      )}

      <h2
        className="
          text-5xl
          md:text-7xl
          leading-none
          uppercase
        "
      >
        {title}
      </h2>
    </div>
  );
}