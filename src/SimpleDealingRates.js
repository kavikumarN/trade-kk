import React from "react";
import "./SimpleDealingRates.css";
import io from "socket.io-client";
import "./ContextMenu.css";

var socket;

class SimpleDealingRates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //value : '12345',
      visible: false,
      stacks: [
        {
          symbol: "XAU/USD",
          sell: "123456",
          buy: "654321",
          spread: "",
          change: "",
          high: "",
          low: "",
          rolls: "",
          rollb: "",
          divs: "",
          divb: "",
          pipcost: "",
          mmr: "",
          time: ""
        }
      ]
    };
    this.orderMenu = this.orderMenu.bind(this);
    this.orderAdvanced = this.orderAdvanced.bind(this);
    this.ContextMenuHandle = this.ContextMenuHandle.bind(this);
  }

  componentDidMount() {
    console.log("Component has mounted ");

    document.addEventListener("click", this._handleClick);
    document.addEventListener("scroll", this._handleScroll);

    var that = this;
    var symbols = ["EUR/USD", "XAU/USD"];

    socket = io.connect("http://192.168.1.101:5000");

    socket.emit("join", symbols);

    socket.on("stack", function(datas) {
      console.log(datas);

      var lenth = that.state.stacks.length;
      var flag = 0;
      var stacks = that.state.stacks;
      stacks.map((stack, i) => {
        if (stack.symbol === datas.symbol) {
          stack.buy = datas.buy;
          stack.sell = datas.sell;
          flag = 1;
        }
        if (stack.symbol !== datas.symbol && lenth - 1 == i && flag != 1) {
          stacks.push(datas);
        }
      });
      that.setState({
        stacks: stacks
      });
    });
  }

  componentWillUnmount() {
    document.removeEventListener("contextmenu", this.ContextMenuHandle);
    document.removeEventListener("click", this._handleClick);
    document.removeEventListener("scroll", this._handleScroll);
  }

  ContextMenuHandle(event) {
    event.preventDefault();

    this.setState({ visible: true });

    const clickX = event.clientX;
    const clickY = event.clientY;
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const rootW = this.root.offsetWidth;
    const rootH = this.root.offsetHeight;

    const right = screenW - clickX > rootW;
    const left = !right;
    const top = screenH - clickY > rootH;
    const bottom = !top;

    if (right) {
      this.root.style.left = `${clickX + 5}px`;
    }

    if (left) {
      this.root.style.left = `${clickX - rootW - 5}px`;
    }

    if (top) {
      this.root.style.top = `${clickY + 5}px`;
    }

    if (bottom) {
      this.root.style.top = `${clickY - rootH - 5}px`;
    }
    this.root.style.display = "block";
  }

  _handleClick = event => {
    const { visible } = this.state;
    const wasOutside = !(event.target.contains === this.root);

    if (wasOutside && visible) {
      this.setState({ visible: false });
      this.root.style.display = "none";
    }
  };

  _handleScroll = () => {
    const { visible } = this.state;

    if (visible) {
      this.root.style.display = "none";
      this.setState({ visible: false });
    }
  };

  orderMenu(event) {
    //console.log('Clicked '+ event.button);
    console.log(event.target.id);
    let smbl = event.target.id.split(" ");

    if (smbl[1] === "buy") {
      document.getElementById("buyRadio").checked = "true";
      //document.getElementById("orderMenu--symbol").option = smbl[0];
      this.orderMain.style.display = "block";
      //this.orderMain.style.height = "330px";
      this.order.style.display = "block";
      this.orderMenuAdvanced.style.display = "none";
    } else {
      document.getElementById("sellRadio").checked = "true";
      this.orderMain.style.display = "block";
      this.order.style.display = "block";
      this.orderMenuAdvanced.style.display = "none";
    }
  }
  orderAdvanced(event) {
    //console.log('Clicked '+ event.button);
    console.log(event.target.id);

    //this.orderMain.style.display = "block";
    //this.orderMain.style.height = "615px";
    //this.order.style.display = "block";
    this.orderMenuAdvanced.style.display = "block";
  }
  closeNav() {
    this.orderMain.style.display = "none";
  }

  render() {
    return (
      <div className="SDRmain" id="SDRmain">
        <div
          ref={ref => {
            this.orderMain = ref;
          }}
          className="orderMenuMain"
        >
          <div
            ref={ref => {
              this.order = ref;
            }}
            className="orderMenu"
          >
            <div className="logo">&#9734;</div>
            <div className="orderMenu--title">
              <p>Create Market Order</p>
              <span className="closebtn" onClick={this.closeNav.bind(this)}>
                &times;
              </span>
            </div>
            <div className="orderMenu--separator" />
            <div className="orderMenu--account">
              <label>Account</label>
              <select id="orderMenu--account">
                {this.state.stacks.map(data => (
                  <option>{data.symbol}</option>
                ))}
              </select>
              <button>OK</button>
            </div>
            <div className="orderMenu--symbol">
              <label>Symbol</label>
              <select id="orderMenu--symbol">
                {this.state.stacks.map(data => (
                  <option>{data.symbol}</option>
                ))}
              </select>
              <button onClick={this.closeNav.bind(this)}>Cancel</button>
            </div>
            <div className="orderMenu--sellbuy">
              <span>
                <label>Sell/Buy</label>
              </span>
              <label class="container">
                Sell
                <input type="radio" name="radio" value="sell" id="sellRadio" />
                <span class="checkmark" />
              </label>
              <label class="container">
                Buy
                <input type="radio" name="radio" value="buy" id="buyRadio" />
                <span class="checkmark" />
              </label>

              <button
                onClick={this.orderAdvanced.bind(this)}
                id="orderAdvancedbtn"
              >
                Advanced >>>{" "}
              </button>
            </div>
            <div className="orderMenu--amount">
              <label>Amount (K)</label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <div className="orderMenu--pipcost">
              <span id="perpip">
                <label>Per Pip: </label>0.10
              </span>
              <span id="usdMr">
                <label>Usd Mr: </label>3.25
              </span>
            </div>
            <div className="orderMenu--rates">
              <label>Rates</label>
              <input type="number" name="rates" id="rates" disabled>
                {this.state.value}
              </input>
            </div>
            <div className="orderMenu--ordertype">
              <label>Order Type</label>
              <select>
                <option value="At Market">At Market</option>
                <option value="Market Range">Market Range</option>
              </select>
              <input type="number" name="marketRange" id="Market Range" />
            </div>
          </div>
          <div
            ref={ref => {
              this.orderMenuAdvanced = ref;
            }}
            className="orderMenuAdavanced"
          >
            <div className="orderMenu--timeinforce">
              <label>Time In Force</label>
              <select>
                <option value="GTC">GTC</option>
                <option value="IOC">IOC</option>
                <option value="FOK">FOK</option>
              </select>
            </div>
            <div className="orderMenuStop">
              <label class="container1">
                Stop
                <input type="checkbox" />
                <span class="checkmark1" />
              </label>
            </div>
            <div className="orderMenu--separator1" />
            <div className="orderMenuRate">
              <label>Rate </label>
              <input type="number" name="rate" id="rate" value="1.11734" />
              <span> >1.11712</span>
              <input
                type="number"
                name="rateRange"
                id="rateRange"
                value="0.1"
              />
            </div>
            <div className="orderMenuTrailing">
              <label>Trailing </label>
              <select>
                <option value="none">None</option>
                <option value="dynamic">Dynamic</option>
                <option value="fixed">Fixed</option>
              </select>
              <input
                type="number"
                name="trailingRange"
                id="trailingRange"
                value="0"
              />
            </div>
            <div className="orderMenuLimit">
              <label class="container1">
                Limit
                <input type="checkbox" />
                <span class="checkmark1" />
              </label>
            </div>
            <div className="orderMenu--separator2" />
            <div className="orderMenuLimitRate">
              <label>Rate </label>
              <input
                type="number"
                name="limitRate"
                id="limitRate"
                value="1.11734"
              />
              <span> {"<" + 1.11712} </span>
              <input
                type="number"
                name="limitRateRange"
                id="limitRateRange"
                value="0.1"
              />
            </div>
            <div className="orderMenuProfitLoss">
              <label>Profit/Loss</label>
            </div>
            <div className="orderMenu--separator3" />
            <div className="orderMenuStopLoss">
              <label>Stop Loss</label>
              <span>-0.30</span>
              <span>@1.26573</span>
            </div>
            <div className="orderMenu--separator4" />
            <div className="orderMenuInPips">
              <label class="container1">
                In Pips
                <input type="checkbox" />
                <span class="checkmark1" />
              </label>
            </div>
          </div>
        </div>
        <div
          ref={ref => {
            this.root = ref;
          }}
          className="contextMenu"
        >
          <div className="contextMenu--option">Create Entry Order...</div>
          <div className="contextMenu--option">Create Market Order...</div>
          <div className="contextMenu--option">Create Contingent Order...</div>
          <div className="contextMenu--separator" />
          <div className="contextMenu--option__disabled" />
          <div className="contextMenu--option">Move Up</div>
          <div className="contextMenu--option">Move Down</div>
          <div className="contextMenu--option">Reset to Deafault Order</div>
          <div className="contextMenu--separator" />
          <div className="contextMenu--option">Open Chart Widget</div>
          <div className="contextMenu--option">Open Price Panel</div>
        </div>
        <div className="SimpleDealingRates" id="SimpleDealingRates">
          <div className="logo">&#9734;</div>
          <div className="SimpleDealingRatesHeading">
            <p>Simple Dealing Rates</p>
          </div>
          <div className="SDRTable" id="SDRTable">
            <table className="SDRTable" rules="rows">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Sell</th>
                  <th>Buy</th>
                  <th>Spread</th>
                  <th>Change</th>
                  <th>High</th>
                  <th>Low</th>
                  <th>RollS</th>
                  <th>RollB</th>
                  <th>DivS</th>
                  <th>DivB</th>
                  <th>Pip Cost</th>
                  <th>MMR</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody onContextMenu={this.ContextMenuHandle.bind(this)}>
                {this.state.stacks.map((stack, i) => (
                  <tr id="row">
                    <td>{stack.symbol}</td>
                    <td onClick={this.orderMenu.bind(this)}>
                      <div className="sell">
                        <div className="logo1">
                          <span>&#9650;</span>
                        </div>
                        <span id={stack.symbol + " sell"}>{stack.sell}</span>
                      </div>
                    </td>
                    <td onClick={this.orderMenu.bind(this)}>
                      <div className="sell">
                        <div className="logo1">
                          <span>&#9660;</span>
                        </div>
                        <span id={stack.symbol + " buy"}>{stack.buy}</span>
                      </div>
                    </td>
                    <td>{stack.spread}</td>
                    <td>{stack.change}</td>
                    <td>{stack.high}</td>
                    <td>{stack.low}</td>
                    <td>{stack.rolls}</td>
                    <td>{stack.rollb}</td>
                    <td>{stack.divs}</td>
                    <td>{stack.divb}</td>
                    <td>{stack.pipcost}</td>
                    <td>{stack.mmr}</td>
                    <td>{stack.mmr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleDealingRates;
