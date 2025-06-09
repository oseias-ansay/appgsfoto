import { Container } from "./styles";
import { FlatList, View } from "react-native";
import { MartaMelo } from "../Publicidade/MartaMelo";
import { ElianeFaria } from "../Publicidade/ElianeFaria";
import { CarolMeiga } from "../Publicidade/CarolMeiga";


const cards = [
  { id: '1', component: <MartaMelo /> }, 
  { id: '2', component: <CarolMeiga/> },
 
];

export function FlatListPublicidade() {
  return (
    <Container style={{backgroundColor: '#f2f2f2', height: 160}}>
      <FlatList
        data={cards}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center', height: 150 }}
        renderItem={({ item }) => (
          <View style={{
            width: 250,
            height: 150,
            backgroundColor: '#F2F2F2',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {item.component}
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ width: 5 }} />
        )}
      />
    </Container>
  );
}