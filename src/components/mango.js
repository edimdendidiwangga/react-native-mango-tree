import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppRegistry, TextInput, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { addGrow } from '../actions/Action';


class Mango extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : []
    }
  }

  onGrow(){
    this.props.addGrow()
  }

  isDead(){
    Actions.pageMangoDead({ status: true })
  }

  render() {
    if(this.props.mangoes.length == 0){
      return (<View><Text>Loading..</Text></View>)
    } else {
      return (
        <View style={{ paddingTop: 55 }}>
          <Text>This is {this.props.mangoes.treeName}</Text>
          <Text>He is {this.props.mangoes.age} years old</Text>
          <Text>Total {this.props.mangoes.total} fruits</Text>
            <Button
              onPress={() => this.props.mangoes.age == 20 ?  this.isDead() : this.onGrow() }
              title="Emulate"
              color="#841584"
            />
        </View>
    );
  }
  }
}

const mapStateToProps = state => ({
  mangoes: state,
});
const mapDispatchToProps = dispatch => ({
  addGrow: () => dispatch(addGrow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mango);
