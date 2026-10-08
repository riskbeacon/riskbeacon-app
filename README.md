# RiskBeacon — riskbeacon-app

> Asset and protocol risk attestations with evidence trails.

![RiskBeacon Web app](banner.png)

## About the project

RiskBeacon is an attestation system for crypto-asset and protocol risk, built on Stellar/Soroban. Analysts and auditors publish signed risk attestations about an asset or protocol, each linked to the evidence behind it, so a reader can see not just *what* rating was given but *why*, and who stood behind it. Like a beacon, the latest attestation is easy to find; unlike an opaque score, every claim keeps an auditable evidence trail.

**Who it is for:** Risk analysts and auditors (attesters), and treasuries, integrators and users who consume risk information.

**How the pieces fit together:**

| Repository | Responsibility |
|---|---|
| `riskbeacon-contracts` | On-chain Soroban state and authorization — the source of truth |
| `riskbeacon-backend` | Off-chain indexing, read models and operational APIs |
| `riskbeacon-app` | User-facing web application |

Typical flow:

1. An attester publishes a risk attestation for an asset or protocol on-chain (authorized by the attester's Stellar account).
2. The backend indexes attestations and their evidence references into a queryable read model.
3. A reader opens the web app, browses an asset's attestation history and follows the evidence trail.

## This repository: Web app

The **app** repository is the user-facing web application for RiskBeacon. It reads public chain state directly through Stellar RPC and sends writes through the wallet/signing layer, so users never hand their keys to the service. Indexing and persistence stay in the backend.

### What is included today

- A Next.js 15 (App Router) + React 19 + TypeScript application.
- A home page showing the RiskBeacon name, its tagline and a **Network** card.
- `lib/stellar.ts` with a `networkSummary()` helper that reports the configured Stellar network (currently Testnet) using `@stellar/stellar-sdk` 17.2.1.
- A dark theme (deep navy background with violet and cyan accents) shared across the RiskBeacon repositories.
- Configuration for the network, RPC endpoint, contract ID and backend URL via environment variables.

### Tech stack

Next.js 15.5 · React 19.1 · TypeScript 5.8 · `@stellar/stellar-sdk` 17.2.1

### Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values below
npm run dev                 # http://localhost:3000
npm run build               # production build
npm run lint
npm test
```

### Configuration

| Variable | Purpose | Default |
|---|---|---|
| `STELLAR_NETWORK` | Which Stellar network to target | `testnet` |
| `STELLAR_RPC_URL` | Soroban RPC endpoint used for reads | `https://soroban-testnet.stellar.org` |
| `CONTRACT_ID` | Deployed RiskBeacon contract to talk to | *(empty — set after deployment)* |
| `BACKEND_URL` | Base URL of the RiskBeacon backend API | `http://localhost:8787` |

## Roadmap

- Connect a wallet and sign transactions against the RiskBeacon contract.
- Replace the placeholder home page with the real RiskBeacon screens.
- Read live data from the backend API and the chain, with loading and error states.

## Maintainer

`@ollypee22`

## Status

**v0.1.0 development baseline — not audited and not production-ready.**

## Stellar alignment

The project uses Stellar/Soroban where on-chain state is the source of truth or where deterministic settlement is valuable. Off-chain services are kept out of consensus-critical logic.

## License

Apache-2.0
