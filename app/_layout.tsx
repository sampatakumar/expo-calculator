import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Simple calculator",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#000000", // header background
          },
          headerTintColor: "#abd023", // text color for title/back button
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center", // centers the title text
        }}
      />
    </Stack>
  );
}
