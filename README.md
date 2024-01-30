# Privy x Shield3

## Live Demo

https://xxxxx

## Intro

This is a template for integrating [**Privy**](https://www.privy.io/) and [**Shield3**](https://www.shield3.com/) into a [NextJS](https://nextjs.org/) project. 

This example will prompt you to send 1 ETH to a mock OFAC Sanctioned Address on Goerli. This address is 0x01e2919679362dfbc9ee1644ba9c6da6d624dead, it is not actually sanctioned but is used in Shield3 to test sending to sanctioned addresses without running the risk of sending to a legitimately sanctioned address.

You can test this by logging into the app and attempting to transfer goerli ETH. You'll be able to test both native value limit policies, and OFAC Sanction blocking. You will need some testnet ETH in your privy wallet to test this out.

## Setup

1. Fork this repository, clone it, and open it in your terminal.
```sh
git clone https://github.com/<your-github-handle>/
```

2. Install the necessary dependencies (including [the Privy SDK](https://www.npmjs.com/package/@privy-io/react-auth) and [Shield3's SDKs](https://www.npmjs.com/package/@0xshield3/privy)) with `npm`.
```sh
npm i
```

3. Initialize your environment variables by creating your .env file and populating the data.
```sh 
touch .env
```

The .env file should contain the following.
```sh
NEXT_PUBLIC_SHIELD3_API_KEY=<YOUR-SHIELD3-API-KEY>
NEXT_PUBLIC_PRIVY_APP_ID=<YOUR-PRIVY-APP-ID>
```
- your **Privy App ID** from the [Privy console](https://console.privy.io)
- your **Shield3** API key from [the Shield3 app](https://app.shield3.com/dashboard/command-center/rpc)


## Building locally

In your project directory, run `npm run dev`. You can now visit http://localhost:3000 to see your app and login with Privy!

