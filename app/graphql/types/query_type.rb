module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    description 'Root query'

    # field :parks, [ParkType], null: true
    field :parks, ParkType.connection_type, null: true

    def parks
      Park.all
    end

    field :park, ParkType, null: true do
      description "Find a park by ID"
      argument :id, ID, required: true
    end

    def park(id:)
      Park.find(id: id)
    end
  end
end
