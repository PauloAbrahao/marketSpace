import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import {Catalog} from "@screens/Catalog";
import {House} from "phosphor-react-native";

import {useTheme} from "native-base";
import {Platform} from "react-native";

type AppRoutes = {
  catalog: undefined;
};

const {Navigator, Screen} = createBottomTabNavigator<AppRoutes>();

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

export function AppRoutes() {
  const {sizes, colors} = useTheme();

  const iconSize = sizes[6];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: sizes[8],
          paddingTop: sizes[8],
        },
      }}
    >
      <Screen
        name="catalog"
        component={Catalog}
        options={{
          tabBarIcon: () => <House weight="bold" size={24} />,
        }}
      />
    </Navigator>
  );
}
