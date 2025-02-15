import { useContext } from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { TextContext } from "./context/TextProvider";

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.
  const { texts, onAddText } = useContext(TextContext);

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextInput onAddText={onAddText} />
      <TextList texts={texts} />
    </div>
  );
}

export default App;
