import React, {Component} from "react";
import "./style.css";

export default class extends Component {
    state = {
        loveTypes: [],
        loveTypesLoading: true,
        selected: ''
    }
    componentDidMount() {
        fetch(
            'https://rgghff2gq5.execute-api.us-east-1.amazonaws.com/Dev/lovetypes/'
            )
            .then(res => res.json())
            .then(data => {
                this.setState({ loveTypes: data.Items });
                this.setState({ loveTypesLoading: false });
            })
            .catch(err => console.log(err)); 
    }

    render() {
        const selectComponent = this.props.multiple ? 
            (<select multiple={true} onChange={(e) => {const selectedOptions = Array.from(e.target.selectedOptions).map(opt => opt.value); this.props.onSelectLoveType(selectedOptions);}} value={this.props.selectedTypes}>{this.state.loveTypes.map((loveType) => (<option key={loveType.TypeName} value={loveType.TypeName}>{loveType.TypeName}</option>))}</select>)
        :
            (<select multiple={false} onChange={(e) => this.props.onSelectLoveType(e.target.value)} value={this.props.selectedTypes[0]}>{this.state.loveTypes.map((loveType) => (<option key={loveType.TypeName} value={loveType.TypeName}>{loveType.TypeName}</option>))}</select>);
        
            return (
            this.state.loveTypesLoading ? null : selectComponent
        )
    }
}