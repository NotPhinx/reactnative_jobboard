import {useState }from 'react'
import{ View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants'

import styles from './welcome.style'

const jobTypes = ["Full Time", "Part Time", "Internship"]

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full Time')

  return (
    <View>
      <View style = {styles.container} > 
        <Text style = {styles.userName}> Hello Ethan</Text>
        <Text style = {styles.welcomemMessage}> Find your next job</Text>

        <View style = {styles.searchContainer}>
          <View style = {styles.searchWrapper}>
            <TextInput 
            style = {styles.searchInput}
            value=""
            onChange = {() => {}}
            placeholder = "Search for job"
            />         
          </View>

          <TouchableOpacity style = {styles.searchBtn} onPress = {() => {}}>
            <Image 
              source = {icons.search}
              resizeMode = "contain"
              style = {styles.searchBtnImage}
            />

          </TouchableOpacity>
        </View>

        
        <View style = {styles.tabsContainer}>
          <FlatList 
            data = {jobTypes}
            renderItem = {({item}) => (
              <TouchableOpacity style = {styles.tab(activeJobType, item)} onPress={() => { 
                setActiveJobType(item);
                router.push('/search/${item}')
              }}
              >
                
                <Text>
                  {item}
                </Text>

              </TouchableOpacity>
            )}
          />

        </View>
      </View>
    </View>
  )
}

export default Welcome