'use client'

import { useEffect } from 'react'

export function SentryProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Import Sentry client config on mount
    import('../../sentry.client.config')
  }, [])

  return <>{children}</>
}
