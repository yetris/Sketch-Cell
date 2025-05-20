import SwiftUI

struct Category: Identifiable, Codable, Hashable {
    var id = UUID()
    var name: String
    var color: String

}
