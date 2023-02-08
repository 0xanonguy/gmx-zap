import { BigNumberish } from "ethers";

export const AVALANCHE = 43114;
export const ARBITRUM = 42161;

export const GAS_PRICE_ADJUSTMENT_MAP: {
	[x: number]: BigNumberish;
} = {
	[ARBITRUM]: "0",
	[AVALANCHE]: "3000000000", // 3 gwei
};

export const MAX_GAS_PRICE_MAP: {
	[x: number]: BigNumberish;
} = {
	[AVALANCHE]: "200000000000", // 200 gwei
};
