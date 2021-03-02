import { CommandPlugin } from "@remixproject/engine-vscode";
import { window, OutputChannel, workspace } from "vscode";

const profile = {
  name: 'fetchAndCompile',
  methods: ['resolve'],
  version: '0.0.1'
}

export default class FetchAndCompile extends CommandPlugin {
	private unresolvedAddresses: Array<string>;
	private sourceVerifierNetWork: Array<string>;
	private outputChannel: OutputChannel;
	constructor() {
    super(profile);
    this.outputChannel = window.createOutputChannel("Remix IDE");
		this.unresolvedAddresses = [];
    this.sourceVerifierNetWork = ['Main', 'Rinkeby', 'Ropsten', 'Goerli'];
  }
  /**
   * Fetch compiliation metadata from source-Verify from a given @arg contractAddress - https://github.com/ethereum/source-verify
   * Put the artifacts in the file explorer
   * Compile the code using Solidity compiler
   * Returns compilation data
   *
   * @param {string} contractAddress - Address of the contrac to resolve
   * @param {string} deployedBytecode - deployedBytecode of the contract
   * @param {string} targetPath - Folder where to save the compilation arfefacts
   * @return {CompilerAbstract} - compilation data targeting the given @arg contractAddress
   */
  async resolve (contractAddress, codeAtAddress, targetPath) {
    console.log('should resolve');
  }
}