module Types
  class PexelPhotoType < Types::BaseObject
    graphql_name 'PexelsPhoto'
    description 'A Photo from Pexels'

    field :id, ID, null: true
    field :url, String, null: true
    field :width, String, null: true
    field :height, String, null: true
    field :photographer, String, null: true
    field :original, String, null: true
    def original
      object['src']['original']
    end

    field :xlarge, String, null: true
    def xlarge
      object['src']['large2x']
    end

    field :large, String, null: true
    def large
      object['src']['large']
    end

    field :medium, String, null: true
    def medium
      object['src']['medium']
    end

    field :small, String, null: true
    def small
      object['src']['small']
    end

    field :xsmall, String, null: true
    def xsmall
      object['src']['xsmall']
    end

    field :portrait, String, null: true
    def portrait
      object['src']['portrait']
    end

    field :landscape, String, null: true
    def landscape
      object['src']['landscape']
    end

  end
end
