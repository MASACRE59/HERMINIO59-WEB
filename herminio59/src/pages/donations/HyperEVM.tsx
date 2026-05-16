import NetworkDonationPage from "@/components/NetworkDonationPage";
const WALLET = "0xC83358e435119c4B5A85e060AfAFb29768Cfe955";
export default function HyperEVM() {
  return <NetworkDonationPage config={{
    name: "HyperEVM",
    badgeLabel: "H",
    badgeColor: "#00C4B4",
    explorerUrl: `https://purrsec.com/address/${WALLET}`,
    explorerLabel: "Ver en HyperEVMScan",
    warningText: "Envía solo tokens compatibles con la red HyperEVM.",
  }} />;
}
