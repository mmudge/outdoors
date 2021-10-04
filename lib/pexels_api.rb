require 'httparty'

class PexelsApi
  def initialize
    api_key = Rails.application.credentials[:pexels_api_key]
    @options = {
      headers: { "Content-Type": "application/json", "Authorization": api_key },
      query: {},
      format: 'plain'
    }
  end

  BASE_URL = 'https://api.pexels.com/v1/search'


  def get_background_photos
    @options[:query][:query] = 'national parks'
    @options[:query][:per_page] = 6
    @options[:query][:size] = 'large'
    @options[:query][:orientation] = 'landscape'

    @response ||= HTTParty.get(BASE_URL, @options)
    photos_data = JSON.parse(@response)

    photos_data["photos"]
  end
end
