import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Header, Badge, TextInput as textInput } from "components";
import { searchHobbies } from "utils/searchHobbies";
import { colors } from "utils/constants/.";

const Wrapper = styled.div`
  margin-top: 40px;
`;

const TextInput = styled(textInput)`
  box-shadow: none;
  width: 100%;
`;

const Search = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Label = styled.div`
  min-width: 130px;
`;

const BadgeWrapper = styled.div`
  margin-right: 10px;
`;

const SuggestionsDropdown = styled.div`
  position: absolute;
  top: 50px;
  left: 135px;
  max-height: 200px;
  background-color: papayawhip;
  border-radius: 0 0 5px 5px;
  overflow: hidden;
  width: calc(80%);
  min-width: 300px;
  z-index: 9999;
`;

const Results = styled.div`
  display: flex;
  cursor: pointer;
  padding: 5px 10px;
  width: 100%;

  &:hover {
    opacity: 80%;
    background-color: ${colors.primary};
  }
`;

function Hobbies() {
  const [isFocused, setIsFocused] = useState(false);
  const [input, setInput] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [suggestions, setSuggestions] = useState({});
  const inputTimeoutRef = useRef(null);

  function renderHobbies(hobbies) {
    return hobbies.map((h) => (
      <BadgeWrapper
        key={h}
        onClick={(e) => {
          setHobbies(hobbies.filter((hobbie) => hobbie !== h));
        }}
      >
        <Badge>{h}</Badge>
      </BadgeWrapper>
    ));
  }

  function renderSearchResults(results) {
    return results.map((r) => {
      return (
        <Results
          key={r}
          onClick={() => {
            if (!hobbies.includes(r)) {
              setHobbies([...hobbies, r]);
            }
          }}
        >
          {r}
        </Results>
      );
    });
  }

  // create a timeout so suggestions appear after X time
  useEffect(() => {
    if (inputTimeoutRef.current !== null) {
      clearTimeout(inputTimeoutRef.current);
    }

    inputTimeoutRef.current = setTimeout(() => {
      if (input !== "") {
        setSuggestions(searchHobbies(input));
      }
    }, 100);
  }, [input]);

  return (
    <Wrapper>
      <Header type="h6">Hobbies!</Header>
      <Search>
        <Label>Add hobbies</Label>
        <TextInput
          placeholder="Ice skating.. Flying!"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim().length > 0) {
              if (!hobbies.includes(e.target.value.trim())) {
                setHobbies([...hobbies, e.target.value.trim()]);
                setInput("");
              }
            }
          }}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
        />
        {isFocused && Object.keys(suggestions).length > 0 && (
          <SuggestionsDropdown>
            {renderSearchResults(suggestions.results)}
            {renderSearchResults(suggestions.fuzzyResults)}
          </SuggestionsDropdown>
        )}
      </Search>
      <div style={{ display: "flex" }}>{renderHobbies(hobbies)}</div>
    </Wrapper>
  );
}

export default Hobbies;
