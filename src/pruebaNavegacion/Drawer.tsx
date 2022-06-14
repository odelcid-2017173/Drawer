import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import View1 from '../views/View1';
import View2 from '../views/View2';

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Prueba 1" component={View1} />
      <Drawer.Screen name="Prueba 2" component={View2} />
    </Drawer.Navigator>
  );
}
