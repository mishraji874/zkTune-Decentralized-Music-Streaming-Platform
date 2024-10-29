import { ChakraProvider } from '@chakra-ui/react'
import { EthereumProvider } from '../components/Context'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'zkTune: Decentralized Music Streaming Platform',
  description: 'The best Decentralized music streaming platform',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <EthereumProvider>
            {children}
          </EthereumProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}