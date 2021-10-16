export enum ChainId{
    AVALANCHE = 43114,
    FUJI = 43113
}

export const PROVIDER: { [chainId in ChainId]: string } = {
    [ChainId.AVALANCHE]: 'https://api.avax.network/ext/bc/C/rpc',
    [ChainId.FUJI]: 'https://api.avax-test.network/ext/bc/C/rpc'
  }