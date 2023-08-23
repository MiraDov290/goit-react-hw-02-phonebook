import React from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Button, Input } from './ContactForm.styled';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  // Генерація
  nameInputId = nanoid();
  numberInputId = nanoid();

  // Відправка форми
  handleSubmit = event => {
    event.preventDefault();

    // Виклик функції onSubmit
    this.props.onSubmit({ name: this.state.name, number: this.state.number });

    // Відміна форми
    this.reset();
  };

  // обробка форми
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Відміна форми
  reset = () => {
    this.setState({ number: '', name: '' });
    };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label htmlFor={this.numberInputId}>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact </Button>
      </Form>
    );
  }
}

export default ContactForm;