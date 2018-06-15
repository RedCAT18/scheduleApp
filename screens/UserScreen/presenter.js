import React from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import { LinearGradient, Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { CardItem } from '../../components/common';
import * as variable from '../../components/common/variables';

const { width, height } = Dimensions.get('window');

const UserScreen = props => {
  const totalAmount = props.statistics[0],
    successAmount = props.statistics[1],
    failAmount =
      props.statistics[2] || props.statistics[0] - props.statistics[1];

  const successPercentage = Number((successAmount / totalAmount) * 100) || 0;
  const failPercentage = Number((failAmount / totalAmount) * 100) || 0;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={variable.baseColor} translucent />
      <View style={styles.upperbox}>
        <LinearGradient
          colors={[variable.baseColor, variable.darkColor]}
          style={styles.gradient}
        >
          <TouchableWithoutFeedback onPressOut={props.setLogout}>
            <View>
              <Text style={styles.logout}>Log out</Text>
            </View>
          </TouchableWithoutFeedback>
        </LinearGradient>
      </View>
      <View style={styles.lowerbox}>
        <View style={styles.userinfo}>
          <View style={styles.avatar}>
            <Image
              source={require('../../assets/images/avatar.png')}
              style={styles.image}
            />
            <Text style={styles.username}>{props.user.name}</Text>
            <Text style={styles.useremail}>{props.user.email}</Text>
          </View>
        </View>
        <View style={styles.menubox}>
          <CardItem>
            <View style={styles.mymenu}>
              <Ionicons
                name={'ios-podium'}
                size={20}
                color={variable.secondColor}
              />
              <Text style={styles.menutitle}> Statistics </Text>
            </View>
          </CardItem>
          <CardItem>
            <View style={styles.submenu}>
              <View style={styles.submenubox}>
                <Text style={styles.subtext}>Total</Text>
                <Text style={styles.subtext}> {totalAmount} (100%)</Text>
              </View>
              <View style={styles.submenubox}>
                <Text style={styles.subtext}>Completed</Text>
                <Text style={styles.subtext}>
                  {' '}
                  {successAmount} ({successPercentage}%)
                </Text>
              </View>
              <View style={styles.submenubox}>
                <Text style={styles.subtext}>Drop</Text>
                <Text style={styles.subtext}>
                  {' '}
                  {failAmount} ({failPercentage}%)
                </Text>
              </View>
            </View>
          </CardItem>
          <CardItem>
            <TouchableWithoutFeedback
              onPressOut={() => props.navigation.navigate('UserForm')}
            >
              <View style={styles.mymenu}>
                <Ionicons
                  name={'ios-clipboard'}
                  size={20}
                  color={variable.secondColor}
                />
                <Text style={styles.menutitle}> Edit Profile </Text>
              </View>
            </TouchableWithoutFeedback>
          </CardItem>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  upperbox: {
    flex: 1,
    width: width,
    backgroundColor: variable.darkColor,
    marginTop: Constants.statusBarHeight
  },
  logout: {
    color: variable.bgColor,
    fontSize: 18
  },
  lowerbox: {
    flex: 3
  },
  gradient: {
    width: width,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 10
  },
  userinfo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width
  },
  avatar: {
    height: 100,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  image: {
    width: 100,
    height: '100%',
    borderRadius: 50,
    position: 'absolute',
    top: '-50%'
  },
  username: {
    fontSize: 20,
    color: variable.secondColor,
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 50
  },
  useremail: {
    fontSize: 16,
    color: variable.secondColor,
    textAlign: 'center'
  },
  menubox: {
    borderTopColor: variable.secondLightColor,
    borderTopWidth: 1,
    marginTop: 20
  },
  mymenu: {
    paddingVertical: 5,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  menutitle: {
    color: variable.secondColor,
    fontSize: 20,
    marginLeft: 10
  },
  submenu: {
    paddingVertical: 5,
    paddingHorizontal: 30
  },
  submenubox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  subtext: {
    fontSize: 14,
    color: variable.secondColor
  }
});

export default UserScreen;
