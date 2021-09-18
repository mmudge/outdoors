module Types
  class ParkType < Types::BaseObject
    field :id, ID, null: false
    field :addresses, GraphQL::Types::JSON, null: true
    field :phones, GraphQL::Types::JSON, null: true
    field :description, String, null: true
    field :park_type, String, null: true
    field :directions, String, null: true
    field :directions_url, String, null: true
    field :enterance_fees, GraphQL::Types::JSON, null: true
    field :enterance_passes, GraphQL::Types::JSON, null: true
    field :full_name, String, null: true
    field :external_id, String, null: true
    field :string, String, null: true
    field :images_data, GraphQL::Types::JSON, null: true
    field :latitude, Float, null: true
    field :longitude, Float, null: true
    field :name, String, null: true
    field :hours, GraphQL::Types::JSON, null: true
    field :code, String, null: true
    field :states, GraphQL::Types::JSON, null: true
    field :url, String, null: true
    field :weather, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
