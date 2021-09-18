class Park < ApplicationRecord
  validates :code, uniqueness: true

  class << self
    def create_or_update_from_nps
      parks_data = nps_api.get_parks
      puts parks_data
      puts parks_data.first['parkCode']
      parks_data.each do |p|
        park = Park.find_or_initialize_by(code: p['parkCode'])

        park.save
      end

    end

    private

    def nps_api
      NpsApi.new
    end
  end


end
