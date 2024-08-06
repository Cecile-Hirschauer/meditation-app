import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Content = ({children}: any) => {
  return (
    <SafeAreaView className='flex-1 py-5 px-3'>
      {children}
    </SafeAreaView>
  )
}

export default Content