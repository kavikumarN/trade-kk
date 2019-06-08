import React from "react";
import "./Wallet.css"; 

class Wallet extends React.Component {
	render() {
		return(
			<div id="walletMain" className = "walletMain" >
				<div>
					<label>Account</label>
              		<p id="account">123455</p>
				</div>
				<div>
					<label>Balance</label>
              		<p id="balance">4,99,976</p>
				</div>
				<div>
					<label>Equity</label>
              		<p id="equity">4,99,976</p>
				</div>
				<div>
					<label>Day P/L</label>
              		<p id="daypl">0.00</p>
				</div>
				<div>
					<label>Gross P/L</label>
              		<p id="grosspl">0.00</p>
				</div>
				<div>
					<label>Used Margin</label>
              		<p id="usedMargin">0.00</p>
				</div>
				<div>
					<label>Usable Margin</label>
              		<p id="usableMargin">4,99,976</p>
				</div>
				<div>
					<label>Margin Call</label>
              		<p id="marginCall">N</p>
				</div>
			</div>
		);
	}
}

export default Wallet;