import { useMemo } from 'react'

import createCustomTheme from './createCustomTheme'

const useTheme = (themePreference: 'dark' | 'light') =>
  useMemo(() => createCustomTheme(themePreference), [themePreference])

export default useTheme
