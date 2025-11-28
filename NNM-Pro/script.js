/* ------------------------------------------------------
   1) Web3 Modal
------------------------------------------------------ */
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



/* ------------------------------------------------------
   2) News Ticker
------------------------------------------------------ */

const newsData = [
  "🔥 NNM Global Digital Name Market Launch!",
  "🚀 Web3 Wallets Fully Supported — Connect Now!",
  "💎 Reserve Your Digital Last Name Before Someone Else!",
  "⚡ Live Registrations: 240+ Verified Name Owners",
  "📢 Trending Feature: Explore Top Digital Family Names"
];

function createTicker() {
  const ticker = document.querySelector('.news-ticker');
  if (!ticker) return;

  let content = "";

  newsData.forEach(item => {
    content += `<div class="ticker-item">${item}</div>`;
  });

  ticker.innerHTML = `
    <div class="ticker-move">
      ${content}
      ${content}
    </div>
  `;
}

createTicker();



/* ------------------------------------------------------
   3) Search Function
------------------------------------------------------ */
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
      const value = this.value.trim();
      if (value.length > 0) {
        window.location.href = `explore.html?search=${encodeURIComponent(value)}`;
      }
    }
  });
}



/* ------------------------------------------------------
   4) Mobile Navbar Collapse
------------------------------------------------------ */
const toggler = document.querySelector(".navbar-toggler");
const menu = document.querySelector(".navbar-collapse");

if (toggler && menu) {
  toggler.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}



/* ------------------------------------------------------
   5) Header Auto-hide on Scroll
------------------------------------------------------ */
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const current = window.scrollY;

  if (current > lastScroll && current > 80) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }

  lastScroll = current;
});