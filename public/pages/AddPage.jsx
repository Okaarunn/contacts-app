import React from "react";
import { addContact } from "../../src/data";
import ContactInput from "../../src/ContactInput";

function AddPage() {
  function onAddContactHandler(contact) {
    addContact(contact);
  }

  return (
    <section>
      <h2>Tambah Kontak</h2>
      <ContactInput addContact={onAddContactHandler} />
    </section>
  );
}

export default AddPage;
