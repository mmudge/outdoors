module Types
  class ParkType < Types::BaseObject
    graphql_name 'Park'
    description 'A National Park object'

    field :id, ID, null: false
    field :code, String, null: true
    field :name, String, null: true
    field :full_name, String, null: true
    field :description, String, null: true
    field :url, String, null: true
    field :weather, String, null: true
    field :addresses, GraphQL::Types::JSON, null: true
    field :phones, GraphQL::Types::JSON, null: true
    field :park_type, String, null: true
    field :directions, String, null: true
    field :directions_url, String, null: true
    field :enterance_fees, GraphQL::Types::JSON, null: true
    field :enterance_passes, GraphQL::Types::JSON, null: true
    field :images_data, GraphQL::Types::JSON, null: true
    field :hours, GraphQL::Types::JSON, null: true
    field :states, GraphQL::Types::JSON, null: true
    field :latitude, Float, null: true
    field :longitude, Float, null: true
  end
end
