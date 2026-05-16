import NetworkDonationPage from "@/components/NetworkDonationPage";
const WALLET = "0xC83358e435119c4B5A85e060AfAFb29768Cfe955";
export default function Base() {
  return <NetworkDonationPage config={{
    name: "Base",
    badgeLabel: "B",
    badgeColor: "#0052FF",
    explorerUrl: `https://basescan.org/address/${WALLET}`,
    explorerLabel: "Ver en BaseScan",
    warningText: "Envía solo tokens compatibles con la red Base.",
  }} />;
}
