import NetworkDonationPage from "@/components/NetworkDonationPage";
const WALLET = "0xC83358e435119c4B5A85e060AfAFb29768Cfe955";
export default function Arbitrum() {
  return <NetworkDonationPage config={{
    name: "Arbitrum",
    badgeLabel: "A",
    badgeColor: "#28A0F0",
    explorerUrl: `https://arbiscan.io/address/${WALLET}`,
    explorerLabel: "Ver en ArbiScan",
    warningText: "Envía solo tokens compatibles con la red Arbitrum One.",
  }} />;
}
