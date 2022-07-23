import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


export default class Chat extends React.Component {
  render() {
    let name = this.props.route.params.name; // OR ...
    // let { name } = this.props.route.params;
    let  bgColor  = this.props.route.params.bgColor;

    this.props.navigation.setOptions({ title: name });

    return (
      <View style={{
        backgroundColor: bgColor,
        flex: 1,
      }}>
       <Text> Hello {name}</Text>
      </View>
    );
  };
}


