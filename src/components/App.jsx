import Contacts from '../components/contacts/ContactsList';
import { Component } from 'react';
import UserForm from '../components/userForm/UserForm';
import { Filter } from '../components/filter/Filter';
import { Section } from './section/Section';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmitForm = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = e => {
    this.state.contacts.forEach((value, key) => {
      if (value.id === e.target.id) {
        this.state.contacts.splice(key, 1);
        this.setState(this.state.contacts);
      }
    });
  };

  onFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Section>
          <h1>Phomebook</h1>
          <UserForm
            onSubmit={this.handleSubmitForm}
            contacts={this.state.contacts}
          />

          <h2>Contacts</h2>
          <Filter
            onFilter={this.onFilter}
            filter={this.state.filter}
            filteredContact={this.filterContact}
          />

          <Contacts
            filter={this.state.filter}
            contacts={this.state.contacts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
