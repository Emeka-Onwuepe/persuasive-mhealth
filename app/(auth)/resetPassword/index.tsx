import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "@/styles/theme";
import globalStyles from "@/styles/global";
import typography from "@/styles/typography";
import formStyles from "@/styles/formStyles";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForgotPasswordMutation } from "@/integrations/features/apis/apiSlice";
import { useAppDispatch } from "@/integrations/hooks";
import { addAlert } from "@/integrations/features/alert/alertSlice";

type FormData = {
  password: string;
  confirmPassword: string;
};

export default function ResetPasswordScreen() {
   const navigation = useRouter();
   const { otp,user_id } = useLocalSearchParams<{otp?:string,user_id?:string}>();
  const dispatch = useAppDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: FormData) => {
    if (data.password && data.confirmPassword === data.password) {
      setIsSubmitting(true);
      // Simulate an API call to reset password
      let data_ = {
        action: "reset_password",
        otp: otp,
        user_id: user_id,
        new_password: data.password,
      };

      forgotPassword(data_).then(data => {
          if (data.error) {
            dispatch(addAlert({ ...data.error, page: "reset password page" }));
          }
          if (data.data) {
            setIsSubmitting(false);
            dispatch(addAlert({
              type: "success",
              message: "Password reset successfully",
              status: 200,
              page: "reset password page"
            }));
            navigation.navigate("/login");
          }

          setIsSubmitting(false);
        }
                )

    } else {
      
    }
  };

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Text
          style={[
            typography.text2XL_SemiBold,
            {
              textAlign: "left",
              marginBottom: 8,
            },
          ]}>
          Create new password
        </Text>
        <Text
          style={[
            typography.textBase_Regular,
            {
              textAlign: "left",
              marginBottom: 24,
            },
          ]}>
          Your new password must be different from previously used passwords..
        </Text>
        {/* Password Input */}
        <View style={formStyles.inputGroup}>
          <Text style={formStyles.label}>Password</Text>
          <View style={formStyles.inputCntr}>
            <MaterialIcons
              name="lock"
              size={20}
              color={theme.colors["neutral-500"]}
            />
            <Controller
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must not exceed 20 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
                  message:
                    "Password must contain at least one capital letter, one small letter, one number, and one of the following special characters: @$!%*?&",
                },
                validate: value => {
                  const invalidChars = /[^A-Za-z\d@$!%*?&]/g; // Reject anything not in allowed set
                  if (invalidChars.test(value)) {
                    return "Password contains invalid special characters. Only @$!%*?& are allowed.";
                  }
                  return true;
                },
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={formStyles.inputText}
                  placeholder="********"
                  placeholderTextColor={theme.colors["disabled-text"]}
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                />
              )}
              name="password"
            />
          </View>
          {errors.password && (
            <Text style={globalStyles.errorText}>
              {errors.password?.message?.toString()}
            </Text>
          )}
        </View>

        {/* Confirm Password Input */}
        <View style={formStyles.inputGroup}>
          <Text style={formStyles.label}>Confirm password</Text>
          <View style={formStyles.inputCntr}>
            <MaterialIcons
              name="lock"
              size={20}
              color={theme.colors["neutral-500"]}
            />
            <Controller
              control={control}
              rules={{
                required: "Confirm password is required",
                validate: (value, formValues) => {
                  if (value !== formValues.password) {
                    return "Passwords do not match";
                  }
                  return true;
                },
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={formStyles.inputText}
                  placeholder="********"
                  placeholderTextColor={theme.colors["disabled-text"]}
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                />
              )}
              name="confirmPassword"
            />
          </View>
          {errors.confirmPassword && (
            <Text style={globalStyles.errorText}>
              {errors.confirmPassword?.message?.toString()}
            </Text>
          )}
        </View>

        {/* Reset password Button */}
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          style={[
            formStyles.submitButton,
            {
              backgroundColor: isSubmitting
                ? theme.colors["disabled-bg"]
                : theme.colors["purple-700"],
            },
          ]}>
          <Text
            style={{
              color: isSubmitting
                ? theme.colors["disabled-text"]
                : theme.colors.white,
            }}>
            Reset password
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
