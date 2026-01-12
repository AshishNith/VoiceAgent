import { headers } from 'next/headers';
import EmbedAgentClient from '@/components/embed-iframe/agent-client';
import { ApplyThemeScript } from '@/components/embed-iframe/theme-provider';
import { getAppConfig, getOrigin } from '@/lib/env';

export default async function Embed() {
  const hdrs = await headers();
  const origin = getOrigin(hdrs);
  const appConfig = await getAppConfig(origin);

  return (
    <div className="h-full w-full p-0">
      <ApplyThemeScript />
      <EmbedAgentClient appConfig={appConfig} />
    </div>
  );
}
