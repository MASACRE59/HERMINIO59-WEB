import NetworkDonationPage from "@/components/NetworkDonationPage";
const WALLET = "0xC83358e435119c4B5A85e060AfAFb29768Cfe955";
export default function Soneium() {
  return <NetworkDonationPage config={{
    name: "Soneium",
    badgeLabel: "S",
    badgeColor: "#9CA3AF",
    explorerUrl: `https://soneium.blockscout.com/address/${WALLET}`,
    explorerLabel: "Ver en Soneium Explorer",
    warningText: "Envía solo tokens compatibles con la red Soneium.",
  }} />;
}
