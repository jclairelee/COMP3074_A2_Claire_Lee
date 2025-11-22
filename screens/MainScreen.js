import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import LabeledInput from "../components/LabeledInput";

export default function MainScreen({ navigation }) {
  const API_URL = "https://api.freecurrencyapi.com/v1/latest";
  const API_KEY = "fca_live_mPgnrI9KBNQcUHs1bp4rHNOvC6S6p7482XdoGLze";

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [baseCurrency, setBaseCurrency] = useState("CAD");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [amount, setAmount] = useState("1");
  const validateInputs = () => {
    setError("");
    setResult(null);

    const base = baseCurrency.trim().toUpperCase();
    const target = targetCurrency.trim().toUpperCase();

    if (!/^[A-Z]{3}$/.test(base)) {
      setError("Base currency must be a 3-letter uppercase code (e.g., CAD).");
      return null;
    }

    if (!/^[A-Z]{3}$/.test(target)) {
      setError(
        "Destination currency must be a 3-letter uppercase code (e.g., USD)."
      );
      return null;
    }

    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      setError("Amount must be a positive number.");
      return null;
    }

    return { base, target, numericAmount };
  };
  const handleConvert = async () => {
    const validated = validateInputs();
    if (!validated) return;

    const { base, target, numericAmount } = validated;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const url = `${API_URL}?apikey=${API_KEY}&base_currency=${base}&currencies=${target}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API responded with status ${response.status}`);
      }

      const json = await response.json();

      if (!json || !json.data) {
        throw new Error("Invalid response format from API.");
      }

      const rate = json.data[target];
      if (rate === undefined || rate === null) {
        throw new Error(
          `Exchange rate for ${target} based on ${base} not found.`
        );
      }

      const convertedAmount = numericAmount * rate;

      setResult({
        rate,
        convertedAmount,
        base,
        target,
        originalAmount: numericAmount,
      });
    } catch (e) {
      setError(
        e.message ||
          "An error occurred while fetching the exchange rate. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

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
          <Button
            title={loading ? "Converting..." : "Convert"}
            onPress={handleConvert}
            disabled={loading}
          />
        </View>

        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingText}>Fetching exchange rate...</Text>
          </View>
        )}

        {error ? (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}
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
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  loadingText: {
    marginLeft: 8,
    fontSize: 14,
  },
  errorBox: {
    marginTop: 8,
    padding: 10,
    backgroundColor: "#fee2e2",
    borderRadius: 6,
  },
  errorText: {
    color: "#b91c1c",
  },
});
