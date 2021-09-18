require 'httparty'
class NpsApi
  # include HTTParty

  def initialize
    api_key = Rails.application.credentials[:nps_api_key]
    @options = {
      headers: { "Content-Type": "application/json" },
      params: { api_key: api_key }
    }
  end

  BASE_URL = 'https://developer.nps.gov/api/v1/'

  def get_parks
    url = BASE_URL + 'parks'

    response = HTTParty.get(url, options)
    JSON.parse(response.body['data'])
  end
end
