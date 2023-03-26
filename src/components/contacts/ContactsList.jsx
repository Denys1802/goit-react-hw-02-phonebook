import { Component } from 'react';
import { List, Item, ContactsBtn } from './ContactsList.styled';
class Contacts extends Component {
  //   state = {
  //     filterContacts: [],
  //   };
  //   onChangeFilter = e => {
  //     this.setState({ filter: e.target.value });
  //     this.state.filterContacts = this.state.contacts.filter(contact => {
  //       return contact.name.toLowerCase().includes(e.target.value);
  //     });
  //   };
  render() {
    return this.props.contacts.map(contact => (
      <List key={contact.id}>
        <Item>
          <p>
            {contact.name}: {contact.number}
          </p>
          <ContactsBtn
            type="button"
            onClick={this.props.deleteContact}
            id={contact.id}
          >
            Delete
          </ContactsBtn>
        </Item>
      </List>
    ));
  }
}
export default Contacts;
