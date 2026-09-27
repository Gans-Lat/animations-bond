export const Footer = ({ lastUpdate }: { lastUpdate?: Date }) => {
  if (!lastUpdate) return null;

  return (
    <div className="mb-7 -mt-2 w-full flex lg:flex-row flex-col-reverse justify-end lg:items-center">
      <p className="text-sm text-muted-foreground flex gap-1 items-center text-nowrap">
        Last updated:{' '}
        <span className="text-foreground font-medium px-1.5 py-[3px] bg-accent text-[13px] rounded-sm">
          {lastUpdate?.toLocaleDateString()}
        </span>
      </p>
    </div>
  );
};
