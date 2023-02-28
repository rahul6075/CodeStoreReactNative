import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './BottomSheetfilterStyle';
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
  Extrapolate,
  onChange,
} from 'react-native-reanimated';
import {Button, ButtonOutlined, Checkbox} from '../index';
import {SearchIcon, CheckIcon, CrossIcon, CrossRedIcon} from '../../assets';
import {skillsData} from '../../dummydata';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
interface bottomSheetFilterProps {
  closeModel: () => {};
}

interface selectedSkills {
  id: number;
  name: string;
}

const BottomSheetfilter: React.FC<bottomSheetFilterProps> = ({closeModel}) => {
  const [isChecked, setisChecked] = useState<boolean>(false);
  const [showDataList, setshowDataList] = useState<boolean>(false);
  const [skills, setSkills] = useState<Array<selectedSkills>>([]);
  const [data, setData] = useState(skillsData);
  const [skillinput, setSkillInput] = useState<string>('');

  const translateY = useSharedValue(0);
  const context = useSharedValue({y: 0});
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })

    .onUpdate(e => {
      translateY.value = e.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT);
    });
  const reAminatedBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });
  // open data list
  const showList = () => {
    setshowDataList(!showDataList);
  };
  //SEARCH
  const onSearchList = (name: string) => {
    if (!name ) {
      let tempData = data.filter(
        item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1,
      );
      setData(tempData);
    } else {
      setData(data);
    }
  };
  const removeTags = (data: {id: number; name: string}) => {
    let tempSkills = skills.filter(skill => skill.id != data.id);
    setSkills(tempSkills);
  };

  const buttonOnPress = () => {};

  useEffect(() => {
    translateY.value = withTiming(-SCREEN_HEIGHT / 2);
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, reAminatedBottomSheetStyle]}>
        <View style={styles.line} />
        <SafeAreaView>
          <View style={styles.contentContainer}>
            <View style={styles.buttonContainer}>
              <Text style={styles.headingText}>Filters</Text>
              <View style={styles.icons}>
                {/* <Pressable style={styles.checkIcon}>
                  <CheckIcon width={15} height={15} />
                </Pressable> */}
                <Pressable style={styles.crossIcon} onPress={closeModel}>
                  <CrossRedIcon width={15} height={15} />
                </Pressable>
              </View>
            </View>
            <View style={styles.filterForm}>
              <View style={styles.filterFormElement}>
                <Text style={styles.label}>Skills</Text>

                <Pressable style={styles.filterFormInputBox} onPress={showList}>
                  <TextInput
                    placeholder="Enter the Skills..."
                    onChangeText={skillinput => {
                      onSearchList(skillinput);
                    }}
                    onFocus={() => {
                      setshowDataList(true);
                    }}
                    style={styles.inputStyle}
                  />
                  <Pressable style={styles.searchIcon}>
                    <SearchIcon width={20} height={20} />
                  </Pressable>
                </Pressable>

                <View style={styles.sreachList}>
                  {showDataList && (
                    <FlatList
                      data={data}
                      renderItem={({item, index}) => {
                        return (
                          <TouchableOpacity
                            style={styles.item}
                            onPress={() => {
                              setSkillInput(item.name);
                              skills.push(item);
                              setData(data.filter(ele => ele.id != item.id));
                            }}>
                            <Text style={styles.title}>{item.name}</Text>
                          </TouchableOpacity>
                        );
                      }}
                    />
                  )}
                </View>

                <View style={styles.tags}>
                  {skills.map(skill => (
                    <View style={styles.tag} key={skill.id}>
                      <Text style={styles.tagText}>{skill.name}</Text>
                      <Pressable
                        style={styles.crossIcon}
                        onPress={() => removeTags(skill)}>
                        <CrossIcon width={10} height={10} />
                      </Pressable>
                    </View>
                  ))}
                </View>
              </View>
              <View style={styles.filterFormElement}>
                <Text style={styles.label}>Experience</Text>
                <View style={[styles.checkBoxContainer]}>
                  <Checkbox
                    title={'0-2 years'}
                    isChecked={isChecked}
                    onPress={() => setisChecked(!isChecked)}
                  />
                  <Checkbox
                    title={'2-4 years'}
                    isChecked={isChecked}
                    onPress={() => setisChecked(!isChecked)}
                  />
                  <Checkbox
                    title={'4-8 years'}
                    isChecked={isChecked}
                    onPress={() => setisChecked(!isChecked)}
                  />
                  <Checkbox
                    title={'More than 10 years'}
                    isChecked={isChecked}
                    onPress={() => setisChecked(!isChecked)}
                  />
                </View>
              </View>
              <View style={styles.filterFormElement}>
                <Text style={styles.label}>Availability</Text>
                <View style={[styles.checkBoxContainer]}>
                  <Checkbox
                    title={'Hourly'}
                    isChecked={isChecked}
                    onPress={() => setisChecked(!isChecked)}
                  />
                  <Checkbox
                    title={'Weekly'}
                    isChecked={isChecked}
                    onPress={() => setisChecked(!isChecked)}
                  />
                  <Checkbox
                    title={'Monthly'}
                    isChecked={isChecked}
                    onPress={() => setisChecked(!isChecked)}
                  />
                </View>
              </View>
              <View style={styles.filterFormElement}>
                <Text style={styles.label}>Hourly Rate</Text>
              </View>
            </View>
          </View>
          <View style={styles.filterButtons}>
            <Pressable  style={styles.cancelButtons}>
              <ButtonOutlined content={'Cancel'} onPress={buttonOnPress} />
            </Pressable>
            <Pressable style={styles.cancelButtons} onPress={closeModel}>
              <Button content={'Apply'} onPress={closeModel} />
            </Pressable>
          </View>
        </SafeAreaView>
      </Animated.View>
    </GestureDetector>
  );
};

export default BottomSheetfilter;
