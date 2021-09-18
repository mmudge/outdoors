require 'httparty'
class NpsApi
  def initialize
    api_key = Rails.application.credentials[:nps_api_key]
    @options = {
      headers: { "Content-Type": "application/json" },
      query: { api_key: api_key },
      format: 'plain'
    }
  end

  BASE_URL = 'https://developer.nps.gov/api/v1/'

  def get_parks
    url = BASE_URL + 'parks'

    @response ||= HTTParty.get(url, @options)

    # puts response.body

    JSON.parse(@response.body)['data']
  end
end
