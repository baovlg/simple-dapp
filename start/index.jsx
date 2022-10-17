const { useState, useEffect, useMemo } = React;

const App = () => {
    const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
    const isMetamaskConnected = () => {
        // @ts-ignore
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
    }

    useEffect(() => {
        if (isMetamaskConnected()) {
            setIsMetamaskInstalled(true);
        }
    }, []);

    const txtAction = useMemo(() => {
        if (isMetamaskInstalled) {
            return 'Connect';
        }
        return 'Click here to install MetaMask!';
    }, [isMetamaskInstalled]);

    return (
        <main className="container-fluid">
            <header>
                <h1 className="text-center">E2E Test Dapp</h1>
                <img id="mm-logo" src="metamask-fox.svg"></img>
            </header>
            {/* Part 1 Setting up Basic Actions and Status*/}
            <section>
                <h3 className="card-title">Status</h3>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                        <p className="info-text alert alert-primary">Network: <span id="network" /></p>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                        <p className="info-text alert alert-secondary">ChainId: <span id="chainId" /></p>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                        <p className="info-text alert alert-success">Accounts: <span id="accounts" /></p>
                    </div>
                </div>
            </section>
            <section>
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Basic Actions</h4>
                                <button className="btn btn-primary btn-lg btn-block mb-3" disabled >{txtAction}</button>
                                <button className="btn btn-primary btn-lg btn-block mb-3" id="getAccounts">eth_accounts</button>
                                <p className="info-text alert alert-secondary">eth_accounts result: <span id="getAccountsResult" /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Part 1 */}
            <section>
                {/* Part 2 Contract*/}
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-stretch">
                        <div className="card full-width">
                            <div className="card-body">
                                <h4 className="card-title">Contract</h4>
                                <button className="btn btn-primary btn-lg btn-block mb-3" id="deployButton" disabled>Deploy Contract</button>
                                <button className="btn btn-primary btn-lg btn-block mb-3" id="depositButton" disabled>Deposit</button>
                                <button className="btn btn-primary btn-lg btn-block mb-3" id="withdrawButton" disabled>Withdraw</button>
                                <p className="info-text alert alert-secondary">Contract Status: <span id="contractStatus">Not clicked</span></p>
                            </div>
                        </div>
                    </div>
                    {/* /Part 2 */}
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-stretch">
                        <div className="card full-width">
                            <div className="card-body">
                                <h4 className="card-title">Send Eth</h4>
                                <button className="btn btn-primary btn-lg btn-block mb-3" id="sendButton" disabled>Send</button>
                                <p className="info-text alert alert-info">Contract Status: <span id="contractStatus">Not clicked</span></p>
                                <hr />
                                <h4>Sign Typed Data</h4>
                                <button className="btn btn-primary btn-lg btn-block mb-3" id="signTypedData" disabled>Sign</button>
                                <p className="info-text alert alert-warning">Sign Typed Data Result: <span id="signTypedDataResult" /></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-stretch">
                        <div className="card full-width">
                            <div className="card-body">
                                <h4 className="card-title">Send Tokens</h4>
                                <p className="info-text alert alert-success">Token: <span id="tokenAddress" /></p>
                                <button className="btn btn-primary btn-lg btn-block mb-3" id="createToken" disabled>Create Token</button>
                                <button className="btn btn-primary btn-lg btn-block mb-3" id="transferTokens" disabled>Transfer Tokens</button>
                                <button className="btn btn-primary btn-lg btn-block mb-3" id="approveTokens" disabled>Approve Tokens</button>
                                <button className="btn btn-primary btn-lg btn-block mb-3" id="transferTokensWithoutGas" disabled>Transfer Tokens
                                    Without Gas</button>
                                <button className="btn btn-primary btn-lg btn-block mb-3" id="approveTokensWithoutGas" disabled>Approve Tokens
                                    Without Gas</button>
                                <p className="info-text alert alert-info">Contract Status: <span id="contractStatus">Not clicked</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
