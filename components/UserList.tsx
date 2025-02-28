import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {getUserList} from './redux/action';
import {useDispatch, useSelector} from 'react-redux';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: any) => state.reducer);

  useEffect(() => {
    dispatch(getUserList({}));
  }, []);

  console.warn('In Component', userList);

  return (
    <View style={styles.main}>
      {userList.length
        ? userList.map((item: { firstname: string , id: number}
           , key={item}
        ) => <Text>{item.firstname}</Text>)
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
});

export default UserList;
