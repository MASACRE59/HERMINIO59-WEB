import NetworkDonationPage from "@/components/NetworkDonationPage";
const WALLET = "0xC83358e435119c4B5A85e060AfAFb29768Cfe955";
export default function BNB() {
  return <NetworkDonationPage config={{
    name: "BNB Chain",
    badgeLabel: "B",
    badgeColor: "#F0B90B",
    explorerUrl: `https://bscscan.com/address/${WALLET}`,
    explorerLabel: "Ver en BscScan",
    warningText: "Envía solo tokens compatibles con la red BNB Chain (BEP-20).",
  }} />;
}
