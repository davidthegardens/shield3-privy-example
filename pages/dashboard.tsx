import { usePrivy } from '@privy-io/react-auth';

export default function SendTransactionButton() {
  const { user, sendTransaction } = usePrivy();

  // Replace this with the UnsignedTransactionRequest you'd like your user to send
  const unsignedTx = {
    to: '0x01e2919679362DFbC9EE1644BA9C6DA6D624DEad',
    chainId: 5,
    value: '0xF43FC2C04EE0000',
  };

  // Replace this with the text you'd like on your transaction modal
  const uiConfig = {
    header: 'Send ETH (goerli)',
    description: 'Will Shield3 block your transaction?',
    buttonText: 'Submit'
  };

  // Users must have an embedded wallet at `user.wallet` to send a transaction.
  return (
    <>
    <head>
      <title>Privy x Shield3 Demo</title>
    </head>

    <main className="flex flex-col min-h-screen px-4 sm:px-20 py-6 sm:py-10 bg-privy-light-blue">
    <>
    <div className="flex flex-row justify-between">
    <h1 className="text-2xl font-semibold">Privy x Shield3 Demo</h1>
    <button className="text-sm bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 py-2 px-4 rounded-md text-white" disabled={!user?.wallet} onClick={async () => {await sendTransaction(unsignedTx, uiConfig);
        // `txReceipt` is an object of type `TransactionReceipt`. From this object, you can
        // access your transaction's `transactionHash`, `blockNumber`, `gasUsed`, and
        // more.
    }}>
        Send 1.1 ETH
    </button>
    </div></>
    </main>
    </>
)}