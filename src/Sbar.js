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
export default class Sbar extends React.Component {

    state={
        seta:[],
        setb:[],
        val1:'',
        val2:'',
        flag:''
    };

addSeta(value) {
    value = parseFloat(value)
    this.setState({ seta : [...this.state.seta, value] });
    this.setState({val1:''})
}

addSetb(value) {
    value = parseFloat(value)
    this.setState({ setb : [...this.state.setb, value] });
    this.setState({val2:''})
}

setFlag() {
    this.setState({flag:'yes'})
}

render() {
return (
<ScrollView>
<View style={styles.container}>
<View style={[styles.viewStyle]}>
    <Text style={[styles.textStyle]}>Enter Value for Set 1</Text>
    <TextInput placeholder="0" style={[styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.val1)} onChangeText={text => this.setState({val1: text})}></TextInput>
    <Text style={[styles.textStyle]}>Set 1</Text>
    <TextInput style={[styles.set]} placeholder="Values of Set" editable={false}>
        {this.state.seta.map((val,key)=><Text key={key}>{val},</Text>)}
    </TextInput>
    <Button title='Add Value' color='#000080' onPress={()=>this.addSeta(this.state.val1)}></Button>                                     
</View>
<View style={[styles.viewStyle]}>
    <Text style={[styles.textStyle]}>Enter Value for Set 2</Text>
    <TextInput placeholder="0" style={[styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.val2)} onChangeText={text => this.setState({val2: text})}></TextInput>
    <Text style={[styles.textStyle]}>Set 2</Text>
    <TextInput style={[styles.set]} placeholder="Values of Set" editable={false}>
        {this.state.setb.map((val,key)=><Text key={key}>{val},</Text>)}
    </TextInput>
    <Button title='Add Value' color='#000080' onPress={()=>this.addSetb(this.state.val2)}></Button>                                     
</View>
<View>
    <Button title='create' color='#000080' onPress={()=>this.setFlag()}></Button>
</View>
<View>
{/*It is an Example of StackedBar Chart*/}
<Text
style={{
textAlign: 'center',
fontSize: 18,
padding: 16,
marginTop: 16,
}}>
Stacked Bar Chart
</Text>
{ (this.state.flag.length > 1) && <StackedBarChart data={{
labels: ['Test1', 'Test2'],
legend: ['L1', 'L2', 'L3'],
data: [seta, setb],
barColors: ['#f52105', '#ff9e1f', '#53ff1f'],
}}
width={Dimensions.get('window').width - 16}
height={220}
chartConfig={{
backgroundColor: '#10abc9',
backgroundGradientFrom: '#f7f78b',
backgroundGradientTo: '#fc5858',
decimalPlaces: 2,
color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, style: {
borderRadius: 16,
},
}}
style={{ marginVertical: 8,
borderRadius: 16,
}}
/> }
</View>
</View>
</ScrollView>
);
}
}
const styles = StyleSheet.create({
viewStyle:{
    borderColor:'black',
    borderWidth:0,
    padding:7,
    margin:15,
    borderRadius:5,
},
textStyle:{
        color:"black",
        fontSize:15
},
set:{
    color:"black",
    fontSize:15,
},
textIn:{
    color:"black",
    fontSize:20,    
},
container: {
    flex: 1,
    justifyContent: 'center', padding: 8,
    paddingTop: 30, backgroundColor: '#ecf0f1',
},
});