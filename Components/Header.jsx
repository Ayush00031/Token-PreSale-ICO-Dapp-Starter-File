import React, { useEffect, useState } from "react";

const Header = ({
  account,
  setAccount,
  setLoader,
  setOwnerModel,
  shortenAddress,
  detail,
  currency,
  ownerModel,
}) => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setIsMetaMaskInstalled(true);
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    return () => {
      if (typeof window.ethereum !== "undefined") {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      }
    };
  }, []);

  const handleAccountsChanged = (accounts) => {
    setAccount(accounts[0]);
  };

  const connectMetaMask = async () => {
    setLoader(true); // Show loading indicator
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.log("Connection error:", error);
        alert("Failed to connect wallet.");
      } finally {
        setLoader(false); // Hide loading indicator
      }
    } else {
      alert("MetaMask is not installed. Please install it to connect.");
      setLoader(false); // Hide loading indicator
    }
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(detail?.address);
      alert("Address copied to clipboard!");
    } catch (error) {
      console.log("Failed to copy address:", error);
    }
  };

  return (
    <header className="site-header header--transparent ico-header">
      <div className="header__main-wrap">
        <div className="container mxw-1640">
          <div className="header__main ul_li_between">
            <div className="header__left ul_li">
              <div className="header__logo">
                <a href="/">
                  <img src="assets/img/logo/logo.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li className="active has-mega-menu">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a className="scrollspy-btn" href="#about">
                      About
                    </a>
                  </li>
                  {/* <li>
                    <a className="scrollspy-btn" href="#roadmap">
                      RoadMap
                    </a>
                  </li> */}
                  <li>
                    <a className="scrollspy-btn" href="#team">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="scrollspy-btn" href="#faq">
                      Faq
                    </a>
                  </li>
                  <li>
                    <a className="scrollspy-btn" href="#contact">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className="scrollspy-btn"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        ownerModel ? setOwnerModel(false) : setOwnerModel(true)
                      }
                    >
                      Tools
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header__action ul_li">
              <div className="d-xl-none">
                <a className="header__bar hamburger_menu">
                  <div className="header__bar-icon">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </a>
              </div>
              {account ? (
                <div className="header__account">
                  <a onClick={handleCopyAddress}>
                    {shortenAddress(detail?.address)}:
                    {detail?.maticBal
                      ? detail?.maticBal.slice(0, 6)
                      : "Loading..."}{" "}
                    {/* Fallback */}
                    {currency}
                  </a>
                </div>
              ) : (
                <div className="header__account">
                  <a onClick={connectMetaMask}>Connect Wallet</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
