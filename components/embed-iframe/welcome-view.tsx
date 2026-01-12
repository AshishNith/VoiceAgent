import { Button } from '@/components/ui/button';

type WelcomeViewProps = {
  disabled: boolean;
  onStartCall: () => void;
};

export const WelcomeView = ({
  disabled,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div ref={ref} inert={disabled} className="absolute inset-0">
      <div className="flex h-full items-center gap-4 px-6">
        <Button variant="primary" size="lg" onClick={onStartCall} className="flex-1 font-mono">
          Chat with Agent
        </Button>
      </div>
    </div>
  );
};
