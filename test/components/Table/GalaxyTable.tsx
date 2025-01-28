import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

const Table = () => {
  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com", role: "Viewer" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={[styles.row, styles.header]}>
            <Text style={[styles.cell, styles.headerText, styles.idColumn]}>
              ID
            </Text>
            <Text style={[styles.cell, styles.headerText]}>Name</Text>
            <Text style={[styles.cell, styles.headerText]}>Email</Text>
            <Text style={[styles.cell, styles.headerText]}>Role</Text>
          </View>

          {/* Table Body */}
          <FlatList
            data={tableData}
            renderItem={({ item, index }) => (
              <View
                style={[
                  styles.row,
                  index % 2 === 1 ? styles.evenRow : styles.oddRow,
                ]}
              >
                <Text style={[styles.cell, styles.idColumn]}>{item.id}</Text>
                <Text style={styles.cell}>{item.name}</Text>
                <Text style={styles.cell}>{item.email}</Text>
                <Text style={styles.cell}>{item.role}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
  table: {
    minWidth: 500,
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 8,
  },
  cell: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    textAlign: "left",
    fontSize: 16,
  },
  idColumn: {
    flex: 0.5,
  },
  header: {
    backgroundColor: "#f3f4f6",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "left",
  },
  oddRow: {
    backgroundColor: "#fff",
  },
  evenRow: {
    backgroundColor: "#f9f9f9",
  },
});

export default Table;
