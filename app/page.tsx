import { networkSummary } from "../lib/stellar";
export default function Home(){return <main><p className="tag">STELLAR / SOROBAN</p><h1>RiskBeacon</h1><p>Asset and protocol risk attestations with evidence trails.</p><section className="card"><h2>Network</h2><p>{networkSummary()}</p></section></main>}
