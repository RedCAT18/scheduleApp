import React from 'react';
import { View } from 'react-native';
import { Input, CardItem } from '../common';

import * as variable from '../common/variables';

const UserForm = props => {
  return (
    <View>
      <CardItem>
        <Input
          label="Name"
          value={props.name}
          placeholder={'Enter your name.'}
          onChangeText={value => props.inputForm({ prop: 'name', value })}
        />
      </CardItem>
      <CardItem>
        <Input
          label="Email"
          value={props.email}
          placeholder={'Enter your email.'}
          onChangeText={value => props.inputForm({ prop: 'email', value })}
        />
      </CardItem>
      <CardItem>
        <Input
          label="Password"
          secureTextEntry={true}
          value={props.password}
          placeholder={'Password must be more than 6 characters.'}
          placeholderTextColor={variable.secondLightColor}
          onChangeText={value => props.inputForm({ prop: 'password', value })}
        />
      </CardItem>
      <CardItem>
        <Input
          label="Password Check"
          secureTextEntry={true}
          value={props.passwordcheck}
          placeholder={'Please write password again.'}
          placeholderTextColor={variable.secondLightColor}
          onChangeText={value =>
            props.inputForm({ prop: 'passwordcheck', value })
          }
        />
      </CardItem>
    </View>
  );
};

export default UserForm;
