import {View, Text, Pressable, FlatList} from "react-native"
import styles from "./StyleHome"

const DATA = [
    {id: "1", title: "🍌 Bananinha"},
    {id: "2", title: "🍊 Laranja"},
    {id: "3", title: "🍍 Abacaxi"},
    {id: "4", title: "🍎 Maça"},
    {id: "5", title: "🍇 Uva Croc Croc"}
]

export default function(){
    const renderItens = ({item}: {item : {title : string}}) => (
        <Pressable onPress={() => alert(item.title)} style={styles.item}>
            <Text style={styles.text}>{item.title}</Text>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={1}
                style={styles.lista}
                data={DATA}
                keyExtractor={(item) = item.id}
            />
        </View>
    );
} 