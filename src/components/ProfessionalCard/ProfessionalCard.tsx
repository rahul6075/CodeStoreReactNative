import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './ProfessionalCardStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface cardProps {
  id: number;
  name: string;
  image: object;
  price: string;
  designation: string;
  desc: string;
  skills: Array<string>;
}

const ProfessionalCard: React.FC<cardProps> = ({name, image, price, designation, desc, skills}) => {
  const [showmore, setShowMore] = useState<boolean>(false);
  const toggleShowButton = () => {
    setShowMore(!showmore);
  };
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderLeft}>
          <View style={styles.avatarImg}>
            <Image
              source={image}
              style={styles.avatarImg}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>{name} </Text>
            <Text style={styles.designation}>{designation} </Text>
          </View>
        </View>
        <View style={styles.cardHeaderRight}>
          <Text style={styles.price}>{price} </Text>
        </View>
      </View>
      <View style={styles.cardContent}>
        <Text
          style={styles.cardDescription}
          numberOfLines={showmore ? undefined : 2}>
          {desc}
        </Text>

        {showmore && (
          <View style={styles.cardSkills}>
            {skills.map(text =>  <Text style={styles.cardSkill}>{text}</Text>)}
          </View>
        )}
        <TouchableOpacity onPress={toggleShowButton}>
          <Text style={styles.showMoreBtn}>
            {' '}
            {showmore ? 'Read Less' : 'Read More'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfessionalCard;
