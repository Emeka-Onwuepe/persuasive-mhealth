import { setCanSearch } from '@/integrations/features/user/boarderUserSlice';
import { useAppDispatch } from '@/integrations/hooks';
import theme from '@/styles/theme';
import { Feather } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';


export default function MessagesLayout() {
    const navigation = useRouter();
     const dispatch = useAppDispatch();

   return  (
        <Stack screenOptions={{ headerShown: true }} >
        <Stack.Screen name="index"  options={{ title: 'Messages',
            headerRight: () => (
            <TouchableOpacity onPress={() => dispatch(setCanSearch())}>
              {/* ⬆️ Toggle search input visibility */}
              <Feather
                name="search"
                size={24}
                color={theme.colors["neutral-700"]}
              />
            </TouchableOpacity>
          )

         }}/>
        <Stack.Screen
          name="messageDetails"
           options={({
            route,
          }: {
            route: { params?: { name?: string } };
          }) => ({
            title: route.params?.name
              ? route.params.name
              : 'Message Details',
          })}
         
        />
        </Stack>
    )}
