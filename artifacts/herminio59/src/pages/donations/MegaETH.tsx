import NetworkDonationPage from "@/components/NetworkDonationPage";
const WALLET = "0xC83358e435119c4B5A85e060AfAFb29768Cfe955";
export default function MegaETH() {
  return <NetworkDonationPage config={{
    name: "MegaETH",
    badgeLabel: "M",
    badgeColor: "#6B7280",
    explorerUrl: `https://www.megaexplorer.xyz/address/${WALLET}`,
    explorerLabel: "Ver en MegaETH Explorer",
    warningText: "Envía solo tokens compatibles con la red MegaETH.",
  }} />;
}
