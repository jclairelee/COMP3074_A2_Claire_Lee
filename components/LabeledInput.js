// A reusable labeled text input component
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function LabeledInput({
  label,          // Text shown above the input (e.g., "Amount")
  value,          // Current value inside the input
  onChangeText,   // Function called when the text changes
  placeholder,    // Hint text shown when empty
  keyboardType = "default",    // Keyboard type (default / numeric)
  autoCapitalize = "none",     // Controls capitalization (useful for currency codes)
  maxLength,      // Optional character limit
}) {
  return (
    <View style={styles.container}>
      {/* Label above the input */}
      <Text style={styles.label}>{label}</Text>

      {/* Actual input field */}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12, // Spacing below each input component
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,  // Space between label and input
  },
  input: {
    borderWidth: 1,       // Input border
    borderColor: "#ccc",  // Light gray border color
    borderRadius: 6,      // Rounded corners
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: "#fff", // White background
  },
});
