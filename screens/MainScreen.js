import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LabeledInput from "../components/LabeledInput";

export default function MainScreen({ navigation }) {
  const [baseCurrency, setBaseCurrency] = useState("CAD");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [amount, setAmount] = useState("1");

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Currency Converter</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("About")}
          style={styles.aboutButton}
        >
          <Text style={styles.aboutButtonText}>About</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <LabeledInput
          label="Base Currency Code"
          value={baseCurrency}
          onChangeText={setBaseCurrency}
          placeholder="e.g., CAD"
          autoCapitalize="characters"
          maxLength={3}
        />

        <LabeledInput
          label="Destination Currency Code"
          value={targetCurrency}
          onChangeText={setTargetCurrency}
          placeholder="e.g., USD"
          autoCapitalize="characters"
          maxLength={3}
        />

        <LabeledInput
          label="Amount"
          value={amount}
          onChangeText={setAmount}
          placeholder="e.g., 1"
          keyboardType="numeric"
        />

        <View style={styles.buttonContainer}>
          <Button title="Convert" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f3f4f6",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  aboutButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#2563eb",
  },
  aboutButtonText: {
    color: "#2563eb",
    fontWeight: "600",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  form: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    elevation: 2,
  },
  buttonContainer: {
    marginTop: 8,
  },
});
