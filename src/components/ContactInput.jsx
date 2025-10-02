import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function ContactInput({ addContact }) {
  const [name, onNameChangeHandler, setName] = useInput("");
  const [tag, onTagChangeHandler, setTag] = useInput("");

  const onSubmitEventHandler = (e) => {
    e.preventDefault();
    addContact({ name, tag });

    // reset input after submit
    setName("");
    setTag("");
  };

  return (
    <form className="contact-input" onSubmit={onSubmitEventHandler}>
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={onNameChangeHandler}
      />
      <input
        type="text"
        placeholder="Tag"
        value={tag}
        onChange={onTagChangeHandler}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

// class ContactInput extends React.Component {
//   constructor(props) {
//     super(props);

//     // initial state
//     this.state = {
//       name: "",
//       tag: "",
//     };

//     this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
//     this.onTagChangeHandler = this.onTagChangeHandler.bind(this);
//     this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
//   }

//   onNameChangeHandler(e) {
//     this.setState(() => {
//       return {
//         name: e.target.value,
//       };
//     });
//   }

//   onTagChangeHandler(e) {
//     this.setState(() => {
//       return {
//         tag: e.target.value,
//       };
//     });
//   }

//   onSubmitEventHandler(e) {
//     e.preventDefault();
//     this.props.addContact(this.state);

//     // delete from when user already submit
//     this.setState(() => {
//       return {
//         name: "",
//         tag: "",
//       };
//     });
//   }

//   render() {
//     return (
//       <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
//         <input
//           type="text"
//           placeholder="Nama"
//           value={this.state.name}
//           onChange={this.onNameChangeHandler}
//         />
//         <input
//           type="text"
//           placeholder="Tag"
//           value={this.state.tag}
//           onChange={this.onTagChangeHandler}
//         />
//         <button type="submit">Tambah</button>
//       </form>
//     );
//   }
// }

// validation input user
ContactInput.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactInput;
