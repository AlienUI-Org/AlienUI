import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";

const Table = () => {
  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com", role: "Viewer" },
  ];

  return (
    <View className="flex-1 bg-white p-4">
      <ScrollView horizontal>
        <View className="min-w-[600px] border-collapse">
          <View className="flex-row bg-gray-100">
            <Text className="flex-[0.5] font-bold text-base text-left px-4 py-2">
              ID
            </Text>
            <Text className="flex-1 font-bold text-base text-left px-4 py-2">
              Name
            </Text>
            <Text className="flex-1 font-bold text-base text-left px-4 py-2">
              Email
            </Text>
            <Text className="flex-1 font-bold text-base text-left px-4 py-2">
              Role
            </Text>
          </View>

          <FlatList
            data={tableData}
            renderItem={({ item, index }) => (
              <View
                className={`flex-row ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                }`}
              >
                <Text className="flex-[0.5] text-base text-left px-4 py-2">
                  {item.id}
                </Text>
                <Text className="flex-1 text-base text-left px-4 py-2">
                  {item.name}
                </Text>
                <Text className="flex-1 text-base text-left px-4 py-2">
                  {item.email}
                </Text>
                <Text className="flex-1 text-base text-left px-4 py-2">
                  {item.role}
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Table;
