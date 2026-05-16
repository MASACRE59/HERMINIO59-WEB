import NetworkDonationPage from "@/components/NetworkDonationPage";
const WALLET = "0xC83358e435119c4B5A85e060AfAFb29768Cfe955";
export default function Monad() {
  return <NetworkDonationPage config={{
    name: "Monad",
    badgeLabel: "◈",
    badgeColor: "#836EF9",
    explorerUrl: `https://monadexplorer.com/address/${WALLET}`,
    explorerLabel: "Ver en MonadScan",
    warningText: "Envía solo tokens compatibles con la red Monad.",
  }} />;
}
