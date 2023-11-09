import { useState }from 'react';
import { ScrollView, View, Text, SectionList, StyleSheet, Pressable } from "react-native";

const menuItemsToDisplay = 
[ {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const Item = ({ name , price }) => (
    <View style={menuStyle.innerContainer} >
        <Text style={menuStyle.itemText}>
            {name} 
        </Text>
        <Text style={menuStyle.itemText}>
            {price} 
        </Text>
    </View>
);

const separator = () => <View style={menuStyle.separator} />

const footer = () => <Text style={menuStyle.footerText}>All rights reserved to Little Lemon @2023</Text>

const MenuItems = ({ nagivation }) => {

    const renderItem = ({ item }) => <Item name={item.name} price={item.price}/>

    const renderSectionHeader =({section: {title}}) =>(
        <View style={menuStyle.headerStyle}>
        <Text style={menuStyle.sectionHeader}>{title}</Text>
        </View>
    )
    
    const [showMenu , setShowMenu] = useState(false);

    return(
        <View style={menuStyle.container}>
                
                {!showMenu && (
                     <Text style={menuStyle.infoSection}>
                     Little Lemon is a charming neighborhood bistro that serves simple food
                     and classic cocktails in a lively but casual environment. View our
                     menu to explore our cuisine with daily specials!
                   </Text>
                )}
                <Pressable 
                style={menuStyle.button}
                onPress={() => {
                  setShowMenu(!showMenu);
                }}>
                  <Text style={menuStyle.buttonText}>{showMenu ? 'Home': 'View Menu'}</Text>
                </Pressable>
                {showMenu && (
                <SectionList 
                sections={menuItemsToDisplay} 
                renderItem={renderItem} 
                renderSectionHeader={renderSectionHeader}
                ItemSeparatorComponent={separator}
                ListFooterComponent={footer}
                />
                )}
                {/* <FlatList data={menuItemsToDisplay} keyExtractor={item => item.id} renderItem={renderItem} /> */}
            {/* <ScrollView 
            indicatorStyle='white'
            style={{paddingHorizontal: 40,
            paddingVertical: 40,
            backgroundColor: '#495E57'}}>
            
                <Text style={{color: '#F4CE14', fontSize: 35}}>
                    {menuItemsToDisplay[0]}
                </Text>
            </ScrollView> */}

        </View>
    );
};

export default MenuItems;

const menuStyle = StyleSheet.create({

    container: {
        flex: 1,
    },
    innerContainer: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        
        flexDirection: 'row',
       justifyContent: 'space-between',
    
    },
    headerText: {
        color: 'white',
        fontSize: 40,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 20,
    },
    headerStyle: {
        backgroundColor: '#F4CE14',
      },
      sectionHeader: {
        color: 'black',
        fontSize: 26,
        flexWrap: 'wrap',
        textAlign: 'center',
      },
      separator: {
        borderBottomWidth: 1,
        borderColor: "#EDEFEE",
      },
      footerText: {
        color: '#EDEFEE',
        paddingLeft: 12,
        fontSize: 20,
        flexWrap: 'wrap',
      },
      button: {
        fontSize: 25,
        padding: 5,
        marginVertical: 8,
        margin: 40,
        backgroundColor: '#EDEFEE',
        borderColor: '#EDEFEE',
        borderWidth: 2,
        borderRadius: 12,
      },
      buttonText: {
        color: '#333333',
        textAlign: 'center',
        fontSize: 32,
        
      },
      infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#333333',
      },
});