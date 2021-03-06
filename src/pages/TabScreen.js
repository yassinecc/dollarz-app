import React, { Component } from 'react';
import { TabNavigator, TabBarTop } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Pages from 'DollarzApp/src/pages';

const tabBarIcon = (routeName, focused, tintColor) => {
  let iconName;
  if (routeName === 'Accueil') {
    iconName = `ios-home${focused ? '' : '-outline'}`;
  } else if (routeName === 'Commander') {
    iconName = `ios-cart${focused ? '' : '-outline'}`;
  } else if (routeName === 'Historique') {
    iconName = `ios-calendar${focused ? '' : '-outline'}`;
  }

  return <Icon name={iconName} size={25} color={tintColor} />;
};

const tabNavigatorOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused, tintColor }) => {
    const { routeName } = navigation.state;
    return tabBarIcon(routeName, focused, tintColor);
  },
});

export default TabNavigator(
  {
    Accueil: { screen: Pages.Home },
    Commander: { screen: Pages.Order, path: 'order' },
    Historique: { screen: Pages.History },
  },
  {
    navigationOptions: tabNavigatorOptions,
    tabBarOptions: {
      activeTintColor: 'rgb(18,132,255)',
    },
    labelStyle: {
      fontSize: 12,
    },
    swipeEnabled: true,
  }
);

const styles = {
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
