import { useEffect, useState } from "react";
import { Sandwich } from "./Sandwich";

const mapping: {
  [key: string]: {
    node: React.ReactNode;
  };
} = {
  "000": {
    node: (
      <Sandwich
        color="#f4cccc"
        description="A green, oval fruit originally from southern Brazil, Uruguay, Paraguay, and northern Argentina. It has a sweet, tangy flavor and is very popular in New Zealand."
        funFact="Both the fruit and the flower petals are edible! The petals are sweet and can be eaten fresh or sprinkled into salads."
      />
    ),
  },
  "001": {
    node: (
      <Sandwich
        color="#fff2cc"
        description="Legumes that grow underground rather than on trees. They originally come from South America. Today, they are grown worldwide and are a staple in many diets, enjoyed roasted, boiled."
        funFact="They belong to the legume family. Despite this, they are one of the most popular food and are packed with protein, making them a favorite snack and ingredient."
      />
    ),
  },
  "010": {
    node: (
      <Sandwich
        color="#d9ead3"
        description="Originated in ancient Mesopotamia, where people discovered it accidentally while storing and transporting milk. "
        funFact="Color changes depending on the cow’s diet. Cows that eat fresh grass produce this item with a naturally yellow hue because of beta-carotene in the grass. "
      />
    ),
  },
  "011": {
    node: (
      <Sandwich
        color="#9fc5e8"
        description="Native to Europe and Asia, particularly around Turkey. They have a rich, slightly sweet flavor and are enjoyed raw, roasted."
        funFact="Have been eaten since ancient times, archaeologists have found evidence of people roasting them over 9,000 years ago in Scotland."
      />
    ),
  },
};

function App() {
  const [barcode, setBarcode] = useState("");

  useEffect(() => {
    let buffer = "";

    window.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setBarcode(buffer);
        buffer = "";
        return;
      }

      buffer += e.key;
    });
  }, []);

  if (!barcode) {
    return (
      <div className="text-center">
        <h3 className="mb-2 font-bold text-xl">Waiting</h3>
        <p className="text-lg">Scan a barcode!</p>
      </div>
    );
  }

  if (!mapping[barcode]) {
    return (
      <div className="text-center">
        <h3 className="mb-2 font-bold text-xl">Error</h3>
        <p className="text-lg">No barcode was matched.</p>
      </div>
    );
  }

  return mapping[barcode]?.node;
}

export default App;
