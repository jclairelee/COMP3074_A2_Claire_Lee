import { StyleSheet, Text, TextInput, View } from "react-native";

export default function LabeledInput({
  label,            // Text above the input
  value,            // Current text value
  onChangeText,     // Handler for text change
  placeholder,      // Placeholder text
  keyboardType = "default",
  autoCapitalize = "none",
  maxLength,
  example,          // NEW: optional helper text (e.g., "Example: CAD, USD, GBP")
}) {
  return (
    <View style={styles.container}>
      {/* Label */}
      <Text style={styles.label}>{label}</Text>

      {/* Input box */}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
      />

      {/* Optional example/helper text */}
      {example && <Text style={styles.exampleText}>{example}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  exampleText: {
    fontSize: 12,
    color: "#6b7280", // soft gray
    marginTop: 4,
  },
});
