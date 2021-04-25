import * as React from 'react';
import { Text, Button, TextInput, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import {
LineChart,
BarChart,
PieChart, ProgressChart,
ContributionGraph,
StackedBarChart,
} from 'react-native-chart-kit';
export default class Bar extends React.Component {
    state={
        set:[],
        val:'',
        flag:'o'
    };

    addSet(value) {
        value = parseFloat(value)
        this.setState({ set : [...this.state.set, value] });
        this.setState({val:''})
    }
    setFlag() {
        this.setState({flag:'yes'})
    }

render() {
return (
<ScrollView>
<View style={styles.container}>
<View style={[styles.viewStyle]}>
    <Text style={[styles.textStyle]}>Enter the income amounts</Text>
    <TextInput placeholder="0" style={[styles.textIn]} keyboardType={'numeric'} defaultValue={String(this.state.val)} onChangeText={text => this.setState({val: text})}></TextInput>
    <Text style={[styles.textStyle]}>Monthly incomes</Text>
     <TextInput style={[styles.set]} placeholder="Values of Set" editable={false}>
        {this.state.set.map((val,key)=><Text key={key}>{val},</Text>)}
     </TextInput>
     <Button title='Add Value' color='#000080' onPress={()=>this.addSet(this.state.val)}></Button>
</View>
<View>
    <Button title='create' color='#000080' onPress={()=>this.setFlag()}></Button>
</View>             
    
<View>
{/*It is an Example of Bar Chart*/}
<Text
style={{
textAlign: 'center',
fontSize: 18,
padding: 16,
marginTop: 16,
}}>
Bar Chart
</Text>
{ (this.state.flag.length > 1) && <BarChart data={{
labels: [ 'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun',
],
datasets: [
{
data: this.state.set,
},
],
}}
width={Dimensions.get('window').width - 16}
height={220}
yAxisLabel={'$'} chartConfig={{
backgroundColor: '#10c9bd',
backgroundGradientFrom: '#f2b40a',
backgroundGradientTo: '#99f7e3',
decimalPlaces: 2,
color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
style: {
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
    marginTop:50,
    flex: 1,
    justifyContent: 'center', padding: 8,
    paddingTop: 30, backgroundColor: '#ecf0f1',
},
});