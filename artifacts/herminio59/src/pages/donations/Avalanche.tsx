import NetworkDonationPage from "@/components/NetworkDonationPage";
const WALLET = "0xC83358e435119c4B5A85e060AfAFb29768Cfe955";
export default function Avalanche() {
  return <NetworkDonationPage config={{
    name: "Avalanche",
    badgeLabel: "A",
    badgeColor: "#E84142",
    explorerUrl: `https://snowtrace.io/address/${WALLET}`,
    explorerLabel: "Ver en Snowtrace",
    warningText: "Envía solo tokens compatibles con la red Avalanche C-Chain.",
  }} />;
}
