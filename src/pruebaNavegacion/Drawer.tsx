import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Vista1 from '../views/View1';
import Vista2 from '../views/View2';

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Prueba 1" component={Vista1} />
      <Drawer.Screen name="Prueba 2" component={Vista2} />
    </Drawer.Navigator>
  );
}
