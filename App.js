import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
class HomeScreen extends React.Component {
  render() {
    return (
     <View style={styles.container}>
     <View style={styles.AboveNavContainer}>
      <View style={styles.GoHomeButtonContainer}>
          <Button
            onPress={() => this.props.navigation.push('Home')}
            title="H"
          />
        </View>
        <View style={styles.AccountContainer}>
          <Text>My_Username123</Text>
          <Text>{global.money}</Text>
        </View>
      </View>
       <View style={styles.NavContainer}>
        <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('FirstJanuaryMatches')}
            title="Jan 26"
          />
        </View>
        <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('SecondJanuaryMatches')}
            title="Jan 27"
          />
        </View>
          <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('ThirdJanuaryMatches')}
            title="Jan 28"
          />
        </View>
          <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('FourthJanuaryMatches')}
            title="Jan 29"
          />
        </View>
            <View style={styles.HomebuttonContainer}>
          <Button
           onPress={() => this.props.navigation.push('FifthJanuaryMatches')}
            title="Jan 30"
          />
        </View>
             <View style={styles.HomebuttonContainer}>
          <Button
           onPress={() => this.props.navigation.push('SixthJanuaryMatches')}
            title="Jan 31"
          />
          </View>
        </View>
        <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, marginTop:40}}>
        <Text>Most Popular Upcoming Matches</Text>
         </View>
        <ScrollView style={{marginTop:10}}>
       <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60, }}
       onPress={() => this.props.navigation.push('FPXG2')}>
    <Text style={{marginTop:19, alignItems:"center"}}>Funplus Phoenix Vs. G2 Esports</Text>
</TouchableOpacity>
         </View>
         <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60, }}
       onPress={() => this.props.navigation.push('TLFLY')}>
    <Text style={{marginTop:19, alignItems:"center"}}>Team Liquid Vs. Flyquest</Text>
</TouchableOpacity>
         </View>
         <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => this.props.navigation.push('TSMCG')}>
    <Text style={{marginTop:19, alignItems:"center"}}>Team Solo Mid Vs. Clutch Gaming</Text>
</TouchableOpacity>
         </View>
           <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60, }}
       onPress={() => this.props.navigation.push('SKTDWG')}>
    <Text style={{marginTop:19, alignItems:"center"}}>SKT T1 vs Damwon Gaming</Text>
</TouchableOpacity>
         </View>
           <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => this.props.navigation.push('C9DIG')}>
    <Text style={{marginTop:19, alignItems:"center"}}>C9 Vs. Dignitas</Text>
</TouchableOpacity>
         </View>
          <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60, }}
         onPress={() => this.props.navigation.push('MMT100T')}>
    <Text style={{marginTop:19, alignItems:"center"}}>Mammoth Vs. 100Thieves</Text>
</TouchableOpacity>
         </View>
         </ScrollView>
      </View>
    );
  }
}

class SignInScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

    render() {
    return (
      <View style={styles.signInPageLayout}>
        <Text style={{textAlign:"right",marginRight:10, marginBottom:40}}>Forgot Login/Pass</Text>
       <Text style={{marginLeft:10}}>Username or Email</Text>
        <View style={{height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
        <TextInput
          style={{height: 60}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
         </View>
         <Text style={{marginLeft:10}}>Password</Text>
     <View style={{height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
        <TextInput
          style={{height: 60}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
         </View>
         <View style={{height: 30, backgroundColor: 'skyblue', margin:10, marginTop:100}}>
         <Button
             onPress={() => this.props.navigation.navigate('Home')}
            title="Sign In"
          />
          </View>
          <View style={{height: 30, margin:10, color:'black'}}>
         <Button
             onPress={() => this.props.navigation.navigate('CreateAccount')}
            title='Create Account'
            color='black'
            >
          </Button>
          </View>
        </View>
    );
  }
}
class CreateAccountScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

    render() {
    return (
      <View style={styles.signInPageLayout}>
        <Text style={{textAlign:"center",fontSize:20, fontWeight: "bold", marginBottom:40}}>Create an Account</Text>
       <Text style={{marginLeft:10}}>Username or Email</Text>
        <View style={{height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
        <TextInput
          style={{height: 60}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
         </View>
         <Text style={{marginLeft:10}}>Password</Text>
     <View style={{height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
        <TextInput
          style={{height: 60}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
         </View>
          <Text style={{marginLeft:10}}>Confirm Password</Text>
         <View style={{height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
        <TextInput
          style={{height: 60}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
         </View>
         <View style={{height: 30, backgroundColor: 'skyblue', margin:10, marginTop:60}}>
         <Button
             onPress={() => this.props.navigation.navigate('SignIn')}
            title="Create Account"
          />
          </View>
        </View>
    );
  }
}
class FirstJanuaryMatchesScreen extends React.Component {
  render() {
    return (
         <View style={styles.container}>
         <View style={styles.AboveNavContainer}>
      <View style={styles.GoHomeButtonContainer}>
          <Button
            onPress={() => this.props.navigation.push('Home')}
            title="H"
          />
        </View>
        <View style={styles.AccountContainer}>
          <Text>My_Username123</Text>
          <Text>$500</Text>
        </View>
      </View>
       <View style={styles.NavContainer}>
        <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('FirstJanuaryMatches')}
            title="Jan 26"
            color="black"
          />
        </View>
        <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('SecondJanuaryMatches')}
            title="Jan 27"
          />
        </View>
          <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('ThirdJanuaryMatches')}
            title="Jan 28"
          />
        </View>
          <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('FourthJanuaryMatches')}
            title="Jan 29"
          />
        </View>
            <View style={styles.HomebuttonContainer}>
          <Button
           onPress={() => this.props.navigation.push('FifthJanuaryMatches')}
            title="Jan 30"
          />
        </View>
             <View style={styles.HomebuttonContainer}>
          <Button
           onPress={() => this.props.navigation.push('SixthJanuaryMatches')}
            title="Jan 31"
          />
          </View>
        </View>
        <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, marginTop:40}}>
        <Text>Matches for January 26th</Text>
         </View>
        <ScrollView style={{marginTop:10}}>
           <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60 }}
        onPress={() => this.props.navigation.push('SKTDWG')}>
    <Text style={{marginTop:19, alignItems:"center"}}>SKT T1 vs Damwon Gaming</Text>
</TouchableOpacity>
         </View>
           <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => this.props.navigation.push('GAMDFM')}>
    <Text style={{marginTop:19, alignItems:"center"}}>Gigabyte Marines Vs. Detonation FocusMe</Text>
</TouchableOpacity>
         </View>
         <View style={styles.emptyContainer}></View>
         <View style={styles.emptyContainer}></View>
         <View style={styles.emptyContainer}></View>
         </ScrollView>
      </View>

    );
  }
}
class SecondJanuaryMatchesScreen extends React.Component {
  render() {
    return (
         <View style={styles.container}>
         <View style={styles.AboveNavContainer}>
      <View style={styles.GoHomeButtonContainer}>
          <Button
            onPress={() => this.props.navigation.push('Home')}
            title="H"
          />
        </View>
        <View style={styles.AccountContainer}>
          <Text>My_Username123</Text>
          <Text>$500</Text>
        </View>
      </View>
       <View style={styles.NavContainer}>
        <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('FirstJanuaryMatches')}
            title="Jan 26"
          />
        </View>
        <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('SecondJanuaryMatches')}
            title="Jan 27"
             color="black"
          />
        </View>
          <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('ThirdJanuaryMatches')}
            title="Jan 28"
          />
        </View>
          <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('FourthJanuaryMatches')}
            title="Jan 29"
          />
        </View>
            <View style={styles.HomebuttonContainer}>
          <Button
           onPress={() => this.props.navigation.push('FifthJanuaryMatches')}
            title="Jan 30"
          />
        </View>
             <View style={styles.HomebuttonContainer}>
          <Button
           onPress={() => this.props.navigation.push('SixthJanuaryMatches')}
            title="Jan 31"
          />
          </View>
        </View>
        <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, marginTop:40}}>
         <Text>Matches for January 27th</Text>
         </View>
        <ScrollView style={{marginTop:10}}>
           <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => this.props.navigation.push('FPXG2')}>
    <Text style={{marginTop:19, alignItems:"center"}}>Funplus Phoenix Vs. G2 Esports</Text>
</TouchableOpacity>
         </View>
         <View style={styles.emptyContainer}></View>
         <View style={styles.emptyContainer}></View>
         <View style={styles.emptyContainer}></View>
         <View style={styles.emptyContainer}></View>
         </ScrollView>
      </View>
    );
  }
}
class ThirdJanuaryMatchesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.AboveNavContainer}>
      <View style={styles.GoHomeButtonContainer}>
          <Button
            onPress={() => this.props.navigation.push('Home')}
            title="H"
          />
        </View>
        <View style={styles.AccountContainer}>
          <Text>My_Username123</Text>
          <Text>$500</Text>
        </View>
      </View>
       <View style={styles.NavContainer}>
        <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('FirstJanuaryMatches')}
            title="Jan 26"
          />
        </View>
        <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('SecondJanuaryMatches')}
            title="Jan 27"
          />
        </View>
          <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('ThirdJanuaryMatches')}
            title="Jan 28"
             color="black"
          />
        </View>
          <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('FourthJanuaryMatches')}
            title="Jan 29"
          />
        </View>
            <View style={styles.HomebuttonContainer}>
          <Button
           onPress={() => this.props.navigation.push('FifthJanuaryMatches')}
            title="Jan 30"
          />
        </View>
             <View style={styles.HomebuttonContainer}>
          <Button
           onPress={() => this.props.navigation.push('SixthJanuaryMatches')}
            title="Jan 31"
          />
          </View>
        </View>
        <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, marginTop:40}}>
        <Text> <Text>Matches for January 28th</Text></Text>
         </View>
        <ScrollView style={{marginTop:10}}>
         <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => this.props.navigation.push('TSMCG')}>
    <Text style={{marginTop:19, alignItems:"center"}}>Team Solo Mid Vs. Clutch Gaming</Text>
</TouchableOpacity>
         </View>
           <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => this.props.navigation.push('GRFRNG')}>
    <Text style={{marginTop:19, alignItems:"center"}}>Griffin Vs. Royal Never Give Up</Text>
</TouchableOpacity>
         </View>
           <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => this.props.navigation.push('AHQHKA')}>
    <Text style={{marginTop:19, alignItems:"center"}}>AHQ vs. Hong Kong Attitude</Text>
</TouchableOpacity>
         </View>
         <View style={styles.emptyContainer}></View>
         <View style={styles.emptyContainer}></View>
         </ScrollView>
      </View>
    );
  }
}
class FourthJanuaryMatchesScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        <View style={styles.AboveNavContainer}>
      <View style={styles.GoHomeButtonContainer}>
          <Button
            onPress={() => this.props.navigation.push('Home')}
            title="H"
          />
        </View>
        <View style={styles.AccountContainer}>
          <Text>My_Username123</Text>
          <Text>$500</Text>
        </View>
      </View>
       <View style={styles.NavContainer}>
        <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('FirstJanuaryMatches')}
            title="Jan 26"
          />
        </View>
        <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('SecondJanuaryMatches')}
            title="Jan 27"
          />
        </View>
          <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('ThirdJanuaryMatches')}
            title="Jan 28"
          />
        </View>
          <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('FourthJanuaryMatches')}
            title="Jan 29"
             color="black"
          />
        </View>
            <View style={styles.HomebuttonContainer}>
          <Button
           onPress={() => this.props.navigation.push('FifthJanuaryMatches')}
            title="Jan 30"
          />
        </View>
             <View style={styles.HomebuttonContainer}>
          <Button
           onPress={() => this.props.navigation.push('SixthJanuaryMatches')}
            title="Jan 31"
          />
          </View>
        </View>
        <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, marginTop:40}}>
         <Text>Matches for January 29th</Text>
         </View>
        <ScrollView style={{marginTop:10}}>
         <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => this.props.navigation.push('TLFLY')}>
    <Text style={{marginTop:19, alignItems:"center"}}>Team Liquid Vs. Flyquest</Text>
</TouchableOpacity>
         </View>
           <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => this.props.navigation.push('SPYJTM')}>
    <Text style={{marginTop:19, alignItems:"center"}}>Splyce Vs. J Team</Text>
</TouchableOpacity>
         </View>
           <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => this.props.navigation.push('UOLISG')}>
    <Text style={{marginTop:19, alignItems:"center"}}>Unicorns of Love Vs. Isurus Gaming</Text>
</TouchableOpacity>
         </View>
         <View style={styles.emptyContainer}></View>
         <View style={styles.emptyContainer}></View>
         </ScrollView>
      </View>
    );
  }
}
class FifthJanuaryMatchesScreen extends React.Component {
  render() {
    return (
       <View style={styles.container}>
       <View style={styles.AboveNavContainer}>
      <View style={styles.GoHomeButtonContainer}>
          <Button
            onPress={() => this.props.navigation.push('Home')}
            title="H"
          />
        </View>
        <View style={styles.AccountContainer}>
          <Text>My_Username123</Text>
          <Text>$500</Text>
        </View>
      </View>
       <View style={styles.NavContainer}>
        <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('FirstJanuaryMatches')}
            title="Jan 26"
          />
        </View>
        <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('SecondJanuaryMatches')}
            title="Jan 27"
          />
        </View>
          <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('ThirdJanuaryMatches')}
            title="Jan 28"
          />
        </View>
          <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('FourthJanuaryMatches')}
            title="Jan 29"
          />
        </View>
            <View style={styles.HomebuttonContainer}>
          <Button
           onPress={() => this.props.navigation.push('FifthJanuaryMatches')}
            title="Jan 30"
             color="black"
          />
        </View>
             <View style={styles.HomebuttonContainer}>
          <Button
           onPress={() => this.props.navigation.push('SixthJanuaryMatches')}
            title="Jan 31"
          />
          </View>
        </View>
        <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, marginTop:40}}>
         <Text>Matches for January 30th</Text>
         </View>
        <ScrollView style={{marginTop:10}}>
         <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => this.props.navigation.push('LOKROY')}>
    <Text style={{marginTop:19, alignItems:"center"}}>Lowkey Vs. Royal Youth</Text>
</TouchableOpacity>
         </View>
           <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => this.props.navigation.push('C9DIG')}>
    <Text style={{marginTop:19, alignItems:"center"}}>C9 Vs. Dignitas</Text>
</TouchableOpacity>
         </View>
         <View style={styles.emptyContainer}></View>
         <View style={styles.emptyContainer}></View>
         <View style={styles.emptyContainer}></View>
         </ScrollView>
      </View>
    );
  }
}
class SixthJanuaryMatchesScreen extends React.Component {
  render() {
    return (
       <View style={styles.container}>
       <View style={styles.AboveNavContainer}>
      <View style={styles.GoHomeButtonContainer}>
          <Button
            onPress={() => this.props.navigation.push('Home')}
            title="H"
          />
        </View>
        <View style={styles.AccountContainer}>
          <Text>My_Username123</Text>
          <Text>$500</Text>
        </View>
      </View>
       <View style={styles.NavContainer}>
        <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('FirstJanuaryMatches')}
            title="Jan 26"
          />
        </View>
        <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('SecondJanuaryMatches')}
            title="Jan 27"
          />
        </View>
          <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('ThirdJanuaryMatches')}
            title="Jan 28"
          />
        </View>
          <View style={styles.HomebuttonContainer}>
          <Button
            onPress={() => this.props.navigation.push('FourthJanuaryMatches')}
            title="Jan 29"
          />
        </View>
            <View style={styles.HomebuttonContainer}>
          <Button
           onPress={() => this.props.navigation.push('FifthJanuaryMatches')}
            title="Jan 30"
          />
        </View>
             <View style={styles.HomebuttonContainer}>
          <Button
           onPress={() => this.props.navigation.push('SixthJanuaryMatches')}
            title="Jan 31"
             color="black"
          />
          </View>
        </View>
        <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, marginTop:40}}>
         <Text>Matches for January 31st</Text>
         </View>
        <ScrollView style={{marginTop:10}}>
       <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60}}
        onPress={() => this.props.navigation.push('MMT100T')}>
    <Text style={{marginTop:19, alignItems:"center"}}>Mammoth Vs. 100Thieves</Text>
</TouchableOpacity>
         </View>
         <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
       <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => this.props.navigation.push('MEGAFLM')}>
    <Text style={{marginTop:19, alignItems:"center"}}>MEGA Esports Vs. Flamengo Esports</Text>
</TouchableOpacity>
         </View>
         <View style={styles.emptyContainer}></View>
         <View style={styles.emptyContainer}></View>
         <View style={styles.emptyContainer}></View>
         </ScrollView>
      </View>
    );
  }
}
class FPXG2Screen extends React.Component {
   constructor(props) {
    super(props);
   }
_FPXUpvote(){
    // Toggle the state every second
    this.setState({
      text: 'hello2'
    });
}

_G2Upvote() {
this.setState({
      text: 'hello2'
    });
}
 state = {text: 'hello'}
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.container}>
     <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
    <Text style={{ alignItems:"center"}}>January 27th at 11AM</Text>
    <Text style={{ alignItems:"center"}}>You have ${this.state.text}</Text>
            </View>
          </View>
           <View style={styles.AboveNavContainer}>
            <View style={styles.MatchContainer}>
            <Text>Funplus Phoenix</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
          (this._FPXUpvote)
    alert('You bet five dollars on Funplus Phoenix');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
        <View style={styles.circle}><Text style={{marginTop:15,marginLeft:15}}>Vs.</Text></View>
         <View style={styles.MatchContainer}>
            <Text>G2 Esports</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
          (this._G2Upvote)
    alert('You bet five dollars on G2 Esports');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
            </View>
           </View>
    );
  }
}
class TLFLYScreen extends React.Component {
  render() {
    return (
     <View style={styles.container}>
       <View style={styles.container}>
     <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
    <Text style={{ alignItems:"center"}}>January 29th at 1PM</Text>
            </View>
          </View>
           <View style={styles.AboveNavContainer}>
            <View style={styles.MatchContainer}>
            <Text>Team Liquid</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Team Liquid');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
        <View style={styles.circle}><Text style={{marginTop:15,marginLeft:15}}>Vs.</Text></View>
         <View style={styles.MatchContainer}>
            <Text>Flyquest</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Flyquest');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
            </View>
           </View>
    );
  }
}
class TSMCGScreen extends React.Component {
  render() {
    return (
     <View style={styles.container}>
       <View style={styles.container}>
     <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
    <Text style={{ alignItems:"center"}}>January 28th at 5PM</Text>
            </View>
          </View>
           <View style={styles.AboveNavContainer}>
            <View style={styles.MatchContainer}>
            <Text>Team Solo Mid</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Team Solo Mid');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
        <View style={styles.circle}><Text style={{marginTop:15,marginLeft:15}}>Vs.</Text></View>
         <View style={styles.MatchContainer}>
            <Text>Clutch Gaming</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Clutch Gaming');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
            </View>
           </View>
    );
  }
}
class SKTDWGScreen extends React.Component {
  render() {
    return (
     <View style={styles.container}>
       <View style={styles.container}>
     <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
    <Text style={{ alignItems:"center"}}>January 26th at 10AM</Text>
            </View>
          </View>
           <View style={styles.AboveNavContainer}>
            <View style={styles.MatchContainer}>
            <Text>SKT T1</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on SKT T1');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
        <View style={styles.circle}><Text style={{marginTop:15,marginLeft:15}}>Vs.</Text></View>
         <View style={styles.MatchContainer}>
            <Text>Damwon Gaming</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Damwon Gaming');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
            </View>
           </View>
    );
  }
}
class C9DIGScreen extends React.Component {
  render() {
    return (
     <View style={styles.container}>
       <View style={styles.container}>
     <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
    <Text style={{ alignItems:"center"}}>January 30th at 5PM</Text>
            </View>
          </View>
           <View style={styles.AboveNavContainer}>
            <View style={styles.MatchContainer}>
            <Text>C9</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on C9');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
        <View style={styles.circle}><Text style={{marginTop:15,marginLeft:15}}>Vs.</Text></View>
         <View style={styles.MatchContainer}>
            <Text>Dignitas</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Dignitas');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
            </View>
           </View>
    );
  }
}
class MMT100TScreen extends React.Component {
  render() {
    return (
     <View style={styles.container}>
       <View style={styles.container}>
     <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
    <Text style={{ alignItems:"center"}}>January 31st at 1PM</Text>
            </View>
          </View>
           <View style={styles.AboveNavContainer}>
            <View style={styles.MatchContainer}>
            <Text>Mammoth</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Mammoth');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
        <View style={styles.circle}><Text style={{marginTop:15,marginLeft:15}}>Vs.</Text></View>
         <View style={styles.MatchContainer}>
            <Text>100Thieves</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on 100Thieves');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
            </View>
           </View>
    );
  }
}
class GAMDFMScreen extends React.Component {
  render() {
    return (
     <View style={styles.container}>
       <View style={styles.container}>
     <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
    <Text style={{ alignItems:"center"}}>January 26th at 11AM</Text>
            </View>
          </View>
           <View style={styles.AboveNavContainer}>
            <View style={styles.MatchContainer}>
            <Text>Gigabyte Marines</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Gigabyte Marines');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
        <View style={styles.circle}><Text style={{marginTop:15,marginLeft:15}}>Vs.</Text></View>
         <View style={styles.MatchContainer}>
            <Text>Detonation FocusMe</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Detonation FocuseMe');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
            </View>
           </View>
    );
  }
}
class GRFRNGScreen extends React.Component {
  render() {
    return (
     <View style={styles.container}>
       <View style={styles.container}>
     <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
    <Text style={{ alignItems:"center"}}>January 28th at 3PM</Text>
            </View>
          </View>
           <View style={styles.AboveNavContainer}>
            <View style={styles.MatchContainer}>
            <Text>Griffin</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Griffin');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
        <View style={styles.circle}><Text style={{marginTop:15,marginLeft:15}}>Vs.</Text></View>
         <View style={styles.MatchContainer}>
            <Text>Royal Never Give Up</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Royal Never Give Up');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
            </View>
           </View>
    );
  }
}
class AHQHKAScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.container}>
     <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
    <Text style={{ alignItems:"center"}}>January 28th at 2PM</Text>
            </View>
          </View>
           <View style={styles.AboveNavContainer}>
            <View style={styles.MatchContainer}>
            <Text>AHQ</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on AHQ');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
        <View style={styles.circle}><Text style={{marginTop:15,marginLeft:15}}>Vs.</Text></View>
         <View style={styles.MatchContainer}>
            <Text>Hong Kong Attitude</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Hong Kong Attitude');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
            </View>
           </View>
    );
  }
}
class SPYJTMScreen extends React.Component {
  render() {
    return (
     <View style={styles.container}>
       <View style={styles.container}>
     <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
    <Text style={{ alignItems:"center"}}>January 29th at 10AM</Text>
            </View>
          </View>
           <View style={styles.AboveNavContainer}>
            <View style={styles.MatchContainer}>
            <Text>Splyce</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Splyce');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
        <View style={styles.circle}><Text style={{marginTop:15,marginLeft:15}}>Vs.</Text></View>
         <View style={styles.MatchContainer}>
            <Text>JTeam</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on JTeam');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
            </View>
           </View>
    );
  }
}
class UOLISGScreen extends React.Component {
  render() {
    return (
     <View style={styles.container}>
       <View style={styles.container}>
     <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
    <Text style={{ alignItems:"center"}}>January 29th at 8AM</Text>
            </View>
          </View>
           <View style={styles.AboveNavContainer}>
            <View style={styles.MatchContainer}>
            <Text>Unicorns of Loveh</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Unicorns of Love');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
        <View style={styles.circle}><Text style={{marginTop:15,marginLeft:15}}>Vs.</Text></View>
         <View style={styles.MatchContainer}>
            <Text>Isurus Gaming</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Isurus Gaming');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
            </View>
           </View>
    );
  }
}
class LOKROYScreen extends React.Component {
  render() {
    return (
     <View style={styles.container}>
       <View style={styles.container}>
     <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
    <Text style={{ alignItems:"center"}}>January 30th at 1PM</Text>
            </View>
          </View>
           <View style={styles.AboveNavContainer}>
            <View style={styles.MatchContainer}>
            <Text>Lowkey Esports</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Lowkey Esports');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
        <View style={styles.circle}><Text style={{marginTop:15,marginLeft:15}}>Vs.</Text></View>
         <View style={styles.MatchContainer}>
            <Text>Royal Youth</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Royal Youth');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
            </View>
           </View>
    );
  }
}
class MEGAFLMScreen extends React.Component {
  render() {
    return (
     <View style={styles.container}>
       <View style={styles.container}>
     <View style={{textAlign:'center', alignitems:"center", justifyContent:"center", height: 60, backgroundColor: 'white', margin:10, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderTopWidth:2, borderColor:'black'}}>
    <Text style={{ alignItems:"center"}}>January 31st at 1PM</Text>
            </View>
          </View>
           <View style={styles.AboveNavContainer}>
            <View style={styles.MatchContainer}>
            <Text>MEGA Esports</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on MEGA Esports');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
        <View style={styles.circle}><Text style={{marginTop:15,marginLeft:15}}>Vs.</Text></View>
         <View style={styles.MatchContainer}>
            <Text>FLamengo Esports</Text>
            <Text style={{marginTop:20}}>Total Bets: 1000</Text>
            <View style={styles.BetButtonContainer}>
             <TouchableOpacity style={{alignItems:"stretch", height:60, }}
        onPress={() => {
    alert('You bet five dollars on Flamengo Esports');
  }}>
    <Text style={{marginTop:3, alignItems:"center"}}>Place Bet ($5)</Text>
</TouchableOpacity>
            </View>
        </View>
            </View>
           </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  NavContainer: {
   flex: 1,
   justifyContent: 'center',
   flexDirection: 'row',
   flexWrap: 'wrap',
   marginTop:20
  },
  HomebuttonContainer: {
    width: 48,
    height: 48,
    margin: 1,
  },
  signInPageLayout: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
  },
  AboveNavContainer: {
     flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom:30

  },
  GoHomeButtonContainer: {
    width: 30,
    height: 30,
    margin: 1,
  },
  AccountContainer: {
    width: 130,
    textAlign:"right",
  },
    MatchContainer: {
    width: 125,
    height: 125,
    margin: 10,
    marginTop:50,
    borderBottomWidth: 2,
    borderTopWidth:2,
    borderLeftWidth:2,
    borderRightWidth:2,
    borderColor:'black',
    alignContent:'center',
    textAlign:'center'
  },
  BetButtonContainer: {
    width: 110,
    height: 30,
    marginLeft:6,
    marginTop:25,
    borderBottomWidth: 2,
    borderTopWidth:2,
    borderLeftWidth:2,
    borderRightWidth:2,
    borderColor:'black',
    alignContent:'center',
    textAlign:'center'
  },
  circle: {
    width: 50,
    marginTop:85,
    height: 50,
    borderRadius: 50/2,
    borderColor:'black',
    borderBottomWidth: 2,
    borderTopWidth:2,
    borderLeftWidth:2,
    borderRightWidth:2,
},
emptyContainer: {
textAlign:'center',
alignitems:"center",
justifyContent:"center",
height: 60, backgroundColor: 'white',
margin:10,
marginTop:40
}
});
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    SignIn: SignInScreen,
    CreateAccount: CreateAccountScreen,
    FirstJanuaryMatches: FirstJanuaryMatchesScreen,
    SecondJanuaryMatches: SecondJanuaryMatchesScreen,
    ThirdJanuaryMatches: ThirdJanuaryMatchesScreen,
    FourthJanuaryMatches: FourthJanuaryMatchesScreen,
    FifthJanuaryMatches: FifthJanuaryMatchesScreen,
    SixthJanuaryMatches: SixthJanuaryMatchesScreen,
    FPXG2: FPXG2Screen,
    TLFLY: TLFLYScreen,
    TSMCG: TSMCGScreen,
    SKTDWG: SKTDWGScreen,
    C9DIG: C9DIGScreen,
    MMT100T: MMT100TScreen,
    GAMDFM: GAMDFMScreen,
    GRFRNG:GRFRNGScreen,
    AHQHKA: AHQHKAScreen,
    SPYJTM: SPYJTMScreen,
    UOLISG: UOLISGScreen,
    LOKROY: LOKROYScreen,
    MEGAFLM: MEGAFLMScreen

  },
  {
    initialRouteName: 'SignIn',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
