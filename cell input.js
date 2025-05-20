import SwiftUI

struct ContentView: View {
    @StateObject private var viewModel = TaskViewModel()
    @State private var showingAddTask = false
    @State private var selectedCategory: Category?
    
    var filteredTasks: [Task] {
        guard let selectedCategory = selectedCategory else {
            return viewModel.tasks
        }
        return viewModel.tasks.filter { $0.categoryId == selectedCategory.id }
    }
    
    var body: some View {
        NavigationView {
            VStack(spacing: 0) {
                // Category Filter
                ScrollView(.horizontal, showsIndicators: false) {
                    HStack(spacing: 12) {
                        CategoryFilterButton(title: "All", isSelected: selectedCategory == nil) {
                            selectedCategory = nil
   