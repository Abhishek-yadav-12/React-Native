import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {getUserList} from './redux/action';
import {useDispatch} from 'react-redux';

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserList({}))
  }, []);

  return (
    <View style={styles.main}>
      <Text>User List Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
});

export default UserList;
