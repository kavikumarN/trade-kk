import React from "react";
import "./ContextMenu.css";


class ContextMenu extends React.Component {
    state = {
        visible: false,
    };
    
    componentDidMount() {
        document.addEventListener('contextmenu', this.ContextMenuHandle);
        document.addEventListener('click', this._handleClick);
        document.addEventListener('scroll', this._handleScroll);
    };

    componentWillUnmount() {
      document.removeEventListener('contextmenu', this.ContextMenuHandle);
      document.removeEventListener('click', this._handleClick);
      document.removeEventListener('scroll', this._handleScroll);
    }
    
     ContextMenuHandle = (event) => {
        event.preventDefault();
        
        this.setState({ visible: true });
        
        const clickX = event.clientX;
        const clickY = event.clientY;
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;
        const rootW = this.root.offsetWidth;
        const rootH = this.root.offsetHeight;
        
        
        const right = (screenW - clickX) > rootW;
        const left = !right;
        const top = (screenH - clickY) > rootH;
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
    };

    _handleClick = (event) => {
        const { visible } = this.state;
        const wasOutside = !(event.target.contains === this.root);
        
        if (wasOutside && visible) this.setState({ visible: false, });
    };

    _handleScroll = () => {
        const { visible } = this.state;
        
        if (visible) this.setState({ visible: false, });
    };
    
    render() {
        const { visible } = this.state;
        
        return(visible || null) && 
            <div ref={ref => {this.root = ref}} className="contextMenu">
                <div className="contextMenu--option">Create Entry Order...</div>
                <div className="contextMenu--option">Create Market Order...</div>
                <div className="contextMenu--option">Create Contingent Order...</div>
                <div className="contextMenu--separator" />
                <div className="contextMenu--option__disabled"></div>
                <div className="contextMenu--option">Move Up</div>
                <div className="contextMenu--option">Move Down</div>
                <div className="contextMenu--option">Reset to Deafault Order</div>
                <div className="contextMenu--separator" />
                <div className="contextMenu--option">Open Chart Widget</div>
                <div className="contextMenu--option">Open Price Panel</div>
            </div>
    };
}

export default ContextMenu;
