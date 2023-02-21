import {View, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import styles from './JobCardStyles';

interface JobCardProps {
  imageUrl: {uri: string};
  tag: string;
}
const JobCard: React.FC<JobCardProps> = ({imageUrl, tag}) => {
  return (
    <View style={styles.item}>
      <ImageBackground
        source={imageUrl}
        resizeMode="cover"
        style={styles.jobCard}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.5)']}
          style={styles.gradient}
          >
          <Text style={styles.tagText}>{tag}</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default JobCard;
