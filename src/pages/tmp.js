import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class tmp extends Component {
 render() {
   return (
     <Container>
       <Header>
         <Left>
           <Button transparent>
             <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()}/>
           </Button>
         </Left>
         <Body>
           <Title>Header</Title>
         </Body>
         <Right />
       </Header>
       <Content>
         <Text>
           Home screen
         </Text>
       </Content>
      
     </Container>
   );
 }
}
