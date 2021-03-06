import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  row: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingLeft: 5,
  },
  activeRow: {
    backgroundColor: 'gold',
    flexDirection: 'row',
    paddingLeft: 5,
  },
  icon: {
    paddingTop: 7,
    paddingRight: 15,
  },
  iconPlacement: {
    marginLeft: 'auto',
  },
  image: {
    height: 50,
    width: 50,
  },
  name: {
    fontSize: 18,
    marginTop: 16,
    marginLeft: 10,
  },
  position: {
    color: 'gray',
    fontSize: 14,
    marginTop: 20,
    paddingLeft: 2,
  }
});

export default class PlayerRow extends Component {
  constructor(props) {
    super(props);
    if (this.props.active !== null) {
      this.state = {
        active: this.props.active,
      }
      return;
    }
    this.state = {
      active: false,
    };
  }

  onPress = () => {
    this.setState({ active: !this.state.active });
    if (this.state.active) {
      this.props.onDisable(this.props.player);
      return;
    }
    this.props.onEnable(this.props.player);
  }

  render() {
    const content = (
      <View style={this.state.active ? styles.activeRow : styles.row}>
        <Image
          style={styles.image}
          source={{uri: this.props.logoURL}}
        />
        <Text style={styles.name}>{this.props.name}</Text>
        <Text style={styles.position}>|</Text>
        <Text style={styles.position}>{this.props.position}</Text>
      </View>
    );
    if (this.props.disabled) {
      return (
        <View>
          {content}
        </View>
      );
    } return (
      <TouchableOpacity onPress={this.onPress.bind(this)}>
        {content}
      </TouchableOpacity>
    );
  }
}

PlayerRow.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string,
  player: PropTypes.object,
  position: PropTypes.string,
  logoURL: PropTypes.string,
  onDisable: PropTypes.func,
  onEnable: PropTypes.func,
  disabled: PropTypes.bool,
};
