import { createWeb3Modal, defaultConfig } from 'https://esm.sh/@web3modal/ethers@4.0.0'

const projectId = '54fe9dac19f995601dd79e204769a53d'

const metadata = {
  name: 'NNM',
  description: 'NFT Name Market',
  url: window.location.origin,
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const polygon = {
  chainId: 137,
  name: 'Polygon',
  currency: 'MATIC',
  explorerUrl: 'https://polygonscan.com',
  rpcUrl: 'https://polygon-rpc.com'
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [polygon],
  projectId,
  enableAnalytics: true,
  themeMode: 'dark',
  themeVariables: { 
    '--w3m-accent': '#FCD535', 
    '--w3m-border-radius-master': '4px',
    '--w3m-font-family': 'IBM Plex Sans, sans-serif'
  }
})