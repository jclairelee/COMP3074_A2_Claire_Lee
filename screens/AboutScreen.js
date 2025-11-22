import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About This App</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Your Full Name Here</Text>

        <Text style={styles.label}>Student ID:</Text>
        <Text style={styles.value}>YourStudentIDHere</Text>

        <Text style={[styles.label, { marginTop: 12 }]}>
          Application Description:
        </Text>
        <Text style={styles.description}>
          This application converts an amount from a base currency into a
          destination currency. It uses the Free Currency API to fetch the
          latest exchange rates, validates user input, handles errors and
          displays the converted amount and the rate used.
        </Text>
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
  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 4,
  },
  value: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    marginTop: 4,
    lineHeight: 20,
  },
});
