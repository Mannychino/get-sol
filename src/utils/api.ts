export async function createUser({ email, password }: any): Promise<{ userId: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId: 'user-' + Math.random().toString(36).substring(2, 15) });
    }, 500);
  });
}

export async function initiateSwap({ userId, amountNGN, bank, walletAddress }: any): Promise<{ referenceId: string, virtualAccount: string, bankName: string, accountName: string, amountNGN: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        referenceId: 'ref-' + Math.random().toString(36).substring(2, 15),
        virtualAccount: '1234567890',
        bankName: 'Wema Bank',
        accountName: 'GetSol User',
        amountNGN: amountNGN,
      });
    }, 1000);
  });
}

export async function confirmPayment({ reference }: { reference: string }): Promise<{ status: string, amountNGN: number, solAmount: number, txSignature: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const status = Math.random() > 0.5 ? 'confirmed' : 'pending';
      resolve({
        status: status,
        amountNGN: 5000,
        solAmount: 0.02,
        txSignature: 'tx-' + Math.random().toString(36).substring(2, 15),
      });
    }, 3000);
  });
}

export async function fetchReceipt({ transactionId }: { transactionId: string }): Promise<{ transactionId: string, amountNGN: number, solAmount: number, timestamp: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        transactionId: transactionId,
        amountNGN: 5000,
        solAmount: 0.02,
        timestamp: new Date().toISOString(),
      });
    }, 1500);
  });
}
