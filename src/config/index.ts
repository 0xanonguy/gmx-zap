import { BigNumber, ethers } from "ethers";
import glpManagerAbi from "./abis/GlpManager.json";
import glpTokenAbi from "./abis/GlpToken.json";
import feeGlpTrackerAbi from "./abis/FeeGlpTracker.json";
import readerAbi from "./abis/Reader.json";
import rewardReaderAbi from "./abis/RewardReader.json";
import { ARBITRUM, AVALANCHE } from "./contracts";
import { NativeTokenDetail } from "../types";

export const supportedInputChains = [
	1, 10, 56, 100, 137, 250, 42161, 43114, 1313161554,
];

export const supportedOutputChains = [ARBITRUM, AVALANCHE];

export const glpSupportedTokens: {
	[x: number]: string[];
} = {
	42161: ["ETH", "WBTC", "LINK", "UNI", "USDC", "USDT", "DAI", "FRAX"],
	43114: ["WETH.E", "AVAX", "WBTC.E", "BTC.B", "USDC", "USDC.E"],
};

export const GLP_DECIMALS = 18;
export const USD_DECIMALS = 30;

export const BASIS_POINTS_DIVISOR = 10000;
export const SECONDS_PER_YEAR = 31536000;

export const ZERO_BIG_NUMBER = BigNumber.from(0);

export const PLACEHOLDER_ACCOUNT = ethers.Wallet.createRandom().address;

export const NATIVE_TOKEN: {
	[x: number]: NativeTokenDetail;
} = {
	[ARBITRUM]: {
		name: "ETH (WETH)",
		price: ZERO_BIG_NUMBER,
		address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
	},
	[AVALANCHE]: {
		name: "AVAX (WAVAX)",
		price: ZERO_BIG_NUMBER,
		address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
	},
};

export const abis = {
	glpManagerAbi,
	glpTokenAbi,
	feeGlpTrackerAbi,
	readerAbi,
	rewardReaderAbi,
};

export * from "./contracts";
export * from "./rpc";
