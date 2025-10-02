import React from "react";
import ContactList from "../components/ContactList";
import { getContacts, deleteContact } from "../utils/api";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import LocaleContext from "../context/LocaleContext";
import { useState } from "react";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [contacts, setContacts] = useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getContacts().then(({ data }) => {
      setContacts(data);
    });
  }, []);

  async function onDeleteHandler(id) {
    await deleteContact(id);

    // update this contacts state from network js
    const { data } = await getContacts();
    setContacts(data);
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  // filter contacts
  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section>
      <SearchBar
        keyword={keyword}
        keywordChange={onKeywordChangeHandler}
      ></SearchBar>
      <h2>{locale === "id" ? "Daftar Kontak" : "Contacts List"}</h2>
      <ContactList
        contacts={filteredContacts}
        onDelete={onDeleteHandler}
      ></ContactList>
    </section>
  );
}

export default HomePage;
