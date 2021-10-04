module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    description 'Root query'

    field :parks, ParkType.connection_type, null: true do
      description "Parks index"
      argument :query, String, required: false
    end

    def parks(query: nil)
      parks = Park.all
      parks = parks.where('name ILIKE :q OR full_name ILIKE :q', q: "#{query}%") if query.present?
      parks
    end

    field :park, ParkType, null: true do
      description "Find a park by ID"
      argument :id, ID, required: true
    end

    def park(id:)
      Park.find(id)
    end

    field :background_photos, [PexelPhotoType], null: true

    def background_photos
      api = PexelsApi.new
      api.get_background_photos
    end

  end
end
