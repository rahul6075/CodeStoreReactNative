import { Pressable, Text, View} from 'react-native'
import React, { FC } from 'react'
import styles from './CheckBoxStyle';
//import Icons
import CheckBoxChecked from '../../assets/svgs/checked.svg'
import CheckBoxOutlined from '../../assets/svgs/outline.svg'


interface checkBoxProps{
  isChecked: boolean,
  onPress() :void,
  title: string
}

const  CheckBox: React.FC<checkBoxProps> = ({isChecked, onPress, title}) => {
    console.log(isChecked);
  return (
    <View style={styles.container}>
            <Pressable onPress={onPress}>
               {isChecked ? 
                 <CheckBoxChecked height={30} width={30} /> :
                 <CheckBoxOutlined height={30} width={30} /> 
              }
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
  )
}
export default CheckBox;