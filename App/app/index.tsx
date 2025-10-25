import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export default function App() {

  const url = 'http://192.168.29.207:5173/';
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <WebView
        source={{ uri: url }}
        style={{ flex: 1, backgroundColor: '#fff' }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
