import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "600": "#47585B",
      "300": "#999999",
      "100": "#DADADA",
      "50": "#F5F8FA",
    },
    orange: {
      "600": "#FFBA08"
    }
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600',
      },
      a: {
        cursor: 'pointer'
      }
    }
  }
})