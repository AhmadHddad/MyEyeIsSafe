import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { I18nManager, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import Main from "./screens/Main";

I18nManager.forceRTL(true);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <StatusBar />
          <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="Title" subtitle="Subtitle" />
          </Appbar.Header>
          <Main />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}
