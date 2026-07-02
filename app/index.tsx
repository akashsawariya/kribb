// import { useAuth } from "@clerk/expo";
// import { Redirect } from "expo-router";

// export default function Index() {
//   const { isSignedIn, isLoaded } = useAuth();

//   if (!isLoaded) return null;

//   if (isSignedIn) return <Redirect href="/(root)/(tabs)" />;

//   return <Redirect href="/sign-in" />;
// }

import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();

  console.log({
    isLoaded,
    isSignedIn,
  });
  if (!isLoaded) return null;

  return isSignedIn ? (
    <Redirect href="/(root)/(tabs)" />
  ) : (
    <Redirect href="/(auth)/sign-in" />
  );
}
