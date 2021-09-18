require 'httparty'
class NpsApi
  def initialize
    api_key = Rails.application.credentials[:nps_api_key]
    @options = {
      headers: { "Content-Type": "application/json" },
      query: { api_key: api_key},
      format: 'plain'
    }
  end

  BASE_URL = 'https://developer.nps.gov/api/v1/'

  def get_parks
    url = BASE_URL + 'parks'

    parks = []
    @options[:query][:start] = 0
    @options[:query][:limit] = 50

    loop do
      response = HTTParty.get(url, @options)
      parks_data = JSON.parse(response.body)['data']

      parks += parks_data

      @options[:query][:start] = @options[:query][:limit]
      @options[:query][:limit] = @options[:query][:limit] + 50

      break if parks_data.length < 1
    end

    parks
  end
end
