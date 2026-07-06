import { useSignIn } from "@clerk/expo";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignIn = () => {
  const { signIn, errors, fetchStatus } = useSignIn();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const isLoading = fetchStatus === "fetching";

  const onSignInPress = async () => {
    const { error } = await signIn.password({
      emailAddress: email,
      password,
    });

    if (error) {
      //   console.error(JSON.stringify(error.message, null, 2));
      Alert.alert(error.message);
      return;
    }

    if (signIn.status === "complete") {
      await signIn.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) {
            console.log(session?.currentTask);
            return;
          }
          const url = decorateUrl("/");
          router.replace(url as any);
        },
      });
    }

    // if (!error) await signIn.verifications.sendEmailCode();
  };

  // const onVerifyPress = async () => {
  //   await signUp.verifications.verifyEmailCode({
  //     code,
  //   });

  //   if (signUp.status === "complete") {
  //     await signUp.finalize({
  //       navigate: ({ session, decorateUrl }) => {
  //         const url = decorateUrl("/");
  //         router.replace(url as any);
  //       },
  //     });
  //   }
  // };

  // if (
  //   signUp.status === "missing_requirements" &&
  //   signUp.unverifiedFields.includes("email_address") &&
  //   signUp.missingFields.length === 0
  // ) {
  //   return (
  //     <View className="flex-1 justify-center px-6 py-12">
  //       <Image
  //         source={require("../../assets/images/kribb.png")}
  //         className="w-32 h-16 mb-8"
  //         resizeMode="contain"
  //       />

  //       <Text className="text-3xl font-bold text-gray-800 mb-2">
  //         Verify your account{" "}
  //       </Text>
  //       <Text className="text-gray-500 mb-8">We sent a code to {email}</Text>
  //       <View className="flex-row gap-3 mb-4">
  //         <TextInput
  //           className="flex-1 border border-gray-300 rounded-xl px-4 py-3"
  //           placeholder="Enter Verification Code"
  //           value={code}
  //           onChangeText={setCode}
  //           placeholderTextColor="#9CA3AF"
  //           keyboardType="number-pad"
  //         />
  //         {errors.fields.code && (
  //           <Text className="text-red-500 mb-4">
  //             {errors.fields.code.message}
  //           </Text>
  //         )}
  //       </View>

  //       <TouchableOpacity
  //         onPress={onVerifyPress}
  //         disabled={isLoading}
  //         className="w-full bg-blue-600 py-4 rounded-xl items-center mb-4"
  //       >
  //         {isLoading ? (
  //           <ActivityIndicator color="white" />
  //         ) : (
  //           <Text className="text-white font-bold text-base">Verify</Text>
  //         )}
  //       </TouchableOpacity>

  //       <TouchableOpacity
  //         onPress={() => signUp.verifications.sendEmailCode()}
  //         className="py-2"
  //       >
  //         <Text className="text-blue-600">I need a new code</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-white"
      keyboardShouldPersistTaps={"handled"}
    >
      <View className="flex-1 justify-center px-6 py-12">
        <Image
          source={require("../../assets/images/kribb.png")}
          className="w-32 h-16 mb-8"
          resizeMode="contain"
        />

        <Text className="text-3xl font-bold text-gray-800 mb-2">
          Welcome Back
        </Text>
        <Text className="text-gray-500 mb-8">Sign in to your account</Text>

        <TextInput
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#9CA3AF"
          autoCapitalize="none"
        />
        {errors.fields.identifier && (
          <Text className="text-red-500 mb-4">
            {errors.fields.identifier.message}
          </Text>
        )}

        <TextInput
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 text-black"
          placeholder="Password"
          placeholderTextColor="#9CA3AF"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.fields.password && (
          <Text className="text-red-500 mb-4">
            {errors.fields.password.message}
          </Text>
        )}

        <TouchableOpacity
          onPress={onSignInPress}
          disabled={isLoading}
          className="w-full bg-blue-600 py-4 rounded-xl items-center mb-4"
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white font-bold text-base">Sign In</Text>
          )}
        </TouchableOpacity>

        <View className="flex-row justify-center">
          <Text className="text-gray-500">Don't have an account? </Text>
          <Link href="/sign-up">
            <Text className="text-blue-600 font-semibold">Sign Up</Text>
          </Link>
        </View>

        <View nativeID="clerk-captcha" />
      </View>
    </ScrollView>
  );
};

export default SignIn;
