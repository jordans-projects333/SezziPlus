import { ClientSessionProvider } from './Components/ClientSessionProvider'
import type { Metadata } from "next";
import AccountModel from './Components/Account/AccountModel'
import Header from './Components/Header/Header'
import './globals.css'
import '../public/manifest.json'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import Alert from './Components/Alert/Alert'
import ExitPageTransitions from '@/utils/Components/ExitPageTransition';
import ReactQueryProviders from '@/utils/ReactQuery/ReactQueryProviders'

const APP_NAME = "SezziPlus";
const APP_DESCRIPTION = "Partnership utilities";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: "%s - PWA App",
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default async function RootLayout({ children }: {children: React.ReactNode}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body>
        <ReactQueryProviders>
          <ClientSessionProvider>
            <Header/>
            <ExitPageTransitions>
            {children}
            </ExitPageTransitions>
            {!session && <AccountModel/>}
            <Alert/>
          </ClientSessionProvider>
        </ReactQueryProviders>
      </body>
    </html>
  )
}
