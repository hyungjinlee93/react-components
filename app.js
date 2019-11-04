// TODO

// let GroceryList = () => (
//     <ul>
//         <Cucumbers />
//         <Kale />
//     </ul>
// );

// let Cucumbers = () => (
//     <li>Cucumbers</li>
// );
// let Kale = () => (
//     <li>Kale</li>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    let style = {
      'font-weight': this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onListItemClick.bind(this)} onMouseOut={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

let GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

let App = () => (
  <div>
    <h1>My Grocery List</h1>
    <GroceryList items={['Cucumber', 'Kale', 'Brussel Sprouts']} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
