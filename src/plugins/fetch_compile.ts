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
}