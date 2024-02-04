import React, { createContext, useContext, useState, useEffect } from "react";

const JournalsContext = createContext(undefined);

const JournalsProvider = ({ children }) => {
  const [journalText, setJournalText] = useState("Balls");
  console.log(journalText)

  
  async function removeJournal() {
    let temp = journalText;
    setJournalText("");
    return temp;
  }
  
  async function addJournal(journal) {
    setJournalText(journal)
  }

  return (
    <JournalsContext.Provider
      value={{ journalText, removeJournal, addJournal }}
    >
      {children}
    </JournalsContext.Provider>
  );
};

function useJournals() {
  const context = useContext(JournalsContext);
  if (context === undefined) {
    throw new Error("useJournals must be used within a JournalProvider");
  }
  return context;
}

export { JournalsProvider, useJournals };