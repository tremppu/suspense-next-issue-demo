import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Text = dynamic(() => import('../src/text'), {
  suspense: true,
});

export function Index() {
  return (
    <div>
      <h1>With vanilla next</h1>
      <Suspense>
        <Text />
      </Suspense>
    </div>
  );
}

export default Index;
