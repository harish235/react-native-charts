import * as React from 'react';
import { Text, TextInput, Button, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import {
LineChart,
BarChart,
PieChart,
ProgressChart,
ContributionGraph,
StackedBarChart,
} from 'react-native-chart-kit';
export default class Pie extends React.Component {

    state={
        kovai:'',
        chennai:'',
        madurai:'',
        trichy:'',
        flag:''
    };
    setFlag() {
        this.setState({flag:'yes'})
    }

render() {
return (
<ScrollView>
<View style={styles.container}>
<View style={[styles.viewStyle]}>
    <Text style={[styles.textStyle]}>Coimbatore population</Text>
    <TextInput placeholder="0" style={[styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.kovai)} onChangeText={text => this.setState({kovai: text})}></TextInput>
    <Text style={[styles.textStyle]}>Chennai population</Text>
    <TextInput placeholder="0" style={[styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.chennai)} onChangeText={text => this.setState({chennai: text})}></TextInput>  
    <Text style={[styles.textStyle]}>Madurai population</Text>
    <TextInput placeholder="0" style={[styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.madurai)} onChangeText={text => this.setState({madurai: text})}></TextInput>   
    <Text style={[styles.textStyle]}>Trichy population</Text>
    <TextInput placeholder="0" style={[styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.trichy)} onChangeText={text => this.setState({trichy: text})}></TextInput>                                
</View>
<View>
    <Button title='create' color='#000080' onPress={()=>this.setFlag()}></Button>
</View>
<View>
{/*It is an Example of Pie Chart*/}
<Text
style={{
textAlign: 'center',
fontSize: 18,
padding: 16,
marginTop: 16,
}}>
Pie Chart
</Text>
{ (this.state.flag.length > 1) && <PieChart data={[
{
name: 'Coimbatore',
population: 250000,
color: '#b81ff0',
legendFontColor: '#050505',
legendFontSize: 15,
},
{
name: 'Chennai',
population: 120000,
color: '#f2f763',
legendFontColor: '#050505',
legendFontSize: 15,
},
{
name: 'Trichy',
population: 200000,
color: '#62f518',
legendFontColor: '#050505',
legendFontSize: 15,
},
{
name: 'Madurai',
population: 300000,
color: '#f51818',
legendFontColor: '#050505',
legendFontSize: 15,
},

]}
width={Dimensions.get('window').width - 16} height={220}
chartConfig={{ backgroundColor: '#194ad1',
backgroundGradientFrom: '#f74871',
backgroundGradientTo: '#ffbc47',
decimalPlaces: 2,
color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
style: {
borderRadius: 16,
},
}}
style={{ marginVertical: 8,
borderRadius: 16,
}}
accessor="population"
backgroundColor="transparent"
paddingLeft="15"
absolute
/> }
</View>
</View>
</ScrollView>
);
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
padding: 8,
paddingTop: 30,
backgroundColor: '#ecf0f1',
},
viewStyle:{
    borderColor:'black',
    borderWidth:0,
    padding:10,
    margin:30,
    borderRadius:5,
},
textStyle:{
    color:"black",
    fontSize:15
},
textIn:{
color:"black",
    fontSize:20,
    
},
});