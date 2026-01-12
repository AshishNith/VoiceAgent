import { EmbedErrorDetails } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ErrorMessageProps {
  error: EmbedErrorDetails | null;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div
      inert={error === null}
      className={cn(
        'absolute inset-0 z-50 flex h-full w-full flex-col items-center justify-center gap-5 transition-opacity',
        error === null ? 'opacity-0' : 'opacity-100'
      )}
    >
      <div className="pl-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            process.env.NEXT_PUBLIC_WIDGET_URL
              ? `${process.env.NEXT_PUBLIC_WIDGET_URL}/Agenix_logo.png`
              : '/Agenix_logo.png'
          }
          alt="Agenix AI Logo"
          className="block h-6 w-auto"
        />
      </div>

      <div className="flex w-full flex-col justify-center gap-4 overflow-auto px-8 text-center">
        <span className="leading-tight font-medium text-pretty">{error?.title}</span>
        <span className="text-sm text-balance">{error?.description}</span>
      </div>
    </div>
  );
}
