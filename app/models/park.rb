class Park < ApplicationRecord
  validates :code, uniqueness: true

  class << self
    def create_or_update_from_nps
      parks_data = nps_api.get_parks

      parks_data.each do |park_data|
        park = Park.find_or_initialize_by(code: park_data['parkCode'])

        park.full_name = park_data['fullName']
        park.name = park_data['name']
        park.code = park_data['parkCode']
        park.description = park_data['description']
        park.park_type = park_data['type']
        park.directions = park_data['directionsInfo']
        park.directions_url = park_data['directionsUrl']
        park.external_id = park_data['id']
        park.url = park_data['url']
        park.weather = park_data['weatherInfo']
        park.addresses = park_data['addresses']
        park.phones = park_data['contacts'].first['phoneNumbers'].map { |p| p['phoneNumber']}
        park.enterance_fees = park_data['enteranceFees']
        park.enterance_passes = park_data['enterancePasses']
        park.images_data = park_data['images']

        lat, long = park_data['latLong'].split(',')
        lat = lat.split(':').last
        long = long.split(':').last

        park.latitude = lat.to_f
        park.longitude = long.to_f

        park.hours = park_data['operatingHours']
        park.states = park_data['states']

        park.save
      end
    end

    private

    def nps_api
      NpsApi.new
    end
  end
end
